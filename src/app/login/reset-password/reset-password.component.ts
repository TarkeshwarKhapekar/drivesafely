import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  fieldTextType1!: boolean;

  userId: any;
  public passwordMatched = false;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.resetPasswordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=.*[!@#$%^&*]).{8,}'
          ),
        ],
      ],
      confirmPassword: [''],
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleFieldTextType1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    let data = this.resetPasswordForm.value;
    data._id = this.userId;
    this.spinner.show();
    this.loginService.resetPassword(data).subscribe((result) => {
      if (result.statusCode === 200) {
        this._ToastrManager.successToastr(
          this.selectedLang === 'en' ? result.message.en : result.message.ja
        );
        setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(['/login']);
        }, 1000);
      }
    });
  }

  checkMatch(pwd1: string, pwd2: string) {
    this.passwordMatched = pwd1 == pwd2 ? true : false;
  }
}
