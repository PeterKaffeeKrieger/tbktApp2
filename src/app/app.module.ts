import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material-module';
import { RootComponent } from './components/root';
import { SessionService } from './services/SessionService';
import { TasksComponent } from './components/tasks';
import { AppointmentsComponent } from './components/appointments';
import { SidenavService } from './services/SidenavService';
import { DataService } from './services/DataService';
import { AppointmentComponent } from './components/appointment';
import {DataBaseService} from "./services/DataBaseService";

@NgModule({
  declarations: [
    LoginComponent,
    RootComponent,
    TasksComponent,
    AppointmentsComponent,
    AppointmentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    SessionService,
    SidenavService,
    DataService,
    DataBaseService],
  bootstrap: [RootComponent]
})
export class AppModule { }
