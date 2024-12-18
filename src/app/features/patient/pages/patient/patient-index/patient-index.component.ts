import { Component } from '@angular/core';
import {PatientService} from '../../../services/patientService';
import {BasicInfosPatient} from '../../../models/patients.BasicInfos';
import {PatientsTotalInfos} from '../../../models/patients.TotalInfos';
import {environment} from "../../../../../shared/environment/environment";

@Component({
  selector: 'app-patient-index',
  templateUrl: './patient-index.component.html',
  styleUrl: './patient-index.component.scss'
})
export class PatientIndexComponent {

  infoBasicPatients!: BasicInfosPatient[];
  selectedPatient!: BasicInfosPatient;
  showModal = false;


  constructor(
    public _patientService: PatientService
  ) {
    this.getPatients(environment.apiUrl + '/patients')
  }

  getPatients(url: string): void {
    this._patientService.getAllPatients(url).subscribe(
      {
        next: (result) => {
          console.log('Patients chargés:', result); // Vérification de l'ID
          this.infoBasicPatients = result;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  openModal(addPatientModal: any) {
    addPatientModal.openModal();
  }

  // Méthode appelée lors de l'événement patientAdded
  addPatient(patient: BasicInfosPatient) {
    console.log("Nouveau patient ajouté:", patient);
    this.infoBasicPatients.push(patient);  // Mise à jour locale de la liste
  }

  // Propriété calculée
  get totalPatients(): number {
    return this.infoBasicPatients.length; // Retourne le nombre de patients
  }

  // Ouvre la fenêtre de confirmation
  openDeleteModal(patient: BasicInfosPatient) {
    this.selectedPatient = patient;
    this.showModal = true;
  }

  // Annule la suppression
  cancelDelete() {
    this.showModal = false;
    this.selectedPatient = undefined!;
  }

  // Supprime le patient
  deletePatient() {
    if (!this.selectedPatient?.id) return;

    this._patientService.deletePatient(this.selectedPatient.id).subscribe({
      next: () => {
        // Suppression locale sans recharger toute la liste
        this.infoBasicPatients = this.infoBasicPatients.filter(
          (patient) => patient.id !== this.selectedPatient.id
        );

        this.showModal = false;
        this.selectedPatient = undefined!;
      },
      error: (error) => {
        console.error("Erreur lors de la suppression :", error);
        alert("La suppression a échoué.");
      }
    });
  }

}
