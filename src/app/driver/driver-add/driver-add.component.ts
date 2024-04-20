import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/_service/driver.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css'],
})
export class DriverAddComponent implements OnInit {
  genderChange: EventEmitter<string> = new EventEmitter<string>();
  password: any;

  onGenderChange(event: any) {
    const selectedGender: string = event.target.value;
    this.genderChange.emit(selectedGender);
  }

  addDriverForm: any = FormGroup;
  driverDetails: any;
  submitted = false;
  fieldTextType!: boolean;
  fieldTextType1!: boolean;

  showRingId: boolean = false;
  selectedRing: boolean = false;
  public userId: any;
  public passwordMatched = false;
  corporateCode = localStorage.getItem('corporateCode');
  currentYear: number = new Date().getFullYear();

  @ViewChild('confirmPassword', { static: false }) confirmPassword!: ElementRef;

  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private driverService: DriverService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      // Use the ID as needed
    });
  }

  ngOnInit(): void {
    this.getDriverDetails();
    this.formValidation();
    if (localStorage.getItem('roles') === 'SUBADMIN') {
      this.addDriverForm.controls['corporateCode'].setValue(this.corporateCode);
    }
  }

  formValidation() {
    if (this.userId) {
      this.addDriverForm = this.fb.group({
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
            Validators.pattern(/^\+?\d+$/),
            Validators.pattern('[0-9]*'),
            Validators.minLength(11),
          ],
        ],
        gender: ['', [Validators.required]],
        corporateCode: ['', [Validators.minLength(5), Validators.maxLength(5)]],
        yearOfBirth: [
          null,
          [
            Validators.pattern('^[0-9]*$'), // Ensure it's a number
            this.yearOfBirthValidator.bind(this), // Custom validator
            Validators.min(1900), // Minimum year allowed (change as needed)
            Validators.max(this.currentYear), // Maximum year allowed
          ],
        ],
        height: [null],
        weight: [null],
        restingHeartRate: [null],
        ringUse: ['false', [Validators.required]],
        ringId: [''],
      });
    } else {
      this.addDriverForm = this.fb.group({
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
              '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=.*[!@#$%^&*]).{8,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        corporateCode: ['', [Validators.minLength(5), Validators.maxLength(5)]],
        yearOfBirth: [
          null,
          [
            this.yearOfBirthValidator.bind(this),
            Validators.min(1900),
            Validators.max(this.currentYear),
          ],
        ],
        height: [null],
        weight: [null],
        restingHeartRate: [null],
        ringUse: ['false', [Validators.required]],
        ringId: [''],
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
    return this.addDriverForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addDriverForm.invalid) {
      return;
    }

    const yearOfBirth = parseInt(this.addDriverForm.controls.yearOfBirth.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 18) {
      const errorMessage =
        this.selectedLang === 'en'
          ? 'You must be at least 18 years old to fill out this form.'
          : 'このフォームに記入するには少なくとも18歳である必要があります。';
      this._ToastrManager.errorToastr(errorMessage);
      return;
    }
    if (this.userId) {
      let data = JSON.parse(JSON.stringify(this.addDriverForm.value));
      let defFalse = false;
      if (data.ringUse == 'false') {
      } else if (data.ringUse == false) {
      } else {
        defFalse = true;
      }

      const postData = {
        _id: this.userId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        password: data.password,
        corporateCode: data.corporateCode,
        yearOfBirth: data.yearOfBirth,
        height: data.height,
        weight: data.weight,
        restingHeartRate: data.restingHeartRate,
        ringUse: defFalse,
        ringId: data.ringId,
        roles: 'DRIVER',
        deviceType: 'web',
      };

      this.driverService.editDriver(postData).subscribe({
        next: (result) => {
          if (result.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Driver Updated Successfully'
                  : 'ドライバーが正常に更新されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/driver']);
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
      let data = this.addDriverForm.value;
      const postData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        password: data.password,
        corporateCode: data.corporateCode,
        yearOfBirth: data.yearOfBirth,
        height: data.height,
        weight: data.weight,
        restingHeartRate: data.restingHeartRate,
        ringUse: data.ringUse == 'false' ? false : true,
        ringId: data.ringId,
        roles: 'DRIVER',
        deviceType: 'web',
      };
      this.driverService.addDriver(postData).subscribe({
        next: (result) => {
          if (result.statusCode == 200) {
            setTimeout(() => {
              const successMessage =
                this.selectedLang === 'en'
                  ? 'Driver Added Successfully'
                  : 'ドライバーが正常に追加されました';
              this._ToastrManager.successToastr(successMessage);
              this.router.navigate(['/DS/driver']);
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

  yearOfBirthValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const yearOfBirth = control.value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 18) {
      return { underage: true };
    }

    return null;
  }

  getDriverDetails = () => {
    if (this.userId) {
      this.spinner.show();
      this.driverService.driverView(this.userId).subscribe({
        next: (res) => {
          this.driverDetails = res.data[0];
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
          this.setData(this.driverDetails);
        },
        error: (err) => {},
      });
    }
  };
  setData(data: any) {
    this.addDriverForm.patchValue({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      gender: data?.gender,
      corporateCode: data?.corporateCode,
      yearOfBirth: data?.yearOfBirth,
      height: data?.height,
      weight: data?.weight,
      restingHeartRate: data?.restingHeartRate,
      ringUse: data.ringUse,
      ringId: data?.ringId,
    });
  }

  checkRingUsed() {
    return this.addDriverForm.get('ringUse').value;
  }

  onRingChange(event: any) {
    this.selectedRing = event.target.value === 'true';
    Object.keys(this.addDriverForm.controls).forEach((controlName) => {
      const control = this.addDriverForm.get(controlName);
      if (control.invalid) {
        console.log(`Invalid control: ${controlName}, Value: ${control.value}`);
      }
    });
  }

  goBack() {
    window.history.back();
  }

  onCancel(): void {
    this.submitted = false;
    this.addDriverForm.reset();
    this.confirmPassword.nativeElement.value = '';
  }

  isSubmitDisabled() {
    return this.addDriverForm.pristine || this.addDriverForm.invalid;
  }
}
