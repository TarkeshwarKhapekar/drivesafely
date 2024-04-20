import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { JudgementService } from 'src/app/_service/judgement.service';
import { SortDirection } from '@swimlane/ngx-datatable';
import { TranslateService } from '@ngx-translate/core';
import { UserAuthService } from 'src/app/_service/user-auth.service';

@Component({
  selector: 'app-finaljudgement-list',
  templateUrl: './finaljudgement-list.component.html',
  styleUrls: ['./finaljudgement-list.component.css'],
})
export class FinaljudgementListComponent implements OnInit {
  finalJudgementList: any[] = [];
  totaldocs: number = 10;
  page: number = 1;
  count = 5;
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

  public translatedPlaceholder: any;
  constructor(
    private judgementService: JudgementService,
    private translateService: TranslateService,
    private _userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('selectedLang');

    this.translatedPlaceholder = this.translateService.instant('config.Search');
    this.dtOptions = {};
    this.getFinalJudgementList();
    this.dropdownList = [
      {
        id: this.selectedLang == 'en' ? 'level.en' : 'level.ja',
        itemName: this.selectedLang == 'en' ? 'Level' : 'レベル',
      },
      {
        id: this.selectedLang == 'en' ? 'title.en' : 'title.ja',
        itemName: this.selectedLang == 'en' ? 'Title' : 'タイトル',
      },
      {
        id: this.selectedLang == 'en' ? 'description.en' : 'description.ja',
        itemName: this.selectedLang == 'en' ? 'Description' : '説明',
      },
      {
        id: 'min_value',
        itemName: this.selectedLang == 'en' ? 'Min. Value' : '分。価値',
      },
      {
        id: 'max_value',
        itemName: this.selectedLang == 'en' ? 'Max. Value' : '最大。価値',
      },
    ];
    this.selectedItems = this._userAuthService.getSearchList('judgements');
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

  getFinalJudgementList = (page?: any) => {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
      language: this.selectedLang,
      scolumns: '',
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection == 'asc' ? 1 : -1,
    };

    this._userAuthService
      .getSearchList('judgements')
      .forEach((element: any) => {
        data.scolumns =
          data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
      });

    this.judgementService.finalJudgementList(data).subscribe({
      next: (res) => {
        this.finalJudgementList = res.data.data;
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {}, 500);
      },
      error: (err) => {},
    });
  };

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

    this.finalJudgementList.sort((a, b) => {
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

  pageChange(page: any) {
    this.getFinalJudgementList(page);
  }

  goBack() {
    window.history.back();
  }

  onItemSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'judgements',
      searchColumns: this.selectedItems,
    });
  }
  OnItemDeSelect(item: any) {
    this._userAuthService.setSearchList({
      module: 'judgements',
      searchColumns: this.selectedItems,
    });
  }
  onSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'judgements',
      searchColumns: this.selectedItems,
    });
  }
  onDeSelectAll(items: any) {
    this._userAuthService.setSearchList({
      module: 'judgements',
      searchColumns: this.selectedItems,
    });
  }

  isAscending: boolean = false;
  isAscending1: boolean = false;
  isAscending2: boolean = false;
  isAscending3: boolean = false;
  isAscending4: boolean = false;

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
}
