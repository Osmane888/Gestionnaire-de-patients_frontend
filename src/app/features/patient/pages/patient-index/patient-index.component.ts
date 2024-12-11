import { Component } from '@angular/core';
import {PatientService} from '../../services/patientService';
import {Patient} from '../../models/patients.infos';

@Component({
  selector: 'app-patient-index',
  templateUrl: './patient-index.component.html',
  styleUrl: './patient-index.component.scss'
})
export class PatientIndexComponent {

  patient!: Patient;

  constructor(
    public _patientService: PatientService
  ) {
    this.getPatients('http://localhost:8080/patients')
  }

  getPatients(url: string): void {
    this._patientService.getAllPatients(url).subscribe(
      {
        next: (result: Patient) => {
          this.patient = result;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
}
