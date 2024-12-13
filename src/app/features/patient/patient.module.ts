import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientIndexComponent } from './pages/patient-index/patient-index.component';
import {SharedModule} from '../../shared/shared.module';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import {AppModule} from "../../app.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientCreateComponent } from './pages/patient-create/patient-create.component';


@NgModule({
  declarations: [
    PatientIndexComponent,
    PatientDetailsComponent,
    PatientCreateComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }