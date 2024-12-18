import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';
import { BasicInfosPatient } from '../models/patients.BasicInfos';
import { PatientsTotalInfos } from '../models/patients.TotalInfos';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http: HttpClient) {}

  getAllPatients(url: string): Observable<BasicInfosPatient[]> {
    return this._http.get<BasicInfosPatient[]>(url);
  }

  findById(id: string): Observable<PatientsTotalInfos> {
    return this._http.get<PatientsTotalInfos>(`${environment.apiUrl}/patients/${id}`);
  }

  save(patient: PatientsTotalInfos): Observable<PatientsTotalInfos> {
    return this._http.post<PatientsTotalInfos>(`${environment.apiUrl}/patients`, patient);
  }

  updatePatient(patient: PatientsTotalInfos): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl}/patients/${patient.id}`, patient);
  }

  deletePatient(id: string): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/patients/${id}`);
  }

  searchPatientsByName(name: string): Observable<PatientsTotalInfos[]> {
    const url = `${environment.apiUrl}/patients/search/by-name?name=${name}`;
    return this._http.get<PatientsTotalInfos[]>(url);
  }
}
