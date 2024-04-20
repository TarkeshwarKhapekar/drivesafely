import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentListingComponent } from './content-listing/content-listing.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentAddComponent } from './content-add/content-add.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContentListingComponent,
    ContentAddComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule, 
    TranslateModule 
  ]
})
export class ContentModule { }