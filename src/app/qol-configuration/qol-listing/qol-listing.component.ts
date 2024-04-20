import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { QolResultService } from 'src/app/_service/qol-result.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-qol-listing',
  templateUrl: './qol-listing.component.html',
  styleUrls: ['./qol-listing.component.css'],
})
export class QolListingComponent implements OnInit {
  qolResultList: any[] = [];
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;
  deleteQol: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;
  sortColumn: string = '';
  sortDirection: SortDirection = SortDirection.asc;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};
  public selectedLang: any = 'en';

  constructor(
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private qolResultService: QolResultService,
    private _userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');

    this.dtOptions = {};
    this.getQolList();

    this.dropdownList = [
      {
        id: this.selectedLang == 'en' ? 'level.en' : 'level.ja',
        itemName: this.selectedLang == 'en' ? 'Level' : 'レベル',
      },
      {
        id: this.selectedLang == 'en' ? 'description.en' : 'description.ja',
        itemName: this.selectedLang == 'en' ? 'Description' : '説明',
      },
      {
        id: 'min_value',
        itemName: this.selectedLang == 'en' ? 'Min. Value' : '最小値',
      },
      {
        id: 'max_value',
        itemName: this.selectedLang == 'en' ? 'Max. Value' : '最大値',
      },
    ];
    // this.selectedItems = [];
    this.selectedItems = this._userAuthService.getSearchList('qol');

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

  getQolList = (page?: any) => {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService.getSearchList('qol').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.qolResultService.qolList(data).subscribe({
      next: (res) => {
        this.qolResultList = res.data.data;
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {}, 500);
      },
      error: (err) => {},
    });
  };

  pageChange(page: any) {
    this.getQolList(page);
  }

  qolDelete(qolId: any) {
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
        this.qolResultService.deleteQol(qolId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteQol = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'Qol removed Successfully'
                    : 'Qol が正常に削除されました';
                this._ToastrManager.successToastr(successMessage);
                this.getQolList(this.page);
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
    this.qolResultList.sort((a, b) => {
      const aValue = this.getPropertyByPath(a, this.sortColumn);
      const bValue = this.getPropertyByPath(b, this.sortColumn);
      if (aValue < bValue)
        return this.sortDirection === SortDirection.asc ? -1 : 1;
      if (aValue > bValue)
        return this.sortDirection === SortDirection.asc ? 1 : -1;
      return 0;
    });
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
  goBack() {
    window.history.back();
  }

  onItemSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'qol',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'qol',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'qol',
      searchColumns: this.selectedItems,
    });
  }
  onDeSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'qol',
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
