import { Component } from '@angular/core';
import {PatientService} from '../../services/patientService';
import {BasicInfosPatient} from '../../models/patients.BasicInfos';
import {PatientsTotalInfos} from '../../models/patients.TotalInfos';

@Component({
  selector: 'app-patient-index',
  templateUrl: './patient-index.component.html',
  styleUrl: './patient-index.component.scss'
})
export class PatientIndexComponent {

  infoBasicPatients!: BasicInfosPatient[];


  constructor(
    public _patientService: PatientService
  ) {
    this.getPatients('http://localhost:8080/patients')
  }

  getPatients(url: string): void {
    this._patientService.getAllPatients(url).subscribe(
      {
        next: (result) => {
          this.infoBasicPatients = result;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  openModal(addPatientModal: any) {
    addPatientModal.openModal();
  }

  addPatient(patient: BasicInfosPatient) {
    this.infoBasicPatients.push(patient);
  }

  // Propriété calculée
  get totalPatients(): number {
    return this.infoBasicPatients.length; // Retourne le nombre de patients
  }
}
