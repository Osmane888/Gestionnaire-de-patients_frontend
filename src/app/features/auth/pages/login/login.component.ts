import { Component } from '@angular/core';
import {LoginForm} from '../../models/LoginForm';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Professional} from '../../forms/professional';
import {ProfessionalToken} from '../../forms/professionalToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  proLoggedInfo!: Professional;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (success: ProfessionalToken)=> {
          localStorage.setItem('token', success.token);
          this.proLoggedInfo = success.professional;
          this.router.navigate(['patients/index']);
        },
        error: (error) => {
          console.error('Login failed: ', error);
        }
      })
    }
  }
}
