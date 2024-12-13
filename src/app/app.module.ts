import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animation requise par PrimeNG
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Composants principaux
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { Page2Component } from './pages/page2/page2.component';

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
import { PagePatientDetailsComponent } from './pages/page-patient-details/page-patient-details.component';
import {SharedModule} from './shared/shared.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        Page2Component,
        Page3Component,
        LoginComponent,
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
    exports: [
    ]
})
export class AppModule { }
