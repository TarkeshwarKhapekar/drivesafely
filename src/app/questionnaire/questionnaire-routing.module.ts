import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireListingComponent } from './questionnaire-listing/questionnaire-listing.component';
import { QuestionnaireAddComponent } from './questionnaire-add/questionnaire-add.component';
import { QuestionnaireViewComponent } from './questionnaire-view/questionnaire-view.component';

const routes: Routes = [
  {path: "",component: QuestionnaireListingComponent },
  {path: 'questionnaire-listing',component: QuestionnaireListingComponent },
  {path: 'questionnaire-add',component: QuestionnaireAddComponent },
  {path: 'questionnaire-edit/:id',component: QuestionnaireAddComponent },
  {path: 'questionnaire-view',component: QuestionnaireViewComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
