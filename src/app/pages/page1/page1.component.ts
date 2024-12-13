import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  patients = [
    { name: 'John Doe', phone: '+32 4 88 33 89 52', email: 'john.doe@example.com', address: '123 Street', mutuel:"partena" ,  registered: '2024-01-01', lastTreatment: '2024-12-01' },
    { name: 'Jane Smith', phone: '+32 4 88 77 66 55', email: 'jane.smith@example.com', address: '456 Avenue', mutuel:"partena" , registered: '2023-06-15', lastTreatment: '2024-11-20' }
  ];

  openModal(addPatientModal: any) {
    addPatientModal.openModal();
  }

  addPatient(patient: any) {
    this.patients.push(patient);
  }

  get totalPatients(): number {
    return this.patients.length; // Retourne le nombre de patients
  }

  selectedPatient: any = null;

  confirmDelete(patient: any) {
    this.selectedPatient = patient;
  }

  deletePatient() {
    this.patients = this.patients.filter((p) => p.name!== this.selectedPatient.name);
    this.selectedPatient = null;
  }

  cancelDelete() {
    this.selectedPatient = null;
  }

}
