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
import { AdminModalComponent } from './components/admin-modal/admin-modal.component';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';
import { AddPatientModalComponent } from './components/add-patient-modal/add-patient-modal.component';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
