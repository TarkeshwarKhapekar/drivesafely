import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflexScreenRoutingModule } from './reflex-screen-routing.module';
import { ReflexComponent } from './reflex/reflex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReflexAddComponent } from './reflex-add/reflex-add.component';
import { ReflexScreenListComponent } from './reflex-screen-list/reflex-screen-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReflexComponent,
    ReflexAddComponent,
    ReflexScreenListComponent
  ],
  imports: [
    CommonModule,
    ReflexScreenRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class ReflexScreenModule { }
