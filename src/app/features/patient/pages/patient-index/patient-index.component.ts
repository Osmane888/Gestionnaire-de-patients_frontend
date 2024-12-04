import { Component } from '@angular/core';
import {PatientsBasicInfos} from '../../models/patients.infos';
import {PatientService} from '../../services/patientService';

@Component({
  selector: 'app-patient-index',
  templateUrl: './patient-index.component.html',
  styleUrl: './patient-index.component.scss'
})
export class PatientIndexComponent {

  patientBasicInfos!: PatientsBasicInfos;

  constructor(
    public _patientService: PatientService
  ) {
    this.getPatients('http://localhost:8080')
  }

  getPatients(url: string): void {
    this._patientService.getAllPatients(url).subscribe(
      {
        next: (result: PatientsBasicInfos) => {
          this.patientBasicInfos = result;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
}
