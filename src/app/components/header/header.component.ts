import {Component, HostListener, ElementRef, Output, EventEmitter} from '@angular/core';
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
  @Output() adminSettingsOpened = new EventEmitter<void>();
  searchQuery: string = '';
  searchResults: any[] = [];
  isSearchOpen = false;
  isInfoModalOpen = false;
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

  openInfoModal() {
    this.isInfoModalOpen = true;
  }

  closeInfoModal() {
    this.isInfoModalOpen = false;
  }

  openSettingsModal() {
    console.log("Bouton de la Sidebar cliqué");
    this.adminSettingsOpened.emit();
  }
}
