import { Component } from '@angular/core';
import {Address, PatientsTotalInfos} from '../../models/patients.TotalInfos';
import {PatientService} from '../../services/patientService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent {

  infosTotalPatients!: PatientsTotalInfos;
  isEditing = false;
  formattedBirthdate!: string;


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


  //
  // ngOnInit() {
  //   const name = this._ar.snapshot.paramMap.get('id');
  //   this.infosTotalPatients = this.infosTotalPatients.find((UUID) => p.name === name);
  // }
  //
  // enableEdit() {
  //   this.isEditing = true;
  // }
  //
  // cancelEdit() {
  //   this.isEditing = false;
  // }
  //
  // confirmUpdatePatient() {
  //   if (confirm('Are you sure you want to save the changes?')) {
  //     this.updatePatient();
  //   }
  // }

  // updatePatient() {
  //   const index = this.patients.findIndex((p) => p.name === this.patient.name);
  //   if (index !== -1) {
  //     this.patients[index] = { ...this.patient };
  //   }
  //   this.isEditing = false;
  //
  //   // Optionnel : Redirection vers la liste principale
  //   this.router.navigate(['/']);
  // }

