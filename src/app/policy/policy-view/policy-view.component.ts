import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/_service/policy.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.css'],
})
export class PolicyViewComponent implements OnInit {
  isUpdate = false;
  policyDetails: any;
  selectLng: any;
  selectedLng: any;
  editPolicyForm: any = FormGroup;
  submitted = false;
  policyId: any;
  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private fb: FormBuilder,
    private policyService: PolicyService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager
  ) {}

  ngOnInit(): void {
    this.getPolicyDetails();
    this.formValidation();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }
  }

  formValidation() {
    this.editPolicyForm = this.fb.group({
      title: ['', [Validators.required]],
      titleJa: ['', [Validators.required]],
      description: ['', [Validators.required]],
      descriptionJa: ['', [Validators.required]],
    });
  }
  get f() {
    return this.editPolicyForm.controls;
  }

  onSubmit() {
    this.spinner.show();
    let data = this.editPolicyForm.value;
    data._id = this.policyDetails._id;
    this.policyService.updatePolicy(data).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            const successMessage =
              this.selectedLang === 'en'
                ? 'Privacy - Policy Updated successfully'
                : 'プライバシー - ポリシーが正常に更新されました';
            this._ToastrManager.successToastr(successMessage);
            this.spinner.hide();
          }, 1000);
        }
      },
      error: (e) => {},
    });
  }
  getPolicyDetails = () => {
    this.spinner.show();
    this.policyService.policyView().subscribe({
      next: (res) => {
        this.policyDetails = res.data[0];
        this.policyId = this.policyDetails._id;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
        this.setData(this.policyDetails);
      },
      error: (err) => {},
    });
  };

  changeValue(status: boolean): void {
    this.isUpdate = status;
  }

  setData(data: any) {
    const title = data.title.en;
    this.editPolicyForm.patchValue({
      title: data?.title.en,
      titleJa: data?.title.ja,
      description: data?.description.en,
      descriptionJa: data?.description.ja,
    });
  }

  goBack() {
    window.history.back();
  }

  isSubmitDisabled() {
    return this.editPolicyForm.pristine || this.editPolicyForm.invalid;
  }
}
