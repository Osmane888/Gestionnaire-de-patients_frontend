import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';
import { Consultation } from '../models/Consultation';
import { ConsultationForm } from '../forms/ConsultationForm';
import { TotalConsultationInfos } from '../models/TotalConsultationInfos';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private _http: HttpClient) {}

  getAllConsultations(): Observable<Consultation[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.get<Consultation[]>(`${environment.apiUrl}/consultations`, { headers, withCredentials: true });
  }

  findById(id: string): Observable<TotalConsultationInfos> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.get<TotalConsultationInfos>(`${environment.apiUrl}/consultations/${id}`, { headers, withCredentials: true });
  }

  createConsultation(consultationForm: ConsultationForm): Observable<Consultation> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.post<Consultation>(`${environment.apiUrl}/consultations`, consultationForm, { headers, withCredentials: true });
  }

  deleteConsultation(id: string): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.delete<void>(`${environment.apiUrl}/consultations/${id}`, { headers, withCredentials: true });
  }

  updateConsultation(consultation: TotalConsultationInfos): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token' // Remplacez par votre token d'autorisation si nécessaire
    });

    return this._http.put<void>(`${environment.apiUrl}/consultations/${consultation.id}`, consultation, { headers, withCredentials: true });
  }
}
