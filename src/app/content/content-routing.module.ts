import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListingComponent } from './content-listing/content-listing.component';
import { ContentAddComponent } from './content-add/content-add.component';
import { ContentViewComponent } from './content-view/content-view.component';

const routes: Routes = [
  { path: "", component: ContentListingComponent },
  { path: 'content-listing', component: ContentListingComponent },
  { path: 'content-add', component: ContentAddComponent },
  { path: 'content-edit/:id', component: ContentAddComponent },
  { path: 'content-view/:id', component: ContentViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
