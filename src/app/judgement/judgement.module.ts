import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JudgementRoutingModule } from './judgement-routing.module';
import { JudgmentWeightageComponent } from './judgment-weightage/judgment-weightage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    JudgmentWeightageComponent
  ],
  imports: [
    CommonModule,
    JudgementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class JudgementModule { }
