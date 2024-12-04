import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientIndexComponent} from './pages/patient-index/patient-index.component';

const routes: Routes = [
  {path: 'index', component: PatientIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
