import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import {Router} from '@angular/router';

@Component({
  selector: 'tasks-component',
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent {
  constructor(private session:SessionService, private router:Router){
    this.session.checkLogin(router);
  }
}
