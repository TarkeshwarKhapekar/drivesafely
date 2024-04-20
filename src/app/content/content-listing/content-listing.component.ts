import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentService } from 'src/app/_service/content.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { FunctionService } from 'src/app/_service/function.service';
import { DataTableDirective } from 'angular-datatables';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-content-listing',
  templateUrl: './content-listing.component.html',
  styleUrls: ['./content-listing.component.css'],
})
export class ContentListingComponent implements OnInit {
  contentList: any[] = [];
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;
  deleteContent: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;
  public selectedLang: any = 'en';

  // Define a property to hold the current sorting parameters
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.asc;

  //datatable
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private contentService: ContentService,
    private _userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');

    this.dtOptions = {};
    this._FunctionService.loadScript('clinic_page.js');
    this.getContentList(1);

    this.dropdownList = [
      {
        id: this.selectedLang == 'en' ? 'title.en' : 'title.ja',
        itemName: this.selectedLang == 'en' ? 'Title' : 'タイトル',
      },
      {
        id: this.selectedLang == 'en' ? 'description.en' : 'description.ja',
        itemName: this.selectedLang == 'en' ? 'Description' : '説明',
      },
    ];

    this.selectedItems = this._userAuthService.getSearchList('content');

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

  getContentList = (page?: any) => {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService.getSearchList('content').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.contentService.contentList(data).subscribe({
      next: (res) => {
        this.contentList = res.data.data;
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {}, 500);
      },
      error: (err) => {},
    });
  };

  pageChange(page: any) {
    this.getContentList(page);
  }

  contentDelete(contentId: any) {
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
      cancelButtonText: cancelButtonText, // Set the translated cancel button text here
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.contentService.deleteContent(contentId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteContent = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'Content Removed Successfully.'
                    : 'コンテンツが正常に削除されました。';
                this._ToastrManager.successToastr(successMessage);
                this.getContentList(this.page);
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

  // Function to handle sorting
  sort(column: string) {
    if (this.sortColumn === column) {
      // If same column, toggle sorting direction
      this.sortDirection =
        this.sortDirection === SortDirection.asc
          ? SortDirection.desc
          : SortDirection.asc;
    } else {
      // If different column, reset sorting direction to ascending
      this.sortDirection = SortDirection.asc;
      this.sortColumn = column;
    }

    this.getContentList();
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
      module: 'content',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'content',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'content',
      searchColumns: this.selectedItems,
    });
  }
  onDeSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'content',
      searchColumns: this.selectedItems,
    });
  }

  isAscending: boolean = false;
  isAscending1: boolean = false;

  toggleSortDirection() {
    this.isAscending = !this.isAscending;
  }

  toggleSortDirection1() {
    this.isAscending1 = !this.isAscending1;
  }
}
