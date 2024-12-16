import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientIndexComponent} from './pages/patient/patient-index/patient-index.component';
import {PatientDetailsComponent} from './pages/patient/patient-details/patient-details.component'

const routes: Routes = [
  { path: 'index', component: PatientIndexComponent },
  { path: ':id', component: PatientDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
