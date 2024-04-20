import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { CorporateService } from 'src/app/_service/corporate.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-add-corporate-user',
  templateUrl: './add-corporate-user.component.html',
  styleUrls: ['./add-corporate-user.component.css'],
})
export class AddCorporateUserComponent implements OnInit {
  genderChange: EventEmitter<string> = new EventEmitter<string>();

  onGenderChange(event: any) {
    const selectedGender: string = event.target.value;
    this.genderChange.emit(selectedGender);
  }

  addCorporateForm: any = FormGroup;
  corporateList: any[] = [];
  corporateCode: any;
  corporateDetails: any;
  submitted = false;
  count = 5;
  fieldTextType!: boolean;
  fieldTextType1!: boolean;

  public corporateId: any;
  public corporatecorporateCode: any;

  public passwordMatched = false;
  @ViewChild('confirmPassword', { static: false }) confirmPassword!: ElementRef;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private corporateService: CorporateService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.corporateId = params.get('id');
    });

    this.route.paramMap.subscribe((params) => {
      this.corporateCode = params.get('code');
    });
  }

  ngOnInit(): void {
    this.formValidation();
    this.getCorporateDetails();
  }

  formValidation() {
    if (this.corporateId) {
      this.addCorporateForm = this.fb.group({
        name: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            ),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\+?\d+$/),
            Validators.pattern('[0-9]*'),
            Validators.minLength(11),
          ],
        ],
        gender: ['', [Validators.required]],
        corporateCode: [
          '',
          Validators.required,
          Validators.pattern(/^\d{5}$/),
          Validators.minLength(5),
          Validators.maxLength(5),
        ],
      });
    } else {
      this.addCorporateForm = this.fb.group({
        name: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            ),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\+?\d+$/),
            Validators.pattern('[0-9]*'),
            Validators.minLength(11),
          ],
        ],
        gender: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        corporateCode: [
          this.corporateCode,
          [
            Validators.required,
            Validators.pattern(/^\d{5}$/),
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        ],
      });
    }
  }

  checkMatch(pwd1: string, pwd2: string) {
    this.passwordMatched = pwd1 == pwd2 ? true : false;
  }

  //toggle password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextType1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }

  get f() {
    return this.addCorporateForm.controls;
  }
  onSubmit() {
    if (this.corporateId) {
      let data = this.addCorporateForm.value;
      data.corporateCode = this.addCorporateForm.get('corporateCode').value;
      data._id = this.corporateId;
      data.roles = 'SUBADMIN';
      data.deviceType = 'web';
      this.corporateService.editCorporateUser(data).subscribe({
        next: (result) => {
          if (result.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Corporate User Updated Successfully'
                  : '企業ユーザーは正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/corporate/user']);
            }, 1000);
          } else {
            const errorMessage =
              this.selectedLang === 'en'
                ? 'Email is already exist!'
                : '電子メールはすでに存在します！';
            this._ToastrManager.errorToastr(errorMessage);
          }
        },
      });
    } else {
      let data = this.addCorporateForm.value;
      data.corporateCode = this.addCorporateForm.get('corporateCode').value;
      data.roles = 'SUBADMIN';
      data.deviceType = 'web';
      this.corporateService.addCorporateUser(data).subscribe({
        next: (result) => {
          if (result.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Corporate User Added Successfully'
                  : '企業ユーザーが正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/corporate/user']);
            }, 1000);
          } else {
            const errorMessage =
              this.selectedLang === 'en'
                ? 'Email is already exist!'
                : '電子メールはすでに存在します！';
            this._ToastrManager.errorToastr(errorMessage);
          }
        },
      });
    }
  }

  getCorporateDetails = () => {
    if (this.corporateId) {
      this.spinner.show();
      this.corporateService.corporateUserView(this.corporateId).subscribe({
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

  getAllCorporateDetails = () => {
    let data = {
      page: 1,
      filter: '',
      count: this.count,
    };
    this.spinner.show();
    this.corporateService.corporateList(data).subscribe({
      next: (res) => {
        this.corporateList = res.data.data;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  };

  setData(data: any) {
    this.addCorporateForm.patchValue({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      gender: data?.gender,
      password: data?.password,
      corporateCode: data?.corporateCode,
    });
  }

  setcorporateCode(data: any) {
    this.addCorporateForm.patchValue({});
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addCorporateForm.reset();
    this.confirmPassword.nativeElement.value = '';
  }

  fiveDigitValidator(control: any) {
    const value = control.value;

    if (!/^\d{5}$/.test(value)) {
      return { invalidFiveDigit: true };
    }

    return null; // Validation passed
  }

  isSubmitDisabled() {
    return this.addCorporateForm.pristine || this.addCorporateForm.invalid;
  }
}
