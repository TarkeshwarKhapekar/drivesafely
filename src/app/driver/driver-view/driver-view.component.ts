import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DriverService } from 'src/app/_service/driver.service';

@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.css'],
})
export class DriverViewComponent implements OnInit {
  driver_id: any = '';
  driverDetails: any;
  selectedLang = localStorage.getItem('selectedLang');
  constructor(
    private driverService: DriverService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.driver_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getDriverView();
  }

  getDriverView = () => {
    this.spinner.show();
    this.driverService.driverView(this.driver_id).subscribe({
      next: (res) => {
        this.driverDetails = res.data[0];
        this.formatPhoneNumber();

        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  };

  formatPhoneNumber() {
    if (this.driverDetails && this.driverDetails.phone) {
      this.driverDetails.phone = this.driverDetails.phone.replace(
        /^(\d{3})(\d{4})(\d{4})$/,
        '$1-$2-$3'
      );
    }
  }
  goBack() {
    window.history.back();
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
