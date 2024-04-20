import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflexRoutingModule } from './reflex-routing.module';
import { ReflexUpdateComponent } from './reflex-update/reflex-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ReflexUpdateComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReflexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReflexModule {}
