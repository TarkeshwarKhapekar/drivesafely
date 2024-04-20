import { Component, OnInit, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from 'src/app/_service/notice.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notice-add',
  templateUrl: './notice-add.component.html',
  styleUrls: ['./notice-add.component.css'],
})
export class NoticeAddComponent implements OnInit {
  typeChange: EventEmitter<string> = new EventEmitter<string>();

  onTypeChange(event: any) {
    const selectedType: string = event.target.value;
    this.typeChange.emit(selectedType);
  }
  originalFormValue: any;
  addNoticeForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  noticeId: any;
  noticeDetails: any;
  imgsrc: any;
  imagefiles: any;
  filesview: any;
  allowedImageTypes: any = [];
  noticeImages: any = [];
  noticePreviewImages: any = [];
  selectedLng: any;
  selectLng: any;
  image: any;
  url: string = environment.image_url;
  imageurl: undefined;
  public selectedLang: any = 'ja';

  constructor(
    private fb: FormBuilder,
    private noticeService: NoticeService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.noticeId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }

    this.allowedImageTypes = this.noticeService.allowedImageTypes;
    this.formValidation();
    this.getNoticeDetails();
  }

  formValidation() {
    this.addNoticeForm = this.fb.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
      titleJa: ['', [Validators.required]],
      message: ['', [Validators.required]],
      messageJa: ['', [Validators.required]],
      image: [''],
    });

    this.originalFormValue = this.addNoticeForm.value;

    this.addNoticeForm.valueChanges.subscribe(() => {
      this.submitted = false;
    });
  }

  openImageSelector() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      const errorMessage =
        this.selectedLang == 'en'
          ? 'Something went wrong!'
          : '何か問題が発生しました!';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }

  onFileChanged(event: any) {
    if (event.target.value.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const maxSizeInBytes = 10485760; // 10KB

    if (this.allowedImageTypes.indexOf(file.type) !== -1) {
      if (file.size <= maxSizeInBytes) {
        this.noticeImages.push(file);

        if (event.target.files && file) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.noticePreviewImages.push(event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          const errorMessage =
            this.selectedLang == 'en'
              ? 'Selected image is not allowed.'
              : '選択した画像は許可されていません。!';
          this._ToastrManager.errorToastr(errorMessage);
        }
      } else {
        const errorMessage =
          this.selectedLang == 'en'
            ? 'Image size should be less than 10MB.'
            : '画像サイズは10MB未満である必要があります。';
        this._ToastrManager.errorToastr(errorMessage);
      }
    } else {
      const errorMessage =
        this.selectedLang == 'en'
          ? 'Selected image is not allowed.'
          : '選択した画像は許可されていません。!';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }

  id: any;

  removeImages(index: string) {
    this.spinner.show();
    const filename = index.substring(index.lastIndexOf('/') + 1);
    this.id = this.noticeId;
    this.noticeService.deleteImage(this.id, filename).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang == 'en'
                ? 'Image deleted Successfully'
                : '画像は正常に削除されました';
            this._ToastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
    this.noticePreviewImages.splice(index, 1);
    this.noticeImages.splice(index, 1);
  }

  get f() {
    return this.addNoticeForm.controls;
  }

  onSubmit() {
    const formValues: any = this.addNoticeForm.value;
    const formData = new FormData();
    formData.append('type', formValues.type);
    formData.append('title', formValues.title);
    formData.append('titleJa', formValues.titleJa);
    formData.append('message', formValues.message);
    formData.append('messageJa', formValues.messageJa);
    for (var i = 0; i < this.noticeImages.length; i++) {
      formData.append('image', this.noticeImages[i]);
    }

    if (!this.noticeId) {
      this.noticeService.addNotice(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang == 'en'
                  ? 'Notification Added Successfully'
                  : '通知が正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/notice']);
            }, 1000);
          }
        },
        error: (e) => {},
      });
    } else {
      formValues.id = this.noticeId;
      formData.append('id', formValues.id);

      this.noticeService.editNotice(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang == 'en'
                  ? 'Notification Updated Successfully'
                  : '通知が正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/notice']);
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getNoticeDetails = () => {
    if (this.noticeId) {
      this.spinner.show();
      this.noticeService.noticeView(this.noticeId).subscribe({
        next: (res) => {
          this.noticeDetails = res.data[0];

          this.noticeDetails.image.forEach((element: any) => {
            const path = `${this.url}/${this.noticeDetails?.type}/${element}`;
            this.noticePreviewImages.push(path);
          });

          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.noticeDetails);
        },
        error: (err) => {},
      });
    }
  };

  setData(data: any) {
    this.addNoticeForm.patchValue({
      type: data?.type,
      title: data?.title.en,
      titleJa: data?.title.ja,
      message: data?.message.en,
      messageJa: data?.message.ja,
      image: data?.image,
    });
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addNoticeForm.reset();
  }

  isSubmitDisabled() {
    return this.addNoticeForm.pristine || this.addNoticeForm.invalid;
  }
}
