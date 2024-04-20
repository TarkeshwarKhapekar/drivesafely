import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { QuestionnaireService } from 'src/app/_service/questionnaire.service';

@Component({
  selector: 'app-questionnaire-add',
  templateUrl: './questionnaire-add.component.html',
  styleUrls: ['./questionnaire-add.component.css'],
})
export class QuestionnaireAddComponent implements OnInit {
  public questionForm: any;
  public questionObjLength: number = 0;
  public OtherquestionType: any;
  public isSelected: boolean = true;
  questionType: any;
  selectQuestion: any;
  optionDisabled: boolean = true;
  buttonDisable: boolean = false;
  question_creds: any;
  Qcount: number = 1;
  shortAnswerquestionType: any;
  paragraphquestionType: any;
  questionnairedId!: any;
  questionData: any;
  selectLng: any = 'en';
  selectedLng: any = 'en';

  constructor(
    private fb: FormBuilder,
    private _questionnaireService: QuestionnaireService,
    private _ToastrManager: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('questionnaire-edit')) {
      this.route.paramMap.subscribe((params) => {
        this.questionnairedId = params.get('id');
        this.getQuestion();
      });
    }

    this.questionForm = this.fb.group({
      questionObj: this.fb.array([]),
    });

    const question_creds = this.questionForm.get('questionObj') as FormArray;
    if (this.questionnairedId) {
    } else {
      question_creds.push(
        this.fb.group({
          questionName: '',
          questionNameJA: '',
          ansType: '',
          pfeedback: ['false'],
          title: '',
          precision: '',
          questionnaireSetObj: this.fb.array([]),
          RangequestionnaireSetObj: this.fb.array([]),
          paragraphSetObj: this.fb.array([]),
          shortAnswerSetObj: this.fb.array([]),
        })
      );
    }
  }

  questionObjArr(): FormArray {
    return this.questionForm.get('questionObj') as FormArray;
  }

  newQuestionAdd(): FormGroup {
    return this.fb.group({
      questionName: '',
      questionNameJA: '',
      ansType: '',
      precision: '',
      pfeedback: ['false'],
      title: '',
      index: this.questionObjLength,
      questionnaireSetObj: this.fb.array([]),
      RangequestionnaireSetObj: this.fb.array([]),
      paragraphSetObj: this.fb.array([]),
      shortAnswerSetObj: this.fb.array([]),
    });
  }
  addQuestion() {
    this.questionObjLength++;
    this.optionDisabled = false;
    this.buttonDisable = false;
    this.questionObjArr().push(this.newQuestionAdd());
  }

  removeQuestion(questionIndex: number) {
    this.questionObjLength = this.questionObjLength - 1;
    this.questionObjArr().removeAt(questionIndex);
  }

  answerAddObj(questionIndex: number): FormArray {
    return this.questionObjArr()
      .at(questionIndex)
      .get('questionnaireSetObj') as FormArray;
  }

  addAnswer(): FormGroup {
    return this.fb.group({
      name: [''],
      nameJA: [''],
      scoreVal: ['0'],
      colorCode: ['#007e0c'],
    });
  }

  addAnswerSheet(questionIndex: number, questionType: any) {
    if (questionType == 'range') {
      this.buttonDisable = true;
    }
    if (questionType != 'range') {
      this.buttonDisable = false;
      this.answerAddObj(questionIndex).push(this.addAnswer());
    }
  }

  RangeaddAnswer(): FormGroup {
    return this.fb.group(
      {
        range: [''],
        range_risk_min: ['0', [Validators.required]],
        range_risk_max: ['0', [Validators.required]],
        scoreVal: ['0'],
        colorCode: ['#007e0c'],
      },
      {}
    );
  }

  RangeanswerAddObj(questionIndex: number): FormArray {
    return this.questionObjArr()
      .at(questionIndex)
      .get('RangequestionnaireSetObj') as FormArray;
  }

  addAnswerSheet2(questionIndex: number, questionType: any) {}

  onChange(event: any, id: any) {
    this.questionType = event.target.value;
    this.optionDisabled = true;
    localStorage.setItem('RangequestionType', '');
    if (event.target.value == 'range') {
      let questionType = 'range';
      localStorage.setItem('RangequestionType', questionType);
      this.answerAddObj(id).clear();
      this.question_creds = this.questionForm.get('questionObj') as FormArray;
      const RangeanswerAddObj = this.question_creds
        .at(id)
        .get('RangequestionnaireSetObj') as FormArray;
      RangeanswerAddObj.push(
        this.fb.group(
          {
            range: [''],
            range_risk_min: ['0', [Validators.required]],
            range_risk_max: ['0', [Validators.required]],
            scoreVal: ['0'],
            colorCode: ['#007e0c'],
          },
          {}
        )
      );
    } else if (event.target.value == 'paragraph') {
      this.RangeanswerAddObj(id).clear();
      this.answerAddObj(id).clear();
      this.buttonDisable = false;
      let OtherquestionType = event.target.value;
      localStorage.setItem('paragraphquestionType', OtherquestionType);
      this.question_creds = this.questionForm.get('questionObj') as FormArray;
      const answer_creds = this.question_creds
        .at(id)
        .get('paragraphSetObj') as FormArray;

      answer_creds.push(
        this.fb.group({
          name: [''],
          nameJA: [''],
          scoreVal: [''],
          colorCode: ['#007e0c'],
        })
      );
    } else if (event.target.value == 'short_answer') {
      this.RangeanswerAddObj(id).clear();
      this.answerAddObj(id).clear();
      this.buttonDisable = false;
      let OtherquestionType = event.target.value;
      localStorage.setItem('shortAnswerquestionType', OtherquestionType);
      this.question_creds = this.questionForm.get('questionObj') as FormArray;
      const answer_creds = this.question_creds
        .at(id)
        .get('shortAnswerSetObj') as FormArray;

      answer_creds.push(
        this.fb.group({
          name: [''],
          nameJA: [''],
          scoreVal: [''],
          colorCode: ['#007e0c'],
        })
      );
    } else {
      this.RangeanswerAddObj(id).clear();
      this.answerAddObj(id).clear();
      this.buttonDisable = false;
      let OtherquestionType = event.target.value;
      localStorage.setItem('OtherquestionType', OtherquestionType);
      this.question_creds = this.questionForm.get('questionObj') as FormArray;
      const answer_creds = this.question_creds
        .at(id)
        .get('questionnaireSetObj') as FormArray;

      answer_creds.push(
        this.fb.group({
          name: [''],
          nameJA: [''],
          scoreVal: [''],
          colorCode: ['#007e0c'],
        })
      );
    }
    if (
      localStorage.getItem('RangequestionType') != '' ||
      localStorage.getItem('RangequestionType') != undefined
    ) {
      this.selectQuestion = localStorage.getItem('RangequestionType');
    }

    if (
      localStorage.getItem('OtherquestionType') != '' ||
      localStorage.getItem('OtherquestionType') != undefined
    ) {
      this.OtherquestionType = localStorage.getItem('OtherquestionType');
    }
  }

  removeAnswerSheet(questionIndex: number, answerIndex: number) {
    this.answerAddObj(questionIndex).removeAt(answerIndex);
  }
  numericOnly(event: any): boolean {
    let patt = new RegExp(/^\d*\.?\d{0,2}$/g);
    let result = patt.test(event.key);
    return result;
  }

  submitForm() {
    let obj1: any = {
      questionName: {
        en: this.questionForm.value.questionObj[0].questionName,
        ja: this.questionForm.value.questionObj[0].questionNameJA,
      },
      ansType: this.questionForm.value.questionObj[0].ansType,
    };

    let options: any = [];
    this.questionForm.value.questionObj[0].questionnaireSetObj.forEach(
      (element: any) => {
        let ob = {
          name: {
            en: element.name,
            ja: element.nameJA,
          },
          scoreVal: Number(element.scoreVal),
        };
        options.push(ob);
      }
    );

    obj1['options'] = options;
    this._questionnaireService.addQuestion(obj1).subscribe(
      (res) => {
        setTimeout(() => {
          this._ToastrManager.successToastr('Successfully');
          this.router.navigate(['/DS/questionnaire']);
        }, 1000);
      },
      (error) => {
        this._ToastrManager.errorToastr('Failed');
      }
    );
  }

  updateForm() {
    const udata: any = {
      _id: this.questionnairedId,
      questionName: {
        en: this.questionForm.value.questionObj[0].questionName,
        ja: this.questionForm.value.questionObj[0].questionNameJA,
      },
      ansType: this.questionForm.value.questionObj[0].ansType,
    };

    let options: any = [];
    this.questionForm.value.questionObj[0].questionnaireSetObj.forEach(
      (element: any) => {
        let ob = {
          name: {
            en: element.name,
            ja: element.nameJA,
          },
          scoreVal: Number(element.scoreVal),
        };
        options.push(ob);
      }
    );

    udata['options'] = options;
    this._questionnaireService.editQuestion(udata).subscribe(
      (res) => {
        setTimeout(() => {
          this._ToastrManager.successToastr('Successfully');
          this.router.navigate(['/DS/questionnaire']);
        }, 1000);
      },
      (error) => {
        this._ToastrManager.errorToastr('Failed');
      }
    );
  }

  getQuestion() {
    this._questionnaireService.getQuestion(this.questionnairedId).subscribe(
      (res) => {
        this.questionData = res.data;
        this.questionType = this.questionData.ansType;
        this.OtherquestionType = this.questionData.ansType;

        const question_creds = this.questionForm.get(
          'questionObj'
        ) as FormArray;
        if (this.questionnairedId) {
          setTimeout(() => {
            question_creds.push(
              this.fb.group({
                questionName: this.questionData?.questionName.en,
                questionNameJA: this.questionData?.questionName.ja,
                ansType: this.questionData?.ansType,
                pfeedback: ['false'],
                title: '',
                precision: '',
                questionnaireSetObj: this.fb.array([]),
                RangequestionnaireSetObj: this.fb.array([]),
                paragraphSetObj: this.fb.array([]),
                shortAnswerSetObj: this.fb.array([]),
              })
            );

            if (this.questionData.ansType == 'range') {
              this.buttonDisable = true;
            }
            if (this.questionData.ansType != 'range') {
              this.buttonDisable = false;

              for (let i = 0; i < this.questionData.options.length; i++) {
                this.answerAddObj(0).push(
                  this.fb.group({
                    name: [this.questionData.options[i].name.en],
                    nameJA: [this.questionData.options[i].name.ja],
                    scoreVal: [this.questionData.options[i].scoreVal],
                    colorCode: [this.questionData.options[i].colorCode],
                  })
                );
              }
            }
          }, 100);
        }
      },
      (error) => {}
    );
  }
}
