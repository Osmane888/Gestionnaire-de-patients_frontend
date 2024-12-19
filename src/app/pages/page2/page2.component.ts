import { Component } from '@angular/core';
import {Professional} from "../../features/auth/forms/professional";
import {AuthService} from "../../features/auth/services/auth.service";
import {UserTokenDTO} from "../../features/auth/models/UserTokenDTO";
import {ProfessionalsDTO} from "../models/professionalsDTO";
import {AddStaffForm} from '../models/addStaffForm';

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

  selectedStaff: any = null; // Utilisateur à supprimer

  get totalStaff(): number {
    return this.professionals.length;
  }

  confirmDelete(staff: any): void {
    this.selectedStaff = staff; // Stocker l'utilisateur sélectionné
  }

  deleteStaff(id: string): void {
    this._authService.deleteProfessional(id).subscribe({
      next: () => {
        console.log(`Professionnel avec l'ID ${id} supprimé avec succès.`);
        this.professionals = this.professionals.filter((professional) => professional.id !== id);
        this.selectedStaff = null;
      },
      error: (error) => {
        console.error("Erreur lors de la suppression du professionnel : ", error);
      },
    });
    this.selectedStaff = null; // Réinitialiser après suppression
  }

  cancelDelete(): void {
    this.selectedStaff = null; // Annuler la suppression
  }

  openModal(addStaffModal: any) {
    addStaffModal.openModal();
  }

}
