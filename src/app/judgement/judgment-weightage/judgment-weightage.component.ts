import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { JudgementService } from 'src/app/_service/judgement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-judgment-weightage',
  templateUrl: './judgment-weightage.component.html',
  styleUrls: ['./judgment-weightage.component.css'],
})
export class JudgmentWeightageComponent implements OnInit {
  scoreData: any;
  addScoreForm: any = FormGroup;
  weightageId: any;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private judmentService: JudgementService,
    private spinner: NgxSpinnerService,
    private router: Router,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getQolDetails();
    this.formValidation();
    // alert( this.translateService.instant('FinalJudgementThreshold.Level'));
  }

  formValidation() {
    this.addScoreForm = this.fb.group({
      sleepScore: [''],
      exerciseScore: [''],
      stressScore: [''],
      reflexScore: [''],
    });
  }
  get f() {
    return this.addScoreForm.controls;
  }

  onSubmit() {
    this.spinner.show();
    if (this.weightageId) {
      let data = this.addScoreForm.value;
      const totalScore =
        data.sleepScore +
        data.exerciseScore +
        data.stressScore +
        data.reflexScore;

      if (totalScore !== 100) {
        this.spinner.hide();
        const errorMessage =
          this.selectedLang === 'en'
            ? 'Total score must be exactly 100'
            : '合計スコアはちょうど 100 でなければなりません';
        this._ToastrManager.errorToastr(errorMessage);
        return;
      }

      data._id = this.weightageId;

      this.judmentService.updateScore(data).subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Judgement Weightage Score Updated Successfully'
                  : '判定加重スコアが正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/judgement-weightage']);
              this.spinner.hide();
            }, 1000);
          }
        },
        error: (e) => {},
      });
    }
  }

  getQolDetails = () => {
    this.spinner.show();
    this.judmentService.judgementList().subscribe({
      next: (res) => {
        this.scoreData = res.data[0];
        this.weightageId = res.data[0]._id;

        setTimeout(() => {
          this.spinner.hide();
        }, 500);
        this.setData(this.scoreData);
      },
      error: (err) => {},
    });
  };

  setData(data: any) {
    this.addScoreForm.patchValue({
      sleepScore: data?.sleepScore,
      exerciseScore: data?.exerciseScore,
      stressScore: data?.stressScore,
      reflexScore: data?.reflexScore,
    });
  }

  goBack() {
    window.history.back();
  }
}
