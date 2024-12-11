import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-patient-modal',
  templateUrl: './add-patient-modal.component.html',
  styleUrls: ['./add-patient-modal.component.scss']
})
export class AddPatientModalComponent {
  isModalOpen = false;

  @Output() patientAdded = new EventEmitter<any>(); // Événement pour notifier le composant parent

  newPatient = {
    name: '',
    phone: '',
    email: '',
    address: '',
    registered: '',
    lastTreatment: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  addPatient() {
    this.patientAdded.emit(this.newPatient); // Émet le nouvel utilisateur au composant parent
    this.closeModal();
  }

  resetForm() {
    this.newPatient = {
      name: '',
      phone: '',
      email: '',
      address: '',
      registered: '',
      lastTreatment: ''
    };
  }
}
