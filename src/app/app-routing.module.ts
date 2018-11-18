import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login';
import { AppointmentsComponent } from './components/appointments';
import { TasksComponent } from './components/tasks';
import { AppointmentComponent } from './components/appointment';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'tasks', component: TasksComponent },
   { path: 'appointments', component: AppointmentsComponent },
   { path: 'appointment/:id', component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
