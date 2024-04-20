import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_service/profile.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  genderChange: EventEmitter<string> = new EventEmitter<string>();

  editProfileForm: any = FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  profileId: any;
  isUpdate = false;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private _ToastrManager: ToastrManager
  ) {
    this.profileId = localStorage.getItem('_id');
  }

  ngOnInit(): void {
    this.formValidation();
    this.getProfileDetails();
  }

  changeValue(status: boolean): void {
    this.isUpdate = status;
  }

  formValidation() {
    this.editProfileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
    });
  }

  get f() {
    return this.editProfileForm.controls;
  }

  onSubmit() {
    if (this.profileId) {
      let data = this.editProfileForm.value;
      data._id = this.profileId;
      this.profileService.editProfile(data).subscribe((result) => {
        setTimeout(() => {
          const successMessage =
            this.selectedLang === 'en'
              ? 'Admin Profile Updated Successfully'
              : '管理者プロファイルが正常に更新されました';
          this._ToastrManager.successToastr(successMessage);
          this.router.navigate(['/DS']);
        }, 1000);
      });
    }
  }

  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  profileDetails: any;
  getProfileDetails = () => {
    if (this.profileId) {
      this.spinner.show();
      this.profileService.profileView(this.profileId).subscribe({
        next: (res) => {
          this.profileDetails = res.data[0];
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.profileDetails);
        },
        error: (err) => {},
      });
    }
  };
  onGenderChange(event: any) {
    const selectedGender: string = event.target.value;
    this.genderChange.emit(selectedGender);
  }
  setData(data: any) {
    this.editProfileForm.patchValue({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      gender: data?.gender,
    });
  }

  isSubmitDisabled() {
    return this.editProfileForm.pristine || this.editProfileForm.invalid;
  }

  getGender(gender: any) {
    if (this.selectedLang === 'en') {
      if (gender == 'Male') return gender;

      if (gender == 'Female') return gender;

      if (gender == 'Other') return gender;

      if (gender == '男性') return 'Male';

      if (gender == '女性') return 'Female';

      if (gender == '他の') return 'Other';

      if (gender == '男') return 'Male';
    } else {
      if (gender == 'Male') return '男性';

      if (gender == 'Female') return '女性';

      if (gender == 'Other') return '他の';

      if (gender == '男性') return gender;

      if (gender == '女性') return gender;

      if (gender == '他の') return gender;

      if (gender == '男') return gender;
    }
  }
}
