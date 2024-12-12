import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientIndexComponent } from './pages/patient-index/patient-index.component';
import {SharedModule} from '../../shared/shared.module';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientIndexComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ]
})
export class PatientModule { }