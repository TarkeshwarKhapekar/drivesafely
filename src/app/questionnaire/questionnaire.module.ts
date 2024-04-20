import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireListingComponent } from './questionnaire-listing/questionnaire-listing.component';
import { QuestionnaireAddComponent } from './questionnaire-add/questionnaire-add.component';
import { QuestionnaireViewComponent } from './questionnaire-view/questionnaire-view.component';
import { QuestionnaireService } from '../_service/questionnaire.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    QuestionnaireListingComponent,
    QuestionnaireAddComponent,
    QuestionnaireViewComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    
  ],
  providers: [QuestionnaireService],
})
export class QuestionnaireModule { }
