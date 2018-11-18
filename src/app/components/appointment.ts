import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/DataService';
import { switchMap } from 'rxjs/operators';
import { Appointment } from '../model/Appointment';

@Component({
  selector: 'appointment-component',
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css']
})
export class AppointmentComponent {

  private appointment:Appointment;

  constructor(private route: ActivatedRoute,private session:SessionService, private router:Router, private dataService:DataService){
    this.session.checkLogin(router);
  }

  getAppointment():Appointment{
    return this.appointment;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        let id = params['id'];
        console.log(params)
        console.log("ID: " + id)
        this.appointment = this.dataService.getAppointment(id); 
        console.log(this.appointment)
    });
  }

}