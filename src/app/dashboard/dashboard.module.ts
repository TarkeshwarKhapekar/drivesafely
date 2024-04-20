import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from "ng-apexcharts";
import {YouTubePlayerModule} from '@angular/youtube-player';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ContentService } from '../_service/content.service';
import { DataTablesModule } from 'angular-datatables';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { VimeoUrlPipe } from './vimeo-url.pipe';


import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardComponent,
    VimeoUrlPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxSliderModule,
    NgApexchartsModule,
    YouTubePlayerModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    TranslateModule
  ],
  providers: [ContentService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
