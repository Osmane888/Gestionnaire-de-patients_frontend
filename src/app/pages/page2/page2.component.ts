import { Component } from '@angular/core';
import {Professional} from "../../features/auth/forms/professional";
import {AuthService} from "../../features/auth/services/auth.service";
import {UserTokenDTO} from "../../features/auth/models/UserTokenDTO";
import {ProfessionalsDTO} from "../models/professionalsDTO";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {

  professionals!: ProfessionalsDTO[];

  constructor(
      private readonly _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals(): void{
    this._authService.getAllProfessionals().subscribe({
      next: (data: ProfessionalsDTO[]) => {
        this.professionals = data;
        console.log("les professionels ont été chargé");
      },
      error:(error) => {
        console.log("Erreur dans le chargement des professionels " + error);
      },
    })
  }

  staffMembers = [
    { id: 1, name: 'Ayoub Legouirah', email: 'ayoubgrand@outlook.fr', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Manager' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com', role: 'Staff' },
  ];

  selectedStaff: any = null; // Utilisateur à supprimer

  get totalStaff(): number {
    return this.professionals.length;
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
