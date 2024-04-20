import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  { path: "", component: ProfileViewComponent },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
