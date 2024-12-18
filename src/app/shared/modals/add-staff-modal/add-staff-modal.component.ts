import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrl: './add-staff-modal.component.scss'
})
export class AddStaffModalComponent {

  isModalOpen = false;

  @Output() staffAdded = new EventEmitter<any>(); // Événement pour notifier le composant parent

  newStaff = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    licenseNumber: '',
    role: '',
    specialization: '',
    password: '',
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  addStaff() {
    this.staffAdded.emit(this.newStaff);
    this.closeModal();
  }

  resetForm() {
    this.newStaff = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      licenseNumber: '',
      role: '',
      specialization: '',
      password: ''
    };
  }

}
