import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isInfoModalOpen = false;

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
