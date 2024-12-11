import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isModalOpen = false;

  openAdminModal() {
    console.log("Modale ouverte via AppComponent");
    this.isModalOpen = true;
  }

  closeAdminModal() {
    console.log("Modale fermée via AppComponent");
    this.isModalOpen = false;
  }


}
