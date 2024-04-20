import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CorporateService } from 'src/app/_service/corporate.service';

@Component({
  selector: 'app-corporate-user-view',
  templateUrl: './corporate-user-view.component.html',
  styleUrls: ['./corporate-user-view.component.css'],
})
export class CorporateUserViewComponent implements OnInit {
  corporate_id: any = '';
  corporateDetails: any;

  constructor(
    private corporateService: CorporateService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.corporate_id = params.get('id');
      // Use the ID as needed
    });
  }

  ngOnInit(): void {
    this.getCorporateView();
  }

  getCorporateView = () => {
    this.spinner.show();
    this.corporateService.corporateUserView(this.corporate_id).subscribe({
      next: (res) => {
        this.corporateDetails = res.data[0];
        this.formatPhoneNumber();

        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  };

  formatPhoneNumber() {
    if (this.corporateDetails && this.corporateDetails.phone) {
      this.corporateDetails.phone = this.corporateDetails.phone.replace(
        /^(\d{3})(\d{4})(\d{4})$/,
        '$1-$2-$3'
      );
    }
  }

  goBack() {
    window.history.back();
  }
}
