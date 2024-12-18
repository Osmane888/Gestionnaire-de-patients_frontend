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
    return this._http.get<Consultation[]>(`${environment.apiUrl}/consultations`);
  }

  findById(id: string): Observable<TotalConsultationInfos> {
    return this._http.get<TotalConsultationInfos>(`${environment.apiUrl}/consultations/${id}`);
  }

  createConsultation(consultationForm: ConsultationForm): Observable<Consultation> {
    return this._http.post<Consultation>(`${environment.apiUrl}/consultations`,consultationForm);
  }

  deleteConsultation(id: string): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/consultations/${id}`);
  }

  updateConsultation(consultation: TotalConsultationInfos): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl}/consultations/${consultation.id}`, consultation);
  }
}
