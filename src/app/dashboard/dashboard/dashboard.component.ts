import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/_service/dashboard.service';
import { interval, Observable, Subscription } from 'rxjs';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
  ApexGrid,
  ApexTheme,
} from 'ng-apexcharts';
import { map } from 'rxjs/operators';
import { UserAuthService } from 'src/app/_service/user-auth.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  theme: ApexTheme;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public currentDate$: Observable<Date> = new Observable<Date>();
  private currentDateSubscription: Subscription = new Subscription();

  totalNumberOfPathWay: any;
  totalNumberOfClinic: any;
  pathWayDataList: any = [];
  _clinicList: any = [];
  dashboardData: any = [];
  totalPatient: any = 125;
  totalPathway: any = 25;
  totalClinic: any = 240;
  formattedDate: string = '';
  public selectedLang: any = 'en';
  selectedItems: any;
  formattedday: any;
  @Input() colors: string[] | any;
  @Input() dataLabels: ApexDataLabels | any;
  @Input() series: ApexAxisChartSeries | any;
  @Input() stroke: ApexStroke | any;
  @Input() labels: string[] | any;

  pathChartdata: any = [];
  pathChartcategory: any = [];

  patientChartdata: any = [];
  patientChartcategory: any = [];

  clinicChartdata: any = [];
  clinicChartcategory: any = [];

  activeOptionButtonPatient = 'all';
  activeOptionButtonPathway = 'all';
  activeOptionButtonClinic = 'all';

  @ViewChild('chart') chart!: ChartComponent;
  public pathwayGraph!: Partial<ChartOptions> | any;

  @ViewChild('patientChart') patientChart!: ChartComponent;
  public patientGraph!: Partial<ChartOptions> | any;

  @ViewChild('clinicChart') clinicChart!: ChartComponent;
  public clinicGraph!: Partial<ChartOptions> | any;

  constructor(
    private spinner: NgxSpinnerService,
    private dashboardService: DashboardService,
    private _userAuthService: UserAuthService
  ) {
    this.pathwayGraph = {
      series: [
        {
          name: 'Count',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      theme: {
        mode: 'light',
        palette: 'palette3',
        monochrome: {
          enabled: false,
          color: '#FF9800',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Pathway Count',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
    };

    //patients Graph
    this.patientGraph = {
      series: [
        {
          name: 'Count',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      theme: {
        mode: 'light',
        palette: 'palette4',
        monochrome: {
          enabled: false,
          color: '#FF9800',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Patient Count',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
    };
    //end

    this.clinicGraph = {
      series: [
        {
          name: 'Count',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      theme: {
        mode: 'light',
        palette: 'palette5',
        monochrome: {
          enabled: false,
          color: '#FF9800',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Clinic Count',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
    };
    //end
  }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');
    console.log(this.selectedLang);
    this.selectedItems = this._userAuthService.getSearchList('dashboard');

    this.currentDate$ = interval(1000).pipe(
      // Update the date every second
      map(() => new Date())
    );

    this.currentDateSubscription = this.currentDate$.subscribe();

    this.currentDateSubscription = this.currentDate$.subscribe();
    this.getDashboardData();

    // Disable the browser's back button
    window.history.pushState(null, window.location.href);
    window.onpopstate = function (event) {
      window.history.pushState(null, window.location.href);
    };
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    this.formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  public updateOptions(option: any, type: any): void {
    let graphType = type;

    let filterType = {
      type: option,
    };
  }

  getDashboardData() {
    this.spinner.show();
    this.dashboardService.dashboardData().subscribe({
      next: (res) => {
        if (res.statusCode == 200) {
          this.dashboardData = res.data;
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
        }
      },
      error: (err) => {},
    });
  }

  ngOnDestroy(): void {
    this.currentDateSubscription.unsubscribe();
  }
}
