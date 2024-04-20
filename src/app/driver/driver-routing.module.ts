import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { DriverViewComponent } from './driver-view/driver-view.component';
import { DriverJudgementResultComponent } from './driver-judgement-result/driver-judgement-result.component';
import { AptitudeResultComponent } from './aptitude-result/aptitude-result.component';
import { ImportComponent } from './import/import.component';


const routes: Routes = [
  { path: "", component: DriverListComponent },
  { path: 'driver-listing', component: DriverListComponent },
  { path: 'driver-add', component: DriverAddComponent },
  { path: 'driver-edit/:id', component: DriverAddComponent },
  { path: 'driver-view/:id', component: DriverViewComponent },
  { path: 'driver-judgement-result/:id/:name', component: DriverJudgementResultComponent },
  { path: 'aptitude-result/:id', component: AptitudeResultComponent },
  { path: 'driver-import', component: ImportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
