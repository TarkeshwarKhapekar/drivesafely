import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQolComponent } from './add-qol/add-qol.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QolRoutingModule } from './qol-configuration-routing.module';
import { QolListingComponent } from './qol-listing/qol-listing.component';
import { QolViewComponent } from './qol-view/qol-view.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddQolComponent,
    QolListingComponent,
    QolViewComponent
  ],
  imports: [
    CommonModule,
    QolRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    TranslateModule
  ]
})
export class QolConfigurationModule { }
