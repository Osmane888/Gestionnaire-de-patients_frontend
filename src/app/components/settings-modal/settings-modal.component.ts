import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>(); // Gestion de la déconnexion

  onClose() {
    this.closeModal.emit();
  }

  onLogout() {
    console.log("Déconnexion effectuée");
    this.logout.emit();
  }
}
