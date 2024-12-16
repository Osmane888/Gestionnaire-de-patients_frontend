import { Component } from '@angular/core';
import { Address, PatientsTotalInfos } from '../../../models/patients.TotalInfos';
import { PatientService } from '../../../services/patientService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {

  infosTotalPatients!: PatientsTotalInfos;
  isEditing = false;

  constructor(
    private _patientService: PatientService,
    private _ar: ActivatedRoute,
    private router: Router
  ) {
    const UUID = this._ar.snapshot.params['id'];
    this._patientService.findById(UUID).subscribe({
      next: (resultDetails: any) => {
        this.infosTotalPatients = {
          id: resultDetails.id,
          firstName: resultDetails.firstname,
          lastName: resultDetails.lastname,
          email: resultDetails.email,
          phoneNumber: resultDetails.phoneNumber,
          birthDate: new Date(resultDetails.birthDate),
          mutuelle: resultDetails.mutuelle,
          info_supplement: resultDetails.info_supplement,
          address: {
            street: resultDetails.address.street,
            streetNumber: resultDetails.address.streetNumber,
            city: resultDetails.address.city,
            zipCode: resultDetails.address.zipCode
          }
        } as PatientsTotalInfos;

        console.log('Patient correctement mappé:', this.infosTotalPatients);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  enableEdit() {
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  confirmUpdatePatient() {
    if (confirm('Are you sure you want to save the changes?')) {
      this.updatePatient();
    }
  }

  updatePatient() {
    this._patientService.updatePatient(this.infosTotalPatients).subscribe({
      next: () => {
        this.isEditing = false;
        alert('Patient information updated successfully!');
        this.router.navigate(['/index']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to update patient information.');
      }
    });
  }
}
