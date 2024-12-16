import { Injectable } from '@angular/core';
import {environment} from '../../../shared/environment/environment';
import {HttpClient} from '@angular/common/http';
import {LoginForm} from '../models/LoginForm';
import {Observable} from 'rxjs';
import {UserTokenDTO} from '../models/UserTokenDTO';
import {RegisterForm} from '../models/RegisterForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(form: LoginForm): Observable<UserTokenDTO>{
    return this.http.post<UserTokenDTO>(environment.apiUrl + '/login', form);
  }

  register(form: RegisterForm): Observable<void>{
    return this.http.post<void>(environment.apiUrl + '/register', form);
  }
}
