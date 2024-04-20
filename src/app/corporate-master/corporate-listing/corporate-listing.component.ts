import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { FunctionService } from 'src/app/_service/function.service';
import { DataTableDirective } from 'angular-datatables';
import { CorporateService } from 'src/app/_service/corporate.service';
import { SortDirection } from '@swimlane/ngx-datatable';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-corporate-listing',
  templateUrl: './corporate-listing.component.html',
  styleUrls: ['./corporate-listing.component.css'],
})
export class CorporateListingComponent implements OnInit {
  corporateList: any[] = [];
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;
  driverCount: any;
  deleteCorporate: any;

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

  selectedLang = localStorage.getItem('selectedLang');

  constructor(
    private _FunctionService: FunctionService,
    private spinner: NgxSpinnerService,
    private _ToastrManager: ToastrManager,
    private corporateService: CorporateService,
    private _userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {};
    this.getCorporateList(1);

    this.dropdownList = [
      {
        id: 'name',
        itemName: this.selectedLang == 'en' ? 'Corporate Name' : '会社名',
      },
      {
        id: 'code',
        itemName: this.selectedLang == 'en' ? 'Corporate Code' : '企業規範',
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
  }

  getCorporateList = (page?: any) => {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      scolumns: '',
    };

    this._userAuthService.getSearchList('driver').forEach((element: any) => {
      data.scolumns =
        data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
    });

    this.corporateService.corporateList(data).subscribe({
      next: (res) => {
        this.corporateList = res.data.data;
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {}, 500);
      },
      error: (err) => {},
    });
  };

  pageChange(page: any) {
    this.getCorporateList(page);
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
        this.corporateService.deleteCorporate(corporateId).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              this.deleteCorporate = res.data;
              setTimeout(() => {
                const successMessage =
                  this.selectedLang === 'en'
                    ? 'Corporate Master removed Successfully'
                    : '法人マスターが正常に削除されました';
                this._ToastrManager.successToastr(successMessage);
                this.getCorporateList(this.page);
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
    this.corporateList.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];
      if (aValue < bValue)
        return this.sortDirection === SortDirection.asc ? -1 : 1;
      if (aValue > bValue)
        return this.sortDirection === SortDirection.asc ? 1 : -1;
      return 0;
    });
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

  toggleSortDirection() {
    this.isAscending = !this.isAscending;
  }

  toggleSortDirection1() {
    this.isAscending1 = !this.isAscending1;
  }

  toggleSortDirection2() {
    this.isAscending2 = !this.isAscending2;
  }
}
