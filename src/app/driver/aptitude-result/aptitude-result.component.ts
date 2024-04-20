import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DriverService } from 'src/app/_service/driver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aptitude-result',
  templateUrl: './aptitude-result.component.html',
  styleUrls: ['./aptitude-result.component.css'],
})
export class AptitudeResultComponent implements OnInit {
  declaration_id: any = '';
  _id: any = '';
  diagnosticData: any;
  selectLng: any;
  selectedLng: any = 'en';
  selectsLng: any;
  createdAtValue: any;
  public selecteddLang: any = 'ja';

  constructor(
    private driverService: DriverService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.declaration_id = params.get('id');
    });
    this.route.queryParams.subscribe((params) => {
      this.createdAtValue = params['createdAt'];
      this._id = params['_id'];
    });
  }
  ngOnInit(): void {
    this.getDiadgnosticData();
    this.selecteddLang = localStorage.getItem('selectedLang');

    if (this.selecteddLang === 'en') {
      this.selectLng = 'en';
      this.selectsLng = 'en';
    } else {
      this.selectLng = 'ja';
      this.selectsLng = 'ja';
    }
  }

  getDiadgnosticData = () => {
    this.spinner.show();
    const data = {
      id: this.declaration_id,
      _id: this._id,
      type: 'READONLY',
    };
    this.driverService.diagnosticList(data).subscribe({
      next: (res) => {
        this.diagnosticData = res.data;

        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  };

  goBack() {
    window.history.back();
  }
}
