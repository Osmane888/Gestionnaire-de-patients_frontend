import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';   // Ajout d'une route pour la Page3Component'
import {PatientIndexComponent} from './features/patient/pages/patient/patient-index/patient-index.component';
import {PatientDetailsComponent} from './features/patient/pages/patient/patient-details/patient-details.component';

const routes: Routes = [
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'patients', loadChildren: () => import('./features/patient/patient.module').then(m => m.PatientModule)},
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
