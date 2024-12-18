import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminModalComponent} from './modals/admin-modal/admin-modal.component';
import {InformationModalComponent} from './modals/information-modal/information-modal.component';
import {SettingsModalComponent} from './modals/settings-modal/settings-modal.component';
import {AddPatientModalComponent} from './modals/add-patient-modal/add-patient-modal.component';
import {CalendarModalComponent} from './modals/calendar-modal/calendar-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { AddStaffModalComponent } from './modals/add-staff-modal/add-staff-modal.component';



@NgModule({
  declarations: [
    AdminModalComponent,
    InformationModalComponent,
    SettingsModalComponent,
    AddPatientModalComponent,
    CalendarModalComponent,
    FormErrorComponent,
    AddStaffModalComponent,
  ],
  exports: [
    InformationModalComponent,
    SettingsModalComponent,
    CalendarModalComponent,
    AdminModalComponent,
    AddPatientModalComponent,
    AddStaffModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
