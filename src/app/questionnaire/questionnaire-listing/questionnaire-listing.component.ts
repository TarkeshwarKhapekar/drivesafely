import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { QuestionnaireService } from 'src/app/_service/questionnaire.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-questionnaire-listing',
  templateUrl: './questionnaire-listing.component.html',
  styleUrls: ['./questionnaire-listing.component.css'],
})
export class QuestionnaireListingComponent implements OnInit {
  questionnaireList: any = [];
  totaldocs: number = 10;
  page: number = 1;
  count = 10;
  data: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public filterTerm!: string;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private _ToastrManager: ToastrManager,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {};
    this.getQuestionnaire(1);
  }

  getQuestionnaire(page?: any) {
    let data = {
      page: page ? page : this.page,
      filter: this.filterTerm ? this.filterTerm : '',
      count: this.count,
    };
    this._questionnaireService.questionnaireList(data).subscribe(
      (res) => {
        this.questionnaireList = res.data.questionnaire;
        this.totaldocs = res.data.total;
        this.page = data.page;
        setTimeout(() => {}, 1000);
      },
      (error) => {
        this._ToastrManager.errorToastr('Failed');
      }
    );
  }

  pageChange(page: any) {
    this.getQuestionnaire(page);
  }

  view(id: any) {}

  edit(id: any) {}

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this._questionnaireService.deleteQuestion(id).subscribe({
          next: (res) => {
            if (res.statusCode === 200) {
              setTimeout(() => {
                this._ToastrManager.successToastr(res.message);
                this.getQuestionnaire();
                this.spinner.hide();
              }, 500);
            }
          },
          error: (err) => {},
        });
      }
    });
  }

  viewPathWayList(pathWayId: any) {
    $('#myDropdown').toggle('show');
  }
}
