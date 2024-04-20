import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { FunctionService } from '../../_service/function.service';
import { DriverService } from 'src/app/_service/driver.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import Swal from 'sweetalert2';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  goBack() {
    this.router.navigate(['/DS']);
  }

  goBack1() {
    window.history.back();
  }
  _clinicList: any = [];
  driver_id: any = '';
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;
  pathwayList: any = [];
  isChecked = false;
  isback = false;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;

  // Define a property to hold the current sorting parameters
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.asc;

  //datatable
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};

  // formatPhoneNumber(phoneNumber: string): string {
  //   const formattedPhoneNumber = phoneNumber.replace(
  //     /(\d{3})(\d{4})(\d{4})/,
  //     '$1-$2-$3'
  //   );
  //   return formattedPhoneNumber;
  // }

  selectedLang = localStorage.getItem('selectedLang');

  public role = localStorage.getItem('role');

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router,
    private _userAuthService: UserAuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.driver_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 10,
      lengthMenu: [10, 25, 50, 100],
      processing: true,
      ordering: false,
      searching: false,
    };
    this._FunctionService.loadScript('clinic_page.js');
    this.getDriverList(1);

    this.dropdownList = [
      { id: 'name', itemName: this.selectedLang == 'en' ? 'Name' : '名前' },
      { id: 'gender', itemName: this.selectedLang == 'en' ? 'Gender' : '性別' },
      {
        id: 'email',
        itemName: this.selectedLang == 'en' ? 'Email' : '電子メール',
      },
      {
        id: 'phone',
        itemName: this.selectedLang == 'en' ? 'Phone' : '電話番号',
      },
      {
        id: 'corporateCode',
        itemName: this.selectedLang == 'en' ? 'Corporate Code' : '企業コード',
      },
    ];
    this.selectedItems = this._userAuthService.getSearchList('driver');
    this.dropdownSettings = {
      singleSelection: false,
      text: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
      selectAllText: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
      unSelectAllText:
        this.selectedLang == 'en' ? 'UnSelect All' : 'すべて選択を解除',
      enableSearchFilter: true,
      classes: 'myclass custom-class multiselect-dropdown-blc',
    };

    if (this.role !== 'ADMIN') {
      // Disable the browser's back button
      window.history.pushState(null, window.location.href);
      window.onpopstate = function (event) {
        window.history.pushState(null, window.location.href);
      };
    }
  }

  driverList: any[] = [];

  getDriverList(page?: any) {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      roles: 'DRIVER',
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService.getSearchList('driver').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.driverService.driverList(data).subscribe({
      next: (res) => {
        this.spinner.show();
        this.driverList = res.data.data;
        this.driverList = res.data.data.map((user: any) => ({
          ...user,
          phone: this.formatPhoneNumber(user.phone),
        }));
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  }

  pageChange(page: any) {
    this.getDriverList(page);
  }

  deleteDriver: any;
  driverDelete(driverId: any) {
    const cancelButtonText =
      this.selectedLang == 'en' ? 'Cancel' : 'キャンセル';
    const confirmButtonText = this.selectedLang == 'en' ? 'Yes' : 'はい';
    Swal.fire({
      title: this.selectedLang == 'en' ? 'Are you sure?' : '本気ですか？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.driverService.deleteDriver(driverId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteDriver = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'User removed successfully!'
                    : 'ユーザーは正常に削除されました。';
                this._ToastrManager.successToastr(successMessage);
                this.getDriverList(this.page);
                this.spinner.hide();
              }, 500);
            }
          },
          error: (err) => {},
        });
      }
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  // Function to handle sorting
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

    this.getDriverList();
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

  import() {
    this.router.navigate(['/DS/driver/driver-import']);
  }

  isAscending: boolean = false;
  isAscending1: boolean = false;
  isAscending2: boolean = false;
  isAscending3: boolean = false;
  isAscending4: boolean = false;
  isAscending5: boolean = false;

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

  toggleSortDirection4() {
    this.isAscending4 = !this.isAscending4;
  }

  toggleSortDirection5() {
    this.isAscending5 = !this.isAscending5;
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

  formatPhoneNumber(phoneNumber: string): string {
    const formattedPhoneNumber = phoneNumber.replace(
      /(\d{3})(\d{4})(\d{4})/,
      '$1-$2-$3'
    );
    return formattedPhoneNumber;
  }
}
