import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isModalOpen = false;
  isLoginPage = false;
  isSettingsModalOpen = false;


  openAdminModal() {
    console.log("Modale ouverte via AppComponent");
    this.isModalOpen = true;
  }

  closeAdminModal() {
    console.log("Modale fermée via AppComponent");
    this.isModalOpen = false;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    ) {
    // Vérifie l'URL actuelle pour masquer la barre latérale et l'en-tête
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/login';
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

  openSettingsModal() {
    this.isSettingsModalOpen = true;
  }

  closeSettingsModal() {
    this.isSettingsModalOpen = false;
  }

  protected readonly localStorage = localStorage;
}
