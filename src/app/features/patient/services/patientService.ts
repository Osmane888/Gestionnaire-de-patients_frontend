import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicInfosPatient} from '../models/patients.BasicInfos';
import {PatientsTotalInfos} from '../models/patients.TotalInfos';
import {environment} from '../../../shared/environment/environment';
import {FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  constructor(
    private _http: HttpClient,
  ) {}

  getAllPatients(url: string) {
    return this._http.get<BasicInfosPatient[]>(url);
  }

  findById(id: string) {
    return this._http.get<PatientsTotalInfos>('http://localhost:8082/patients/' + id);
  }

  save(patient: PatientsTotalInfos) {
    return this._http.post<PatientsTotalInfos>(`${environment.apiUrl}/patients`, patient);
  }

  updatePatient(patient: PatientsTotalInfos) {
    return this._http.put<PatientsTotalInfos>(`${environment.apiUrl}/patients/${patient.id}`, patient);
  }

}
