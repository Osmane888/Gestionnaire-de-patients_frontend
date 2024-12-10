import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'] // Correction ici
})
export class SidebarComponent {
  @Output() adminModalOpened = new EventEmitter<void>();

  openAdminModal() {
    console.log("Bouton de la Sidebar cliqué");
    this.adminModalOpened.emit();
  }
}
