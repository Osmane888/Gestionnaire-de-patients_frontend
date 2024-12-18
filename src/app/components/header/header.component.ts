import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PatientService } from '../../features/patient/services/patientService';
import {Professional} from '../../features/auth/forms/professional';
import {ProfessionalToken} from '../../features/auth/forms/professionalToken';
import {AuthService} from '../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  isSearchOpen = false;
  isInfoModalOpen = false;
  isSettingsModalOpen = false;
  currentPro: ProfessionalToken | undefined;

  constructor(
    private patientService: PatientService,
    private eRef: ElementRef,
    private router: Router,
    private authService: AuthService
  ) {
    // Surveille les changements de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetSearch();  // Réinitialise la barre de recherche
      }
    });
    authService.professionalInfo$.subscribe(current => {
      this.currentPro = current;
    });
  }

  // Recherche et ouvre la liste des résultats
  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.isSearchOpen = true;
      this.patientService.searchPatientsByName(this.searchQuery)
        .subscribe(
          (results) => {
            this.searchResults = results;
            console.log("Résultats reçus :", results);
          },
          (error) => {
            console.error("Erreur lors de la recherche :", error);
          }
        );
    }
  }

  // Ferme la barre de recherche si clic extérieur
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSearchOpen = false;
    }
  }

  // Réinitialise la barre de recherche
  resetSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    this.isSearchOpen = false;
  }
  
  logout(): void {
    this.authService.logout();
    }

  openInfoModal() {
    this.isInfoModalOpen = true;
  }

  closeInfoModal() {
    this.isInfoModalOpen = false;
  }

  openSettingsModal() {
    this.isSettingsModalOpen = true;
  }

  closeSettingsModal() {
    this.isSettingsModalOpen = false;
  }

  handleLogout() {
    console.log("Déconnexion réussie !");
    this.isSettingsModalOpen = false;
  }
}
