import {HttpInterceptor, HttpInterceptorFn} from '@angular/common/http';
import {UserTokenDTO} from '../features/auth/models/UserTokenDTO';
import {AuthService} from '../features/auth/services/auth.service';
import {inject} from '@angular/core';
import {ProfessionalToken} from '../features/auth/forms/professionalToken';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  let professional: ProfessionalToken|undefined = authService.professionalInfo;
  if(professional) {
    let token = professional.token;
    if(token) {
      if(token !== ''){
        let requestClone = req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + token)
        });
        return next(requestClone);
      }
    }
  }
  return  next(req);
}
