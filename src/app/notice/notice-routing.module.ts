import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeListingComponent } from './notice-listing/notice-listing.component';
import { NoticeAddComponent } from './notice-add/notice-add.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';

const routes: Routes = [
  {path: "",component: NoticeListingComponent },
  {path: 'notice-listing',component: NoticeListingComponent },
  {path: 'notice-add',component: NoticeAddComponent },
  {path: 'notice-view/:id',component: NoticeViewComponent },
  {path: 'notice-edit/:id',component: NoticeAddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule { }
