import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientsBasicInfos} from '../models/patients.infos';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  constructor(
    private _htpp: HttpClient,
  ) {}

  getAllPatients(url: string): Observable<PatientsBasicInfos> {
    return this._htpp.get<PatientsBasicInfos>(url);
  }
}
