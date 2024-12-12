import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';   // Ajout d'une route pour la Page3Component'
import { LoginComponent } from './pages/login/login.component';
import { PagePatientDetailsComponent} from './pages/page-patient-details/page-patient-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'pageDetails/:name', component: PagePatientDetailsComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
