import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ContentService } from 'src/app/_service/content.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css'],
})
export class ContentAddComponent implements OnInit {
  public typeChange: EventEmitter<string> = new EventEmitter<string>();
  public selectedType: any;
  url: string = environment.image_url;
  video_url: string = environment.video_url;
  onTypeChange(event: any) {
    this.selectedType = event.target.value;
    this.typeChange.emit(this.selectedType);
  }

  addContentForm: any = FormGroup;
  contentDetails: any;
  submitted = false;
  fieldTextType!: boolean;
  contentId: any;
  imgsrc: any;
  imagefiles: any;
  videosFiles: any;
  filesview: any;
  allowedImageTypes: any = [];
  contentImages: any = [];
  contentPreviewImages: any = [];
  allowedVideoTypes: any = [];
  contentVideos: any = [];
  contentPreviewVideos: any = [];
  selectedLng: any;
  selectLng: any;
  selectImgVid = 'img';
  id: any;
  public selectedLang: any = 'en';

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private contentService: ContentService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.contentId = params.get('id');
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

    this.allowedImageTypes = this.contentService.allowedImageTypes;
    this.allowedVideoTypes = this.contentService.allowedVideoTypes;
    this.formValidation();
    this.getContentDetails();
  }

  formValidation() {
    this.addContentForm = this.fb.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
      titleJa: ['', [Validators.required]],
      url: [
        '',
        (control: any) => {
          if (control.dirty) {
            if (control.value.trim() !== '') {
              try {
                const url = new URL(control.value);
                if (
                  url.protocol === 'http:' ||
                  url.protocol === 'https:' ||
                  url.protocol === 'ftp:'
                ) {
                  return null;
                }
              } catch (error) {}
              return { invalidUrl: true };
            }
          }
          return null; // No validation error by default
        },
      ],
      frequency: ['60'],
      description: ['', [Validators.required]],
      descriptionJa: ['', [Validators.required]],
      images: [''],
      videos: [''],
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
        this.selectedLang === 'en'
          ? 'Something went wrong!'
          : '何か問題が発生しました!';
      this._ToastrManager.errorToastr(errorMessage);
    }
  }

  onFileChanged(event: any) {
    if (this.isAdvertisementOrTrafficSafetySelected()) {
      this.clearVideoData();
    }
    if (event.target.value.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const maxSizeInBytes = 10485760;
    if (this.allowedImageTypes.indexOf(file.type) !== -1) {
      if (file.size <= maxSizeInBytes) {
        this.contentImages.push(file);
        if (event.target.files && file) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.contentPreviewImages.push(event.target.result);
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

  removeImages(index: string) {
    this.spinner.show();
    const filename = index.substring(index.lastIndexOf('/') + 1);
    this.id = this.contentId;
    this.contentService.deleteContentImage(this.id, filename).subscribe({
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
    this.contentPreviewImages.splice(index, 1);
    this.contentImages.splice(index, 1);
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
    if (this.isAdvertisementOrTrafficSafetySelected()) {
      this.clearImageData();
    }
    if (event.target.value.length === 0) {
      return;
    }
    const file = event.target.files[0];
    if (this.allowedVideoTypes.indexOf(file.type) !== -1) {
      this.contentVideos.push(file);
      if (event.target.files && file) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.contentPreviewVideos.push(event.target.result);
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
    this.contentDetails.videos.forEach((element: any) => {
      if (element.videoURL == filename) {
        videoID = element._id;
      }
    });
    this.id = this.contentId;
    this.contentService
      .deleteContentVideo(this.id, filename, videoID)
      .subscribe({
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
    this.contentVideos.splice(index, 1);
    this.contentPreviewVideos.splice(index, 1);
  }

  isAdvertisementOrTrafficSafetySelected() {
    return (
      this.selectedType === 'Advertisement' ||
      this.selectedType === 'Traffic Safety Information'
    );
  }

  clearImageData() {
    this.contentImages = [];
    this.contentPreviewImages = [];
  }

  clearVideoData() {
    this.contentVideos = [];
    this.contentPreviewVideos = [];
  }

  get f() {
    return this.addContentForm.controls;
  }

  onSubmit() {
    const formValues: any = this.addContentForm.value;
    const formData = new FormData();
    formData.append('type', formValues.type);
    formData.append('title', formValues.title);
    formData.append('titleJa', formValues.titleJa);
    formData.append('url', formValues.url);
    formData.append('frequency', formValues.frequency);
    formData.append('description', formValues.description);
    formData.append('descriptionJa', formValues.descriptionJa);
    for (var i = 0; i < this.contentImages.length; i++) {
      formData.append('images', this.contentImages[i]);
    }
    for (var i = 0; i < this.contentVideos.length; i++) {
      formData.append('videos', this.contentVideos[i]);
    }

    if (!this.contentId) {
      this.contentService.addContent(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Content Added Successfully'
                  : 'コンテンツが正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/content']);
            }, 1000);
          }
        },
        error: (e) => {},
      });
    } else {
      this.spinner.show();
      formValues.id = this.contentId;
      formData.append('id', formValues.id);
      this.contentService.editContent(formData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Content Updated Successfully'
                  : 'コンテンツが正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/content']);
              this.spinner.hide();
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getContentDetails = () => {
    if (this.contentId) {
      this.spinner.show();
      this.contentService.contentView(this.contentId).subscribe({
        next: (res) => {
          this.contentDetails = res.data[0];
          this.contentDetails.images.forEach((element: any) => {
            const path = `${this.url}/${this.contentDetails?.type}/${element}`;
            this.contentPreviewImages.push(path);
          });

          this.contentDetails.videos.forEach((element: any) => {
            const vid = element._id;
            const vpath = `${this.video_url}/${this.contentDetails?.type}/${element.videoURL}`;
            this.contentPreviewVideos.push(vpath);
          });

          this.selectedType = this.contentDetails.type;

          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.contentDetails);
        },
        error: (err) => {},
      });
    }
  };

  setData(data: any) {
    this.addContentForm.patchValue({
      type: data?.type,
      title: data?.title.en,
      titleJa: data?.title.ja,
      url: data?.url,
      description: data?.description.en,
      descriptionJa: data?.description.ja,
      frequency: data?.frequency,
      images: data?.images,
      videos: data?.videos,
    });
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addContentForm.reset();
  }

  isSubmitDisabled() {
    return this.addContentForm.pristine || this.addContentForm.invalid;
  }
}
