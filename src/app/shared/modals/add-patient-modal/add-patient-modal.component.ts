import { Component, EventEmitter, Output } from '@angular/core';
import {PatientService} from '../../../features/patient/services/patientService';
import {PatientsTotalInfos} from '../../../features/patient/models/patients.TotalInfos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicInfosPatient} from '../../../features/patient/models/patients.BasicInfos';

@Component({
  selector: 'app-add-patient-modal',
  templateUrl: './add-patient-modal.component.html',
  styleUrls: ['./add-patient-modal.component.scss']
})
export class AddPatientModalComponent {
  isModalOpen = false;
  patientForm: FormGroup;
  @Output() patientAdded = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {
    this.patientForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: [''],
      birthDate: ['', Validators.required],
      mutuelle: [''],
      info_supplement: [''],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        streetNumber: ['', Validators.required],
        zipCode: ['', Validators.required]
      })
    });
  }


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.patientForm.reset();
  }

  submit() {
    if (this.patientForm.valid) {
      const patient = this.patientForm.value as PatientsTotalInfos;

      this.patientService.save(patient).subscribe({
        next: (response) => {
          console.log('Patient créé:', response);
          this.patientAdded.emit(response); // Émission du patient créé
          this.closeModal();
          window.location.reload();
        },
        error: (error) => console.error('Erreur lors de la création:', error)
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}
