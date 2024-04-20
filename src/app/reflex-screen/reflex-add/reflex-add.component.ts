import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { JudgementService } from 'src/app/_service/judgement.service';
import { Observable, Subscriber } from 'rxjs';

import { Validators } from '@angular/forms';
@Component({
  selector: 'app-reflex-add',
  templateUrl: './reflex-add.component.html',
  styleUrls: ['./reflex-add.component.css'],
})
export class ReflexAddComponent implements OnInit {
  typeChange: EventEmitter<string> = new EventEmitter<string>();

  myImage!: Observable<any>;
  myImage1!: Observable<any>;

  addReflexForm!: FormGroup;
  submitted = false;
  reflexId: any;
  reflexDetails: any;
  id: any;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private judgementService: JudgementService,
    private toastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.reflexId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.addReflexForm = this.fb.group({
      reflexscreen1: ['', [Validators.required]],
      reflexscreen2: ['', [Validators.required]],
    });
    this.getReflexDetails();
  }

  onTypeChange(event: any) {
    const selectedType: string = event.target.value;
    this.typeChange.emit(selectedType);
  }

  openImageSelector1() {
    const element: HTMLElement = document.querySelector(
      '.file-upload1'
    ) as HTMLElement;
    if (element) {
      element.click();
    } else {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'Something went wrong!'
          : '何か問題が発生しました!';
      this.toastrManager.errorToastr(errorMessage);
    }
  }

  openImageSelector2() {
    const element: HTMLElement = document.querySelector(
      '.file-upload2'
    ) as HTMLElement;
    if (element) {
      element.click();
    } else {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'Something went wrong!'
          : '何か問題が発生しました!';
      this.toastrManager.errorToastr(errorMessage);
    }
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const maxSizeInBytes = 10485760; // 10KB
    if (file.size <= maxSizeInBytes) {
      this.converToBase64(file);
    } else {
      const errorMessage =
        this.selectedLang == 'en'
          ? 'Image size should be less than 10MB.'
          : '画像サイズは10MB未満である必要があります。';
      this.toastrManager.errorToastr(errorMessage);
    }
  };

  onChange1 = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file1: File = (target.files as FileList)[0];
    const maxSizeInBytes = 10485760; // 10KB
    if (file1.size <= maxSizeInBytes) {
      this.converToBase641(file1);
    } else {
      const errorMessage =
        this.selectedLang == 'en'
          ? 'Image size should be less than 10MB.'
          : '画像サイズは10MB未満である必要があります。';
      this.toastrManager.errorToastr(errorMessage);
    }
  };

  converToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.myImage = d;
    });
  }

  converToBase641(file1: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile1(file1, subscriber);
    });

    observable.subscribe((d1) => {
      this.myImage1 = d1;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    };

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  readFile1(file1: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file1);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    };

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  removeImages1(index: string) {
    this.spinner.show();
    this.id = this.reflexId;
    this.judgementService.deleteReflexImage(this.id, index, 'img1').subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Image deleted Successfully'
                : '画像は正常に削除されました';
            this.toastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
  }

  removeImages2(index: string) {
    this.spinner.show();
    this.id = this.reflexId;
    this.judgementService.deleteReflexImage(this.id, index, 'img2').subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Image deleted Successfully'
                : '画像は正常に削除されました';
            this.toastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
  }

  onSubmit() {
    if (!this.reflexId) {
      if (this.addReflexForm.valid) {
        const jsonData = {
          reflexscreen1: this.myImage,
          reflexscreen2: this.myImage1,
        };

        this.judgementService.addReflex(jsonData).subscribe({
          next: (res: any) => {
            if (res.statusCode == 200) {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Reflex Screen Added Successfully'
                  : 'リフレックススクリーンが正常に追加されました';
              this.toastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/reflex-screen']);
              this.spinner.hide();
            }
          },
          error: (e) => {},
        });
      } else {
        const errorMessage =
          this.selectedLang === 'en'
            ? 'Form data is not valid.'
            : 'フォームデータが無効です。';
        this.toastrManager.errorToastr(errorMessage);
      }
    } else {
      this.spinner.show();
      const jsonData = {
        _id: this.reflexId,
        reflexscreen1: this.myImage,
        reflexscreen2: this.myImage1,
      };

      this.judgementService.updateReflex(jsonData).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Reflex Screen Updated Successfully'
                  : '反射画面が正常に更新されました';
              this.toastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/reflex-screen']);
              this.spinner.hide();
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getReflexDetails = () => {
    if (this.reflexId) {
      this.spinner.show();
      this.judgementService.getReflexDetailsById(this.reflexId).subscribe({
        next: (res) => {
          this.reflexDetails = res.data;
          this.myImage = this.reflexDetails.map((ele: any) => {
            return ele.reflexscreen1;
          });
          this.myImage1 = this.reflexDetails.map((ele: any) => {
            return ele.reflexscreen2;
          });
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.reflexDetails);
        },
        error: (err) => {},
      });
    }
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

  onCancel(): void {
    this.submitted = false;
    this.addReflexForm.reset();
  }
}
