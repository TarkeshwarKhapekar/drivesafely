import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { JudgementService } from 'src/app/_service/judgement.service';

@Component({
  selector: 'app-reflex-screen-list',
  templateUrl: './reflex-screen-list.component.html',
  styleUrls: ['./reflex-screen-list.component.css'],
})
export class ReflexScreenListComponent implements OnInit {
  reflexDetails: any;
  reflexId: any;
  constructor(
    private judgementService: JudgementService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getReflexScreenDetails();
  }

  getReflexScreenDetails = () => {
    this.spinner.show();
    this.judgementService.getReflexDetails().subscribe({
      next: (res) => {
        this.reflexDetails = res.data;
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
