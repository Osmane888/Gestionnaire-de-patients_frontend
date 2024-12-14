import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientIndexComponent} from './pages/patient-index/patient-index.component';
import {PatientDetailsComponent} from './pages/patient-details/patient-details.component'
import {PatientCreateComponent} from './pages/patient-create/patient-create.component';

const routes: Routes = [
  { path: 'index', component: PatientIndexComponent },
  { path: 'create', component: PatientCreateComponent },
  { path: ':id', component: PatientDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
