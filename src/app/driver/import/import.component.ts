import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/_service/driver.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
})
export class ImportComponent implements OnInit {
  public selectedLang: any = 'en';

  formData = {
    name: '',
    file: null,
  };

  invalidUsers: any[] = [];
  validUsers: any[] = [];

  addDriverForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private driverService: DriverService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.selectedLang = localStorage.getItem('selectedLang');
  }

  ngOnInit(): void {
    this.formValidation();
  }
  formValidation() {
    this.addDriverForm = this.fb.group({
      csvFile: ['', Validators.required],
    });
  }
  goBack() {
    window.history.back();
  }

  onSubmit() {
    let data = this.addDriverForm.value;

    const formData = new FormData();

    if (this.formData.file) {
      formData.append('csvFile', this.formData.file, this.formData.name);
    }
    this.driverService.importDriver(formData).subscribe(
      (result) => {
        this.spinner.show();

        setTimeout(() => {
          const successMessage =
            this.selectedLang === 'en'
              ? 'Driver Added Successfully'
              : 'ドライバーが正常に追加されました';
          this.invalidUsers = result.data.invalidUsers;
          this.validUsers = result.data.validUsers;
          this.spinner.hide();
        }, 1000);
      },
      (error) => {
        let errorMessage = '';
        this.selectedLang === 'en'
          ? (errorMessage = 'Invalid CSV')
          : (errorMessage = '無効なCSV');
        this._ToastrManager.errorToastr(errorMessage);
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.file = file;
    this.formData.name = 'csvFile';
  }

  onCancel(): void {
    this.addDriverForm.reset();
    this.validUsers = [];
    this.invalidUsers = [];
  }
}
