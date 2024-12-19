import { Injectable } from '@angular/core';
import {environment} from '../../../shared/environment/environment';
import {HttpClient} from '@angular/common/http';
import {LoginForm} from '../models/LoginForm';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {RegisterForm} from '../models/RegisterForm';
import {ProfessionalToken} from '../forms/professionalToken';
import {Router} from '@angular/router';
import {ProfessionalsDTO} from '../../../pages/models/professionalsDTO';
import {AddStaffForm} from '../../../pages/models/addStaffForm';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _professionalInfoSubject$ = new BehaviorSubject<ProfessionalToken | undefined>(undefined);

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    const savedProfessional = localStorage.getItem('professionelToken');

    if(savedProfessional){
      const professional = JSON.parse(savedProfessional);
      this._professionalInfoSubject$.next(professional);
    }
  }

  get professionalInfo(): ProfessionalToken | undefined {
    return this._professionalInfoSubject$.value;
  }

  get professionalInfo$(): Observable<ProfessionalToken | undefined>{
    return this._professionalInfoSubject$.asObservable();
  }

  login(form: LoginForm): Observable<ProfessionalToken>{
    return this._http.post<ProfessionalToken>(environment.apiUrl + '/login', form).pipe(
      tap(data => {
        this._professionalInfoSubject$.next(data);
        localStorage.setItem('professionelToken', JSON.stringify(data));
      })
    );
  }

  register(form: AddStaffForm): Observable<AddStaffForm>{
    return this._http.post<AddStaffForm>(environment.apiUrl + '/register', form);
  }

  logout(): void{
    localStorage.removeItem('professionelToken');
    this._professionalInfoSubject$.next(undefined);
    this._router.navigate(['/auth/login']);
  }

  getAllProfessionals(): Observable<ProfessionalsDTO[]>{
    return this._http.get<ProfessionalsDTO[]>(environment.apiUrl + '/professionals');
  }

  deleteProfessional(id: string): Observable<void>{
    return this._http.delete<void>(`${environment.apiUrl}/professionals/${id}`);
  }
}
