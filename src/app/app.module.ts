import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import {AdminModalComponent} from './components/admin-modal/admin-modal.component';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { SettingsModalComponent } from './components/settings-modal/settings-modal.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
