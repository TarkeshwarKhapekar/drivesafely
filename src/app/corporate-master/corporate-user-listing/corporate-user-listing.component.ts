import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { FunctionService } from '../../_service/function.service';
import { CorporateService } from 'src/app/_service/corporate.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import Swal from 'sweetalert2';
import { DriverService } from 'src/app/_service/driver.service';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-corporate-user-listing',
  templateUrl: './corporate-user-listing.component.html',
  styleUrls: ['./corporate-user-listing.component.css'],
})
export class CorporateUserListingComponent implements OnInit {
  corporateList: any[] = [];
  corporate_id: any = '';
  pathwayList: any = [];
  isChecked = false;
  deleteCorporate: any;
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  corporateUserList: any[] = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;
  public filterTerms!: string;
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.asc;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};

  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private corporateService: CorporateService,
    private route: ActivatedRoute,
    private driverService: DriverService,
    private _userAuthService: UserAuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.corporate_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.dtOptions = {};
    this._FunctionService.loadScript('clinic_page.js');
    this.getCorporateUserList();
    this.dropdownList = [
      { id: 'name', itemName: this.selectedLang == 'en' ? 'Name' : '名前' },
      { id: 'gender', itemName: this.selectedLang == 'en' ? 'Gender' : '性別' },
      {
        id: 'email',
        itemName: this.selectedLang == 'en' ? 'Email' : '電子メール',
      },
      { id: 'phone', itemName: this.selectedLang == 'en' ? 'Phone' : '電話' },
      {
        id: 'corporateCode',
        itemName: this.selectedLang == 'en' ? 'Corporate Code' : '企業コード',
      },
    ];
    this.selectedItems = this._userAuthService.getSearchList('corporate');
    this.dropdownSettings = {
      singleSelection: false,
      text: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
      selectAllText: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
      unSelectAllText:
        this.selectedLang == 'en' ? 'UnSelect All' : 'すべて選択を解除',
      enableSearchFilter: true,
      classes: 'myclass custom-class multiselect-dropdown-blc',
    };
  }

  getCorporateUserList(page?: any) {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      filters: this.filterTerms ? this.filterTerms : '',
      count: this.count,
      roles: 'SUBADMIN',
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService.getSearchList('corporate').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.driverService.driverList(data).subscribe({
      next: (res) => {
        this.spinner.show();
        this.corporateUserList = res.data.data;
        this.corporateUserList = res.data.data.map((user: any) => ({
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
    this.getCorporateUserList(page);
  }

  corporateDelete(corporateId: any) {
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
        this.corporateService.deleteCorporateUser(corporateId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteCorporate = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'Corporate User removed Successfully'
                    : '企業ユーザーが正常に削除されました';
                this._ToastrManager.successToastr(successMessage);
                this.getCorporateUserList();
                this.spinner.hide();
              }, 500);
            }
          },
          error: (err) => {},
        });
      }
    });
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

    this.getCorporateUserList();
  }

  goBack() {
    window.history.back();
  }

  onItemSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'corporate',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'corporate',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'corporate',
      searchColumns: this.selectedItems,
    });
  }
  onDeSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'notice',
      searchColumns: this.selectedItems,
    });
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
