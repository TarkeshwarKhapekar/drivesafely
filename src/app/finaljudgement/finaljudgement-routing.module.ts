import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinaljudgementListComponent } from './finaljudgement-list/finaljudgement-list.component';
import { FinaljudgementAddComponent } from './finaljudgement-add/finaljudgement-add.component';

const routes: Routes = [
  {path: "", component: FinaljudgementListComponent },
  {path: 'finaljudgement', component: FinaljudgementListComponent },
  {path: 'judgement-add', component: FinaljudgementAddComponent },
  { path: 'judgement-update/:id', component: FinaljudgementAddComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinaljudgementRoutingModule { }
