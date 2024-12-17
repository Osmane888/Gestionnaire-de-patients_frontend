import { Component } from '@angular/core';
import {Professional} from '../../features/auth/forms/professional';
import {ProfessionalToken} from '../../features/auth/forms/professionalToken';
import {AuthService} from '../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isInfoModalOpen = false;
  currentPro: ProfessionalToken | undefined;

  constructor(private authService: AuthService) {
    authService.professionalInfo$.subscribe(current => {
      this.currentPro = current;
    })
  }

  logout(): void {
    this.authService.logout();
  }

  openInfoModal() {
    console.log("Information Modal Open Triggered");
    this.isInfoModalOpen = true;
  }

  closeInfoModal() {
    console.log("Information Modal Closed");
    this.isInfoModalOpen = false;
  }

  isSettingsModalOpen = false;

  openSettingsModal() {
    console.log("Settings Modal Open Triggered");
    this.isSettingsModalOpen = true;
  }

  closeSettingsModal() {
    console.log("Settings Modal Closed");
    this.isSettingsModalOpen = false;
  }

  handleLogout() {
    console.log("Déconnexion réussie !");
    this.isSettingsModalOpen = false;
  }
}
