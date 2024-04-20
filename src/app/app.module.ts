import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';

import { ToastrModule } from 'ng6-toastr-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { FunctionService } from './_service/function.service';
import { FullComponent } from './_layout/full/full.component';
import { DashboardComponent } from './_layout/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './_navItem/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './_navItem/dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './_navItem/dashboard-sidebar/dashboard-sidebar.component';
import { SidebarFooterComponent } from './_navItem/sidebar-footer/sidebar-footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    SidebarFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate-multiple' }),
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgIdleKeepaliveModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    FunctionService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
