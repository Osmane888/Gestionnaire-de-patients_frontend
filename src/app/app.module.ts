import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animation requise par PrimeNG
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Composants principaux
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { AdminModalComponent } from './modal/admin-modal/admin-modal.component';
import { InformationModalComponent } from './modal/information-modal/information-modal.component';
import { SettingsModalComponent } from './modal/settings-modal/settings-modal.component';
import { AddPatientModalComponent } from './modal/add-patient-modal/add-patient-modal.component';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { Page3Component } from './pages/page3/page3.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarModalComponent } from './modal/calendar-modal/calendar-modal.component';
import { PagePatientDetailsComponent } from './pages/page-patient-details/page-patient-details.component';
import {SharedModule} from './shared/shared.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    Page1Component,
    Page2Component,
    AdminModalComponent,
    InformationModalComponent,
    SettingsModalComponent,
    AddPatientModalComponent,
    Page3Component,
    LoginComponent,
    CalendarModalComponent,
    PagePatientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    // PrimeNG Modules
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
