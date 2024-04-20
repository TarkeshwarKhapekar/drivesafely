import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReflexUpdateComponent } from './reflex-update/reflex-update.component';

const routes: Routes = [
  {path: "", component:ReflexUpdateComponent},
  {path: "update-reflex", component:ReflexUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReflexRoutingModule { }
