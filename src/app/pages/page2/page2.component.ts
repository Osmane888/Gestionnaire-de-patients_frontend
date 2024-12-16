import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  staffMembers = [
    { id: 1, name: 'Ayoub Legouirah', email: 'ayoubgrand@outlook.fr', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Manager' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com', role: 'Staff' },
  ];

  selectedStaff: any = null; // Utilisateur à supprimer

  get totalStaff(): number {
    return this.staffMembers.length;
  }

  confirmDelete(staff: any): void {
    this.selectedStaff = staff; // Stocker l'utilisateur sélectionné
  }

  deleteStaff(id: number): void {
    this.staffMembers = this.staffMembers.filter((staff) => staff.id !== id);
    this.selectedStaff = null; // Réinitialiser après suppression
  }

  cancelDelete(): void {
    this.selectedStaff = null; // Annuler la suppression
  }

  openModal(addStaffModal: any) {
    addStaffModal.openModal();
  }

  addPatient(staff: any) {
    this.staffMembers.push(staff);
  }

}
