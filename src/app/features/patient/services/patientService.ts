import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicInfosPatient} from '../models/patients.BasicInfos';
import {PatientsTotalInfos} from '../models/patients.TotalInfos';

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
    return this._http.get<PatientsTotalInfos>('http://localhost:8080/patients/' + id);
  }
}
