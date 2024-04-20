import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCorporateComponent } from './add-corporate/add-corporate.component';
import { CorporateListingComponent } from './corporate-listing/corporate-listing.component';
import { CorporateRoutingModule } from './corporate-master-routing.module';
import { CorporateViewComponent } from './corporate-view/corporate-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCorporateUserComponent } from './add-corporate-user/add-corporate-user.component';
import { CorporateUserListingComponent } from './corporate-user-listing/corporate-user-listing.component';
import { CorporateUserViewComponent } from './corporate-user-view/corporate-user-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddCorporateComponent,
    CorporateListingComponent,
    CorporateViewComponent,
    AddCorporateUserComponent,
    CorporateUserListingComponent,
    CorporateUserViewComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularMultiSelectModule,
    TranslateModule
  ]
})
export class CorporateMasterModule { }
