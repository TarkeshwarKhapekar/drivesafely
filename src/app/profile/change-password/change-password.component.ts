import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ProfileService } from 'src/app/_service/profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  fieldTextTypes!: boolean;
  fieldTextTypess!: boolean;
  fieldTextTypesss!: boolean;

  userId: any;
  public passwordMatched = false;
  public selectedLang: any = 'en';
  constructor(
    private fb: FormBuilder,
    private _ToastrManager: ToastrManager,
    private profileService: ProfileService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.formValidation();
    this.selectedLang = localStorage.getItem('selectedLang');
  }

  formValidation() {
    this.changePasswordForm = this.fb.group({
      currentpwd: ['', [Validators.required]],
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

  toggleFieldTextTypes() {
    this.fieldTextTypes = !this.fieldTextTypes;
  }

  toggleFieldTextTypess() {
    this.fieldTextTypess = !this.fieldTextTypess;
  }

  toggleFieldTextTypesss() {
    this.fieldTextTypesss = !this.fieldTextTypesss;
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    let data = this.changePasswordForm.value;
    this.spinner.show();
    this.profileService.changePassword(data).subscribe(
      (result) => {
        if (result.statusCode === 200) {
          this._ToastrManager.successToastr(
            this.selectedLang == 'en' ? result.message.en : result.message.ja
          );

          setTimeout(() => {
            this.spinner.hide();
            this.logOut();
          }, 1000);
        } else {
          this._ToastrManager.errorToastr(
            this.selectedLang == 'en' ? result.message.en : result.message.ja
          );
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
        this._ToastrManager.successToastr(error.message.en);
      }
    );
  }

  checkMatch(pwd1: string, pwd2: string) {
    this.passwordMatched = pwd1 == pwd2 ? true : false;
  }

  logOut() {
    this.spinner.show();
    const selectedLang = localStorage.getItem('selectedLang'); // Get the selectedLang before clearing localStorage
    localStorage.clear();
    if (selectedLang) {
      localStorage.setItem('selectedLang', selectedLang); // Restore the selectedLang after clearing localStorage
    }
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['login']);
      location.reload();
    }, 1000);
  }
}
