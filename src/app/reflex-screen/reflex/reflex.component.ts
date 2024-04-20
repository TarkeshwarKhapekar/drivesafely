import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { JudgementService } from 'src/app/_service/judgement.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-reflex',
  templateUrl: './reflex.component.html',
  styleUrls: ['./reflex.component.css'],
})
export class ReflexComponent implements OnInit {
  typeChange: EventEmitter<string> = new EventEmitter<string>();

  onTypeChange(event: any) {
    const selectedType: string = event.target.value;
    this.typeChange.emit(selectedType);
  }

  myImage!: Observable<any>;
  myImage1!: Observable<any>;

  base64code!: any;
  addReflexForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  reflexId: any;
  reflexDetails: any;
  imgsrc: any;
  imagefiles: any;
  filesview: any;
  allowedImageTypes: any = [];
  reflexResultImage1: any = [];
  reflexResultImage2: any = [];
  reflexPreviewImages1: any = [];
  reflexPreviewImages2: any = [];
  id: any;
  selectedLng: any = 'en';
  selectLng: any = 'en';
  image: any;
  url: string = environment.image_url;
  imageurl: undefined;

  constructor(
    private fb: FormBuilder,
    private judgementService: JudgementService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allowedImageTypes = this.judgementService.allowedImageTypes;
    this.getReflexScreenDetails();
    this.addReflexForm = this.fb.group({
      reflexscreen1: [''],
      reflexscreen2: [''],
    });
  }

  openImageSelector1() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload1'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      this._ToastrManager.errorToastr('Something went wrong!');
    }
  }

  openImageSelector2() {
    let element: HTMLElement = document.getElementsByClassName(
      'file-upload2'
    )[0] as HTMLElement;
    if (element) {
      element.click();
    } else {
      this._ToastrManager.errorToastr('Something went wrong!');
    }
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.converToBase64(file);
  };

  onChange1 = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file1: File = (target.files as FileList)[0];
    this.converToBase641(file1);
  };

  converToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.addReflexForm.controls['reflexscreen1'] = d;
      this.myImage = this.addReflexForm.controls['reflexscreen1'];
    });
  }

  converToBase641(file1: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile1(file1, subscriber);
    });

    observable.subscribe((d1) => {
      this.addReflexForm.controls['reflexscreen2'] = d1;
      this.myImage1 = this.addReflexForm.controls['reflexscreen2'];
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

  onSubmit() {
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
            this._ToastrManager.successToastr(
              'Judgement Weightage Score Updated Successfully'
            );
            this.router.navigate(['/DS/reflex-screen']);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
  }

  getReflexScreenDetails = () => {
    this.spinner.show();
    this.judgementService.getReflexDetails().subscribe({
      next: (res) => {
        this.reflexDetails = res.data;
        this.reflexId = this.reflexDetails._id;
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
