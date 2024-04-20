import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReflexComponent } from './reflex/reflex.component';
import { ReflexAddComponent } from './reflex-add/reflex-add.component';
import { ReflexScreenListComponent } from './reflex-screen-list/reflex-screen-list.component';

const routes: Routes = [
  { path: '', component: ReflexScreenListComponent },
  { path: 'reflex-screen', component: ReflexScreenListComponent },
  { path: 'reflex-screen-add', component: ReflexAddComponent },
  { path: 'reflex-screen-edit/:id', component: ReflexAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflexScreenRoutingModule {}
