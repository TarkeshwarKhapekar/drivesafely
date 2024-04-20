import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm: any = FormGroup;
  verifyOTPForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  userId: any;
  isMail = false;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private _ToastrManager: ToastrManager,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValidation();
  }

  formValidation() {
    this.forgetPasswordForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
    });

    this.verifyOTPForm = this.fb.group({
      otp: ['', [Validators.required]],
    });
  }

  get f() {
    return this.forgetPasswordForm.controls;
  }

  onSubmit() {
    if (this.isMail === true) {
      let data = this.verifyOTPForm.value;
      data._id = this.userId;
      this.spinner.show();
      this.loginService.verifyOTP(data).subscribe((result) => {
        if (result.data.status === 200) {
          this._ToastrManager.successToastr('OTP Verified Successfully');
          setTimeout(() => {
            this.spinner.hide();
            this.isMail = false;
            this.router.navigate([`/login/reset-password/${this.userId}`]);
          }, 1000);
        } else {
          this._ToastrManager.errorToastr(result.data.message);
          this.spinner.hide();
        }
      });
    } else {
      let data = this.forgetPasswordForm.value;
      this.spinner.show();
      this.loginService.forgetPassword(data).subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
            this.userId = res?.data._id;
            this._ToastrManager.successToastr(
              this.selectedLang === 'en' ? res.message.en : res.message.ja
            );
            setTimeout(() => {
              this.spinner.hide();
              this.isMail = true;
            }, 1000);
          } else {
            this._ToastrManager.errorToastr(
              this.selectedLang === 'en' ? res.message.en : res.message.ja
            );
            this.spinner.hide();
          }
        },
        error: (err) => {},
      });
    }
  }
}
