import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animation requise par PrimeNG
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import du module principal

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
import {SharedModule} from './shared/shared.module';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {LoginComponent} from './features/auth/pages/login/login.component';
import {AuthModule} from "./features/auth/auth.module";
import {jwtInterceptor} from './core/jwt.interceptor';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SidebarComponent,
        Page2Component,
        Page3Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FullCalendarModule,

        // PrimeNG Modules
        DialogModule,
        ButtonModule,
        InputTextModule,
        TableModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        SharedModule,
        AutoCompleteModule,
        AuthModule
    ],
    providers: [
        provideHttpClient(
          withInterceptors([jwtInterceptor])
        ),
    ],
    bootstrap: [AppComponent],
    exports: [
    ]
})
export class AppModule { }
