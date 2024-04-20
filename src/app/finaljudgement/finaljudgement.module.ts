import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinaljudgementRoutingModule } from './finaljudgement-routing.module';
import { FinaljudgementListComponent } from './finaljudgement-list/finaljudgement-list.component';
import { FinaljudgementAddComponent } from './finaljudgement-add/finaljudgement-add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FinaljudgementListComponent,
    FinaljudgementAddComponent,
  ],
  imports: [
    CommonModule,
    FinaljudgementRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    TranslateModule 
  ]
})
export class FinaljudgementModule { }
