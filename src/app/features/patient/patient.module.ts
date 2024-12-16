import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientIndexComponent } from './pages/patient/patient-index/patient-index.component';
import {SharedModule} from '../../shared/shared.module';
import { PatientDetailsComponent } from './pages/patient/patient-details/patient-details.component';
import {AppModule} from "../../app.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PatientIndexComponent,
    PatientDetailsComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class PatientModule { }
