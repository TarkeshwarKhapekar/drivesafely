import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { NoticeService } from 'src/app/_service/notice.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { FunctionService } from 'src/app/_service/function.service';
import { DataTableDirective } from 'angular-datatables';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-notice-listing',
  templateUrl: './notice-listing.component.html',
  styleUrls: ['./notice-listing.component.css'],
})
export class NoticeListingComponent implements OnInit {
  noticeList: any[] = [];
  notice_id: any = '';
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;
  deleteNotice: any;

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
  public selectedLang: any = 'en';

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private route: ActivatedRoute,
    private noticeService: NoticeService,
    private _userAuthService: UserAuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.notice_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');
    this.dtOptions = {};
    this._FunctionService.loadScript('clinic_page.js');
    this.getNoticeList(1);
    this.dropdownList = [
      { id: 'type', itemName: this.selectedLang == 'en' ? 'Type' : 'タイプ' },
      {
        id: this.selectedLang == 'en' ? 'title.en' : 'title.ja',
        itemName: this.selectedLang == 'en' ? 'Title' : 'タイトル',
      },
      {
        id: this.selectedLang == 'en' ? 'message.en' : 'message.ja',
        itemName: this.selectedLang == 'en' ? 'Description' : '説明',
      },
    ];
    this.selectedItems = this._userAuthService.getSearchList('notice');

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

  getNoticeList = (page?: any) => {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService.getSearchList('notice').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.noticeService.noticeList(data).subscribe({
      next: (res) => {
        this.noticeList = res.data.notifications;
        this.totaldocs = res.data.total;
        this.page = data.page;
        this.totaldocs = res.data.total;
        setTimeout(() => {}, 500);
      },
      error: (err) => {},
    });
  };

  pageChange(page: any) {
    this.getNoticeList(page);
  }

  noticeDelete(noticeId: any) {
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
        this.noticeService.deleteNotice(noticeId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteNotice = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'Notification Removed Successfully.'
                    : '通知が正常に削除されました。';
                this._ToastrManager.successToastr(successMessage);
                this.getNoticeList(this.page);
                this.spinner.hide();
              }, 500);
            }
          },
          error: (err) => {},
        });
      }
    });
  }

  goBack() {
    window.history.back();
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
    this.getNoticeList();
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
      module: 'notice',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'notice',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'notice',
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
  getType(type: any) {
    if (this.selectedLang === 'en') {
      if (type == 'Notice from SDNC') return type;

      if (type == 'Transportation related information') return type;

      if (type == 'Notice regarding the application') return type;

      if (type == 'SDNCからのお知らせ') return 'Notice from SDNC';

      if (type == '交通関連情報') return 'Transportation related information';

      if (type == '応募に関するお知らせ')
        return 'Notice regarding the application';
    } else {
      if (type == 'Notice from SDNC') return 'SDNCからのお知らせ';

      if (type == 'Transportation related information') return '交通関連情報';

      if (type == 'Notice regarding the application')
        return '応募に関するお知らせ';

      if (type == 'SDNCからのお知らせ') return type;

      if (type == '交通関連情報') return type;

      if (type == '応募に関するお知らせ') return type;
    }
  }
}
