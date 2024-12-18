import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {anonymousGuard} from '../../shared/guards/anonymous.guard';
import {authenticatedGuard} from '../../shared/guards/authenticated.guard';
import {adminGuard} from '../../shared/guards/admin.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [anonymousGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [adminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
