import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-patient-details',
  templateUrl: './page-patient-details.component.html',
  styleUrls: ['./page-patient-details.component.scss'],
})
export class PagePatientDetailsComponent implements OnInit {
  patient: any;
  isEditing = false;

  patients = [
    { name: 'John Doe', phone: '+32 4 88 33 89 52', email: 'john.doe@example.com', address: '123 Street', mutuel: 'partena', registered: '2024-01-01', lastTreatment: '2024-12-01' },
    { name: 'Jane Smith', phone: '+32 4 88 77 66 55', email: 'jane.smith@example.com', address: '456 Avenue', mutuel: 'partena', registered: '2023-06-15', lastTreatment: '2024-11-20' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.patient = this.patients.find((p) => p.name === name);
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
    const index = this.patients.findIndex((p) => p.name === this.patient.name);
    if (index !== -1) {
      this.patients[index] = { ...this.patient };
    }
    this.isEditing = false;

    // Optionnel : Redirection vers la liste principale
    this.router.navigate(['/']);
  }
}
