import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  staffMembers = [
    { id: 1, name: 'Ayoub Legouirah', email: 'ayoubgrand@outlook.fr', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Manager' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com', role: 'Staff' },

  ];

  get totalStaff(): number {
    return this.staffMembers.length;
  }

  deleteStaff(id: number): void {
    this.staffMembers = this.staffMembers.filter((staff) => staff.id !== id);
  }
}
