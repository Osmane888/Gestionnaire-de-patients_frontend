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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.get<BasicInfosPatient[]>(url, { headers, withCredentials: true });
  }

  findById(id: string): Observable<PatientsTotalInfos> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.get<PatientsTotalInfos>(`${environment.apiUrl}/patients/${id}`, { headers, withCredentials: true });
  }

  save(patient: PatientsTotalInfos): Observable<PatientsTotalInfos> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.post<PatientsTotalInfos>(`${environment.apiUrl}/patients`, patient, { headers, withCredentials: true });
  }

  updatePatient(patient: PatientsTotalInfos): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.put<void>(`${environment.apiUrl}/patients/${patient.id}`, patient, { headers, withCredentials: true });
  }

  deletePatient(id: string): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.delete<void>(`${environment.apiUrl}/patients/${id}`, { headers, withCredentials: true });
  }

  searchPatientsByName(name: string): Observable<PatientsTotalInfos[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    const url = `${environment.apiUrl}/patients/search/by-name?name=${name}`;
    return this._http.get<PatientsTotalInfos[]>(url, { headers, withCredentials: true });
  }
}
