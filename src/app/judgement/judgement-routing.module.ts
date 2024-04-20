import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JudgmentWeightageComponent } from './judgment-weightage/judgment-weightage.component';

const routes: Routes = [
  { path: "", component: JudgmentWeightageComponent },
  { path: 'judgement-weightage', component: JudgmentWeightageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JudgementRoutingModule { }
