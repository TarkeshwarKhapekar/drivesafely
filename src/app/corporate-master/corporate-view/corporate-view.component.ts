import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CorporateService } from 'src/app/_service/corporate.service';

@Component({
  selector: 'app-corporate-view',
  templateUrl: './corporate-view.component.html',
  styleUrls: ['./corporate-view.component.css'],
})
export class CorporateViewComponent implements OnInit {
  corporate_id: any = '';
  corporateDetails: any;

  constructor(
    private corporateService: CorporateService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.corporate_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getCorporateView();
  }

  getCorporateView = () => {
    this.spinner.show();
    this.corporateService.corporateView(this.corporate_id).subscribe({
      next: (res) => {
        this.corporateDetails = res.data[0];
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
