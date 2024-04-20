import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QolListingComponent } from './qol-listing/qol-listing.component';
import { AddQolComponent } from './add-qol/add-qol.component';
import { QolViewComponent } from './qol-view/qol-view.component';


const routes: Routes = [
  { path: "", component: QolListingComponent },
  { path: 'qol-listing', component: QolListingComponent},
  { path: 'qol-add', component: AddQolComponent },
  { path: 'qol-view/:id', component: QolViewComponent },
  { path: 'qol-edit/:id', component: AddQolComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QolRoutingModule { }
