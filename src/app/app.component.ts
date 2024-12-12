import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isModalOpen = false;
  isLoginPage = false;

  openAdminModal() {
    console.log("Modale ouverte via AppComponent");
    this.isModalOpen = true;
  }

  closeAdminModal() {
    console.log("Modale fermée via AppComponent");
    this.isModalOpen = false;
  }

  constructor(private router: Router) {
    // Vérifie l'URL actuelle pour masquer la barre latérale et l'en-tête
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/login';
      }
    });
  }


}
