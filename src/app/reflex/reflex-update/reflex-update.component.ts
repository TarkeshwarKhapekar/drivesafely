import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { JudgementService } from 'src/app/_service/judgement.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-reflex-update',
  templateUrl: './reflex-update.component.html',
  styleUrls: ['./reflex-update.component.css'],
})
export class ReflexUpdateComponent implements OnInit {
  public typeChange: EventEmitter<string> = new EventEmitter<string>();
  public selectedType: any;
  url: string = environment.image_url;

  addReflexForm: any = FormGroup;
  allowedImageTypes: any = [];
  reflexResultImages: any = [];
  reflexPreviewImages1: any = [];
  reflexPreviewImages2: any = [];
  reflexResultImage1: any;
  reflexResultImage2: any;
  reflexId: any;
  reflexDetails: any;
  submitted = false;

  constructor(
    private _ToastrManager: ToastrManager,
    private judgementService: JudgementService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.allowedImageTypes = this.judgementService.allowedImageTypes;
    this.getReflexDetails();
    this.formValidation();
  }

  openImageSelector1() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      this._ToastrManager.errorToastr('Something went wrong!');
    }
  }
  openImageSelector() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      this._ToastrManager.errorToastr('Something went wrong!');
    }
  }
  onFileChanged(event: any) {
    if (event.target.value.length === 0) {
      return;
    }
    const file = event.target.files[0];
    if (this.allowedImageTypes.indexOf(file.type) !== -1) {
      this.reflexResultImage1 = file;
      if (event.target.files && file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.reflexPreviewImages1.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      this._ToastrManager.errorToastr('Selected image is not allowed.');
    }
  }

  onFileChange2(event: any) {
    alert('1');
    if (event.target.value.length === 0) {
      return;
    }
    const file = event.target.files[0];
    if (this.allowedImageTypes.indexOf(file.type) !== -1) {
      this.reflexResultImage2 = file;
      if (event.target.files && file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.reflexPreviewImages2.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      this._ToastrManager.errorToastr('Selected image is not allowed.');
    }
  }

  id: any;

  removeImages1(index: string) {
    this.spinner.show();
    const parsedUrl = new URL(index);
    const filename = parsedUrl.pathname.split('/').pop();
    this.id = this.reflexId;
    this.judgementService
      .deleteReflexImage(this.id, filename, 'img1')
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              this._ToastrManager.successToastr('Image deleted Successfully');
              this.spinner.hide();
            }, 1000);
          }
        },
        error: (e) => {},
      });
  }

  removeImages2(index: string) {
    this.spinner.show();
    const parsedUrl = new URL(index);
    const filename1 = parsedUrl.pathname.split('/').pop();
    this.id = this.reflexId;
    this.judgementService
      .deleteReflexImage(this.id, filename1, 'img2')
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              this._ToastrManager.successToastr('Image deleted Successfully');
              this.spinner.hide();
            }, 1000);
          }
        },
        error: (e) => {},
      });
  }

  formValidation() {
    this.addReflexForm = new FormGroup({
      reflexscreen1: new FormControl(''),
      reflexscreen2: new FormControl(''),
    });
  }
  onSubmit() {
    this.spinner.show();
    const formData = new FormData();
    formData.append('_id', this.reflexId);
    if (this.reflexResultImage1) {
      formData.append('reflexscreen1', this.reflexResultImage1);
    }
    if (this.reflexResultImage2) {
      formData.append('reflexscreen2', this.reflexResultImage2);
    }
    let data = this.addReflexForm.value;
    data._id = this.reflexId;
    this.judgementService.updateReflex(formData).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            this._ToastrManager.successToastr(
              'Judgement Weightage Score Updated Successfully'
            );
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
  }

  getReflexDetails = () => {
    this.spinner.show();
    this.judgementService.getReflexDetails().subscribe({
      next: (res) => {
        if (res && Array.isArray(res.data) && res.data.length > 0) {
          this.reflexDetails = res.data[0];
          this.reflexId = this.reflexDetails._id;

          const reflexscreen1 = this.reflexDetails.reflexscreen1;
          if (reflexscreen1) {
            const image1 = `${this.url}Other/${reflexscreen1}`;
            this.reflexPreviewImages1.push(image1);
          }

          const reflexscreen2 = this.reflexDetails.reflexscreen2;
          if (reflexscreen2) {
            const image2 = `${this.url}Other/${reflexscreen2}`;
            this.reflexPreviewImages2.push(image2);
          }
        }
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
        this.setData(this.reflexDetails);
      },
      error: (err) => {},
    });
  };

  setData(data: any) {
    this.addReflexForm.patchValue({
      reflexscreen1: data?.reflexscreen1,
      reflexscreen2: data?.reflexscreen2,
    });
  }

  goBack() {
    window.history.back();
  }
}
