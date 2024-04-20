import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { DriverViewComponent } from './driver-view/driver-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DriverJudgementResultComponent } from './driver-judgement-result/driver-judgement-result.component';
import { AptitudeResultComponent } from './aptitude-result/aptitude-result.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { ImportComponent } from './import/import.component';

@NgModule({
  declarations: [
    DriverListComponent,
    DriverAddComponent,
    DriverViewComponent,
    DriverJudgementResultComponent,
    AptitudeResultComponent,
    ImportComponent,
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    TranslateModule,
  ],
})
export class DriverModule {}
