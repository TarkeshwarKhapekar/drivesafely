import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
import { DashboardComponent } from './_layout/dashboard/dashboard.component';
import { FullComponent } from './_layout/full/full.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: FullComponent,
    loadChildren: () =>
      import('./login/login.module').then((login) => login.LoginModule),
  },
  {
    path: 'DS',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((d) => d.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((d) => d.ProfileModule),
      },
      {
        path: 'driver',
        loadChildren: () =>
          import('./driver/driver.module').then((d) => d.DriverModule),
      },
      {
        path: 'notice',
        loadChildren: () =>
          import('./notice/notice.module').then((d) => d.NoticeModule),
      },
      {
        path: 'content',
        loadChildren: () =>
          import('./content/content.module').then((d) => d.ContentModule),
      },
      {
        path: 'qol',
        loadChildren: () =>
          import('./qol-configuration/qol-configuration.module').then(
            (d) => d.QolConfigurationModule
          ),
      },
      {
        path: 'questionnaire',
        loadChildren: () =>
          import('./questionnaire/questionnaire.module').then(
            (d) => d.QuestionnaireModule
          ),
      },
      {
        path: 'corporate',
        loadChildren: () =>
          import('./corporate-master/corporate-master.module').then(
            (d) => d.CorporateMasterModule
          ),
      },
      {
        path: 'judgement-weightage',
        loadChildren: () =>
          import('./judgement/judgement.module').then((d) => d.JudgementModule),
      },
      {
        path: 'policy-view',
        loadChildren: () =>
          import('./policy/policy.module').then((d) => d.PolicyModule),
      },
      {
        path: 'finaljudgement',
        loadChildren: () =>
          import('./finaljudgement/finaljudgement.module').then(
            (d) => d.FinaljudgementModule
          ),
      },
      {
        path: 'update-reflex',
        loadChildren: () =>
          import('./reflex/reflex-routing.module').then(
            (d) => d.ReflexRoutingModule
          ),
      },
      {
        path: 'reflex-screen',
        loadChildren: () =>
          import('./reflex-screen/reflex-screen.module').then(
            (d) => d.ReflexScreenModule
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
