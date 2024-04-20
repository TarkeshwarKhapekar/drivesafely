import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyViewComponent } from './policy-view/policy-view.component';
const routes: Routes = [
  { path: "", component: PolicyViewComponent },
  { path: 'policy-view', component: PolicyViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
