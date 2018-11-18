import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import {Router} from "@angular/router";
import { DataService } from '../services/DataService';

@Component({
  selector: 'appointments-component',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {
  constructor(private session:SessionService, private router:Router, private dataService:DataService){
    this.session.checkLogin(router);
  }

  
}