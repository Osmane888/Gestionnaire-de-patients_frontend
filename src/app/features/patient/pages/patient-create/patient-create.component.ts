import { Component } from '@angular/core';
import { PatientForm } from '../../forms/PatientForm';
import {PatientService} from '../../services/patientService';
import {PatientsTotalInfos} from '../../models/patients.TotalInfos';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
})

export class PatientCreateComponent {
  patientForm = PatientForm;

  constructor(private patientService: PatientService) {}

  submit() {
    if (this.patientForm.valid) {
      const patient = this.patientForm.value as unknown as PatientsTotalInfos;

      this.patientService.save(patient).subscribe({
        next: (response) => console.log('Patient créé:', response),
        error: (error) => console.error('Erreur lors de la création:', error)
      });
    } else {
      console.error('Formulaire invalide');
    }
  }

}
