import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../features/auth/services/auth.service';
import {AddStaffForm} from '../../../pages/models/addStaffForm';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrl: './add-staff-modal.component.scss'
})
export class AddStaffModalComponent {

  isModalOpen = false;
  newStaffForm: FormGroup;

  @Output() staffAdded = new EventEmitter<any>(); // Événement pour notifier le composant parent

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.newStaffForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      licenseNumber: [''],
      role: ['', [Validators.required]],
      specialization: [''],
      password: ['', [Validators.required]],
    })
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
    console.log(this.newStaffForm)
  }

  resetForm() {
    this.newStaffForm.reset();
  }

  addStaff(): void {

    if(this.newStaffForm.invalid){
      this.newStaffForm.markAsTouched();
      return;
    }

    this.authService.register(this.newStaffForm.value).subscribe({
      next:(response: any) => {
        console.log('Professionel ajouté avec succès');
        this.staffAdded.emit(response);
        this.closeModal()
      },
      error:(error)=>{
        console.error('Erreur lors de l\'insertion d\'un professionel')
      }
    })
  }

}
