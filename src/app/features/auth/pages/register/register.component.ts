import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterForm} from '../../models/RegisterForm';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      specialization: ['', Validators.required],
      role: [{ value: 'ADMINISTRATEUR', disabled: true }, Validators.required], // Rôle fixe
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Extraire les valeurs complètes du formulaire
      const formData: RegisterForm = this.registerForm.getRawValue();
      console.log('Form submitted:', formData);
      this.authService.register(formData)
      console.log("formulaire soumis avec succès")

    } else {
      console.log('Form is invalid');
    }
  }
}
