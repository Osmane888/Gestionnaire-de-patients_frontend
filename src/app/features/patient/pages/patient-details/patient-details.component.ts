import { Component } from '@angular/core';
import {PatientsTotalInfos} from '../../models/patients.TotalInfos';
import {PatientService} from '../../services/patientService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent {

  infosTotalPatients!: PatientsTotalInfos;


  constructor(
    public _patientService: PatientService,
    public _ar: ActivatedRoute,
  ) {
    let UUID = _ar.snapshot.params['id'];
      this._patientService.findById(UUID).subscribe(
        {
          next: (resultDetails) => {
            this.infosTotalPatients = resultDetails;
            console.log(this.infosTotalPatients);
          },
          error: (error) => {
            console.log(error)
          }
        })
  }
}
