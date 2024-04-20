import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { FunctionService } from '../../_service/function.service';
import { DriverService } from 'src/app/_service/driver.service';
import { JudgementService } from '../../_service/judgement.service';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-driver-judgement-result',
  templateUrl: './driver-judgement-result.component.html',
  styleUrls: ['./driver-judgement-result.component.css'],
})
export class DriverJudgementResultComponent implements OnInit {
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  driver_id: any = '';
  judgementData: any;
  judgementLevel: any;

  name: any = '';
  selectedDate: Date | undefined;
  isCalendarOpen = false;
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;
  createdAt: any;
  selectedLevel = '';
  public selectedLang: any = 'en';
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.asc;
  selectedItems: any = [];

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private route: ActivatedRoute,
    private driverService: DriverService,
    private JudgementService: JudgementService,
    private _userAuthService: UserAuthService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.driver_id = params.get('id');
      this.name = params.get('name');
    });
  }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');
    const selectedLang = this.selectedLang;
    this.selectedItems = this._userAuthService.getSearchList('driver');

    this.dtOptions = {
      pageLength: 10,
      lengthMenu: [10, 25, 50, 100],
      processing: true,
      ordering: false,
      searching: false,
    };
    this._FunctionService.loadScript('clinic_page.js');
    this.getAllDiagnosticByUser(1);

    this.getAllJudgementLevel(1);
  }

  getAllDiagnosticByUser(page?: any) {
    this.spinner.show();
    let data = {
      page: page ? page : this.page,
      filter: this.selectedLevel ? this.selectedLevel : '',
      count: this.count,
      driver_id: this.driver_id,
      createdAt: this.createdAt ? this.createdAt : '',
      language: this.selectedLang,
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
      scolumns: '',
    };
    this.driverService.allDiagnosticList(data).subscribe({
      next: (res) => {
        this.judgementData = [];
        this.judgementData = res.data.data;
        this.page = data.page;
        this.totaldocs = res.data.total;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  }

  pageChange(page: any) {
    this.getAllDiagnosticByUser(page);
  }

  goBack() {
    window.history.back();
  }

  goBack1() {
    this.router.navigate(['/DS/driver']);
  }
  // this.router.navigate(['/DS/corporate/user']);
  clearDate() {
    // this.spinner.show();

    this.createdAt = ' ';
    this.selectedLevel = '';
    window.location.reload();

    // this.spinner.hide();
  }
  data: any;
  getAllJudgementLevel(page?: any) {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      driver_id: this.driver_id,
      createdAt: this.createdAt ? this.createdAt : '',
      language: this.selectedLang,
    };
    this.JudgementService.finalJudgementList(data).subscribe({
      next: (res) => {
        this.judgementLevel = [];
        this.judgementLevel = res.data.data;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  }

  onSelectLevel(level: string) {
    this.selectedLevel = level;
  }

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection =
        this.sortDirection === SortDirection.asc
          ? SortDirection.desc
          : SortDirection.asc;
    } else {
      this.sortDirection = SortDirection.asc;
      this.sortColumn = column;
    }

    this.getAllDiagnosticByUser();
  }

  getPropertyByPath(obj: any, path: string): any {
    const properties = path.split('.');
    let value = obj;

    for (const prop of properties) {
      value = value[prop];
      if (value === undefined) {
        break;
      }
    }

    return value;
  }
  onItemSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'driver',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'driver',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'driver',
      searchColumns: this.selectedItems,
    });
  }
  onDeSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'driver',
      searchColumns: this.selectedItems,
    });
  }

  isAscending: boolean = false;
  isAscending1: boolean = false;
  isAscending2: boolean = false;
  isAscending3: boolean = false;

  toggleSortDirection() {
    this.isAscending = !this.isAscending;
  }

  toggleSortDirection1() {
    this.isAscending1 = !this.isAscending1;
  }

  toggleSortDirection2() {
    this.isAscending2 = !this.isAscending2;
  }

  toggleSortDirection3() {
    this.isAscending3 = !this.isAscending3;
  }
}
