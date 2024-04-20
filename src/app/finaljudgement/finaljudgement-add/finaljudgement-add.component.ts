import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { JudgementService } from 'src/app/_service/judgement.service';

@Component({
  selector: 'app-finaljudgement-add',
  templateUrl: './finaljudgement-add.component.html',
  styleUrls: ['./finaljudgement-add.component.css'],
})
export class FinaljudgementAddComponent implements OnInit {
  public typeChange: EventEmitter<string> = new EventEmitter<string>();
  public selectedType: any;

  addConfigForm: any = FormGroup;
  configId: any;
  configDetails: any;
  submitted = false;
  selectedLng: any;
  selectLng: any;
  selectsLng: any;
  isChecked: boolean = false;
  isCheckedd: boolean = false;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private judgementService: JudgementService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.configId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getQolDetails();
    this.formValidation();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
      this.selectsLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
      this.selectsLng = 'ja';
    }
  }

  formValidation() {
    this.addConfigForm = this.fb.group({
      min_value: ['', [Validators.required]],
      max_value: ['', [Validators.required]],
      level: ['', [Validators.required]],
      levelJa: ['', [Validators.required]],
      description: ['', [Validators.required]],
      descriptionJa: ['', [Validators.required]],
      title: ['', [Validators.required]],
      titleJa: ['', [Validators.required]],
      colorCode: [''],
      caseSleepinessJa: [''],
      caseSleepiness: [''],
      caseExerciseJa: [''],
      caseExercise: [''],
      caseStressJa: [''],
      caseStress: [''],
      caseReflexJa: [''],
      caseReflex: [''],
    });
  }

  get f() {
    return this.addConfigForm.controls;
  }

  onSubmit() {
    let data = this.addConfigForm.value;
    if (!this.configId) {
      this.judgementService.addConfig(data).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Config Added Successfully'
                  : '構成が正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/finaljudgement']);
            }, 1000);
          } else {
            const errorMessage =
              this.selectedLang === 'en'
                ? 'Duplicate Data Detected'
                : '重複データが検出されました';
            this._ToastrManager.errorToastr(errorMessage);
          }
        },
        error: (error) => {},
      });
    } else {
      let data = this.addConfigForm.value;
      data._id = this.configId;
      this.judgementService.updateConfig(data).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Config Updated Successfully'
                  : '構成が正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/finaljudgement']);
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getQolDetails = () => {
    if (this.configId) {
      this.spinner.show();
      this.judgementService.getconfigDetails(this.configId).subscribe({
        next: (res) => {
          this.configDetails = res.data[0];
          setTimeout(() => {
            this.spinner.hide();
          }, 500);

          this.setData(this.configDetails);
        },
        error: (err) => {},
      });
    }
  };

  setData(data: any) {
    this.addConfigForm.patchValue({
      min_value: data?.min_value,
      max_value: data?.max_value,
      level: data?.level.en,
      levelJa: data?.level.ja,
      description: data?.description.en,
      descriptionJa: data?.description.ja,
      title: data?.title.en,
      titleJa: data?.title.ja,
      colorCode: data?.colorCode,

      caseSleepinessJa: data?.comments?.sleepiness?.ja,
      caseSleepiness: data?.comments?.sleepiness?.en,
      caseExerciseJa: data?.comments?.exercise?.ja,
      caseExercise: data?.comments?.exercise?.en,
      caseStressJa: data?.comments?.stress?.ja,
      caseStress: data?.comments?.stress?.en,
      caseReflexJa: data?.comments?.reflex?.ja,
      caseReflex: data?.comments?.reflex?.en,
    });
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addConfigForm.reset();
  }

  isSubmitDisabled() {
    return this.addConfigForm.pristine || this.addConfigForm.invalid;
  }
}
