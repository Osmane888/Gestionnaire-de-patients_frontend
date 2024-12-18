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
      role: ['', Validators.required], // Rôle fixe
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: data => {
          console.log("formulaire soumis avec succès")
        },
        error: error => {
          console.log(error)
        }
      });

    } else {
      console.log('Form is invalid');
    }
  }
}
