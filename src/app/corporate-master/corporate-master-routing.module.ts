import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateListingComponent } from './corporate-listing/corporate-listing.component';
import { AddCorporateComponent } from './add-corporate/add-corporate.component';
import { CorporateViewComponent } from './corporate-view/corporate-view.component';
import { AddCorporateUserComponent } from './add-corporate-user/add-corporate-user.component';
import { CorporateUserListingComponent } from './corporate-user-listing/corporate-user-listing.component';
import { CorporateUserViewComponent } from './corporate-user-view/corporate-user-view.component';



const routes: Routes = [
  { path: "", component: CorporateListingComponent },
  { path: 'corporate-listing', component: CorporateListingComponent },
  { path: 'corporate-add', component: AddCorporateComponent },
 
  { path: 'corporate-view/:id', component: CorporateViewComponent },
  { path: 'corporate-update/:id', component: AddCorporateComponent },
  { path: 'user', component: CorporateUserListingComponent },
  { path: 'user/corporate-add', component: AddCorporateUserComponent },
  { path: 'user/corporate-add/:code', component: AddCorporateUserComponent },
  { path: 'user/corporate-view/:id', component: CorporateUserViewComponent },
  { path: 'user/corporate-edit/:id', component: AddCorporateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
