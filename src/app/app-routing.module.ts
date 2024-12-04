import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', loadChildren: () => import('./features/patient/patient.module').then(m => m.PatientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
