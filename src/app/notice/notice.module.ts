import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeListingComponent } from './notice-listing/notice-listing.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NoticeListingComponent,
    NoticeAddComponent,
    NoticeViewComponent,
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    TranslateModule,
  ],
})
export class NoticeModule {}
