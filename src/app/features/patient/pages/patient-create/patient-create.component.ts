import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PatientService} from '../../services/patientService';
import {Router} from '@angular/router';
import {PatientForm} from '../../forms/PatientForm';
import {PatientsTotalInfos} from '../../models/patients.TotalInfos';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.scss'
})
export class PatientCreateComponent {

  patientForm: FormGroup

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _patientService: PatientService,
    private readonly _router: Router
  ){
    this.patientForm = this._fb.group({...PatientForm})
  }

  submit() {

    if (this.patientForm.invalid){
      this.patientForm.markAsTouched();
      return;
    }
    this._patientService.save(this.patientForm.value).subscribe(
      {
        next: (patient: PatientsTotalInfos) => {
          this._router.navigate(['/patients']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        }
      }
    )
  }
}
