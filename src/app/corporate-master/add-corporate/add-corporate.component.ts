import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { CorporateService } from 'src/app/_service/corporate.service';

@Component({
  selector: 'app-add-corporate',
  templateUrl: './add-corporate.component.html',
  styleUrls: ['./add-corporate.component.css'],
})
export class AddCorporateComponent implements OnInit {
  addCorporateForm: any = FormGroup;
  corporateDetails: any;
  submitted = false;
  fieldTextType!: boolean;
  corporateId: any;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private corporateService: CorporateService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.corporateId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.formValidation();
    this.getCorporateDetails();
  }

  formValidation() {
    this.addCorporateForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    });
  }

  get f() {
    return this.addCorporateForm.controls;
  }

  onSubmit() {
    if (this.corporateId) {
      let data = this.addCorporateForm.value;
      data._id = this.corporateId;
      this.corporateService.editCorporate(data).subscribe((result) => {
        if (result.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Corporate Updated Successfully'
                : '会社が正常に更新されました';
            this._ToastrManager.successToastr(successMessage);
            this.router.navigate(['/DS/corporate']);
          }, 1000);
        } else {
          const errorMessage =
            this.selectedLang === 'en'
              ? 'Corporate master Already Exists!'
              : '法人マスターはすでに存在します!';
          this._ToastrManager.errorToastr(errorMessage);
        }
      });
    } else {
      let data = this.addCorporateForm.value;
      this.corporateService.addCorporate(data).subscribe(
        (result) => {
          if (result.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Corporate Added Successfully'
                  : '企業が正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/corporate']);
            }, 1000);
          } else {
            const errorMessage =
              this.selectedLang === 'en'
                ? 'Corporate master Already Exists!'
                : '法人マスターはすでに存在します!';
            this._ToastrManager.errorToastr(errorMessage);
          }
        },
        (error) => {}
      );
    }
  }

  getCorporateDetails = () => {
    if (this.corporateId) {
      this.spinner.show();
      this.corporateService.corporateView(this.corporateId).subscribe({
        next: (res) => {
          this.corporateDetails = res.data[0];
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.corporateDetails);
        },
        error: (err) => {},
      });
    }
  };

  setData(data: any) {
    this.addCorporateForm.patchValue({
      name: data?.name,
      code: data?.code,
    });
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addCorporateForm.reset();
  }

  isSubmitDisabled() {
    return this.addCorporateForm.pristine || this.addCorporateForm.invalid;
  }
}
