import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserAuthService } from '../../_service/user-auth.service';
import { DriverService } from 'src/app/_service/driver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted = false;
  Password: any;
  roles: any;
  fieldTextType!: boolean;
  public selectedLang: any = 'en';
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    public _userAuthService: UserAuthService,
    public _dservice: DriverService
  ) {
    if (localStorage.getItem('selectedLang')) {
      this.selectedLang = localStorage.getItem('selectedLang');
    }
  }
  ngOnInit(): void {
    // this.selectedLang = [];
    this.selectedLang = localStorage.getItem('selectedLang');
    console.log(this.selectedLang, 'this.selectedLangthis.selectedLang');
    if (this._userAuthService.IsLoggedIn()) {
      this._router.navigate(['/dashboard']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  get loginform() {
    return this.loginForm.controls;
  }

  onSubmiteLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show();

    let loginParams = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      termsCondition: true,
      loginType: 'ADMIN',
      deviceType: 'web',
      selectedLang: this.selectedLang === 'en' ? 'en' : 'ja',
    };
    console.log(loginParams, 'loginParams');
    this._userAuthService.login(loginParams).subscribe(
      (res) => {
        if (
          res.statusCode == 200 &&
          (res.data.roles == 'ADMIN' || res.data.roles == 'SUBADMIN')
        ) {
          let responData = res?.data;

          localStorage.setItem('role', res.data.roles);
          localStorage.setItem('userName', 'Admin');
          localStorage.setItem('_id', responData._id);
          localStorage.setItem('email', responData.email);
          localStorage.setItem(
            '_drivingSafetyAccessToken',
            responData.loginToken
          );
          localStorage.setItem('roles', responData.roles);
          sessionStorage.setItem(
            '_drivingSafetyAccessToken',
            responData.loginToken
          );
          sessionStorage.setItem('isLoggin', 'true');
          localStorage.setItem('corporateCode', responData.corporateCode);

          const successMessage =
            localStorage.getItem('selectedLang') === 'en'
              ? 'Successfull login!'
              : 'ログインに成功しました！';

          this._ToastrManager.successToastr(successMessage);
          this._dservice.setHtoken(responData.loginToken);
          // this._userAuthService.SharingRolesData.next(res.data.roles);
          this._userAuthService.setSharingRolesData(res.data.roles);
          this._userAuthService.setDefaultSearchList(responData.defaultSearch);
          localStorage.setItem(
            'defaultSearchList',
            JSON.stringify(responData.defaultSearch)
          );

          setTimeout(() => {
            this.spinner.hide();
            if (res.data.roles === 'ADMIN') {
              this._router.navigate(['DS']);
            } else if (res.data.roles === 'SUBADMIN') {
              this._router.navigate(['DS/driver']);
            } else {
            }
          }, 1000);
        } else {
          setTimeout(() => {
            this.spinner.hide();
            const warningMessage =
              localStorage.getItem('selectedLang') === 'en'
                ? 'Invalid Credentials'
                : '無効な資格情報';

            this._ToastrManager.warningToastr(warningMessage);
          }, 1000);
        }
      },
      (error) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    );
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
