import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { QolResultService } from 'src/app/_service/qol-result.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-add-qol',
  templateUrl: './add-qol.component.html',
  styleUrls: ['./add-qol.component.css'],
})
export class AddQolComponent implements OnInit {
  public typeChange: EventEmitter<string> = new EventEmitter<string>();
  public selectedType: any;
  url: string = environment.image_url;
  video_url: string = environment.video_url;
  onTypeChange(event: any) {
    this.selectedType = event.target.value;
    this.typeChange.emit(this.selectedType);
  }

  addQolForm: any = FormGroup;
  allowedImageTypes: any = [];
  allowedVideoTypes: any = [];
  qolResultImages: any = [];
  qolResultVideos: any = [];
  qolPreviewImages: any = [];
  qolPreviewVideos: any = [];
  qolId: any;
  qolDetails: any;
  submitted = false;
  selectedLng: any;
  selectLng: any;
  isChecked: any;
  isCheckedd: any;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private qolResultService: QolResultService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.qolId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.allowedImageTypes = this.qolResultService.allowedImageTypes;
    this.allowedVideoTypes = this.qolResultService.allowedVideoTypes;

    this.formValidation();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }
  }

  formValidation() {
    this.addQolForm = this.fb.group({
      min_value: ['', [Validators.required]],
      max_value: ['', [Validators.required]],
      level: ['', [Validators.required]],
      levelJa: ['', [Validators.required]],
      description: ['', [Validators.required]],
      descriptionJa: ['', [Validators.required]],
      images: [''],
      videos: [''],
      led: [false],
      vibrations: [false],
      colorCode: [''],
      vibrationTime: ['', [Validators.required]],
    });

    this.getQolDetails();
  }

  openImageSelector() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      const errorMessage =
        this.selectedLang === 'en'
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
    if (this.allowedImageTypes.indexOf(file.type) !== -1) {
      this.qolResultImages.push(file);
      if (event.target.files && file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.qolPreviewImages.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'Selected image is not allowed.'
          : '選択した画像は許可されていません。';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }
  id: any;

  removeImages(index: string) {
    this.spinner.show();
    const filename = index.substring(index.lastIndexOf('/') + 1);
    this.id = this.qolId;
    this.qolResultService.deleteQolImage(this.id, filename).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Image deleted Successfully'
                : '画像は正常に削除されました';
            this._ToastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
    this.qolPreviewImages.splice(index, 1);
    this.qolResultImages.splice(index, 1);
  }

  openVideoSelector() {
    let element: HTMLElement = document.getElementsByClassName(
      'video-upload'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'Something went wrong!'
          : '何か問題が発生しました!';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }

  onVideoSelectorChange(event: any) {
    if (event.target.value.length === 0) {
      return;
    }

    const file = event.target.files[0];

    this.qolResultVideos = [];
    this.qolPreviewVideos = [];

    if (this.allowedVideoTypes.indexOf(file.type) !== -1) {
      this.qolResultVideos.push(file);

      if (event.target.files && file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.qolPreviewVideos.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'Selected Video is not allowed.'
          : '選択したビデオは許可されていません。';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }

  removeVideo(index: string) {
    this.spinner.show();
    const filename = index.substring(index.lastIndexOf('/') + 1);
    let videoID;
    this.qolDetails.videos.forEach((element: any) => {
      if (element.videoURL == filename) {
        videoID = element._id;
      }
    });
    this.id = this.qolId;
    this.qolResultService.deleteQolVideo(this.id, filename, videoID).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Video deleted Successfully'
                : 'ビデオは正常に削除されました';
            this._ToastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
    this.qolResultVideos.splice(index, 1);
    this.qolPreviewVideos.splice(index, 1);
  }

  get f() {
    return this.addQolForm.controls;
  }

  onSubmit() {
    const data = this.addQolForm.value;
    const formData = new FormData();
    formData.append('min_value', data.min_value);
    formData.append('max_value', data.max_value);
    formData.append('level', data.level);
    formData.append('levelJa', data.levelJa);
    formData.append('description', data.description);
    formData.append('descriptionJa', data.descriptionJa);
    formData.append('led', data.led);
    formData.append('vibrations', data.vibrations);
    formData.append('colorCode', data.colorCode);
    formData.append('vibrationTime', data.vibrationTime);

    for (var i = 0; i < this.qolResultImages.length; i++) {
      formData.append('images', this.qolResultImages[i]);
    }
    for (var i = 0; i < this.qolResultVideos.length; i++) {
      formData.append('videos', this.qolResultVideos[i]);
    }

    if (!this.qolId) {
      this.qolResultService.addQol(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Content Added Successfully'
                  : 'コンテンツが正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/qol']);
            }, 1000);
          }
        },
        error: (error) => {},
      });
    } else {
      data.id = this.qolId;
      formData.append('id', data.id);
      this.qolResultService.editQol(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Stress Updated Successfully'
                  : 'ストレスが正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/qol']);
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getQolDetails = () => {
    if (this.qolId) {
      this.spinner.show();
      this.qolResultService.qolView(this.qolId).subscribe({
        next: (res) => {
          this.qolDetails = res.data[0];
          if (this.qolDetails.led === true) {
            this.isChecked = true;
          }

          if (this.qolDetails.vibrations === true) {
            this.isCheckedd = true;
          }

          this.qolDetails.images.forEach((element: any) => {
            const path = `${this.url}/Other/${element}`;
            this.qolPreviewImages.push(path);
          });

          this.qolDetails.videos.forEach((element: any) => {
            const vpath = `${this.video_url}/Other/${element.videoURL}`;
            this.qolPreviewVideos.push(vpath);
          });
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.qolDetails);
        },
        error: (err) => {},
      });
    }
  };

  setData(data: any) {
    this.addQolForm.patchValue({
      colorCode: data?.colorCode,
      min_value: data?.min_value,
      max_value: data?.max_value,
      level: data?.level.en,
      levelJa: data?.level.ja,
      description: data?.description.en,
      descriptionJa: data?.description.ja,
      led: data.led,
      vibrations: data.vibrations,
      vibrationTime: data.vibrationTime,
    });

    if (data.images) {
      this.addQolForm.get('images').setValue(data.images);
    }
    if (data.videos) {
      this.addQolForm.get('videos').setValue(data.videos);
    }
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addQolForm.reset();
  }

  isSubmitDisabled() {
    return this.addQolForm.pristine || this.addQolForm.invalid;
  }
}
