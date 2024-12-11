import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/patients.infos';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  constructor(
    private _http: HttpClient,
  ) {}

  getAllPatients(url: string): Observable<Patient> {
    return this._http.get<Patient>(url);
  }
}
