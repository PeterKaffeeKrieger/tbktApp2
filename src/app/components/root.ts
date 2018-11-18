import { Component, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";
import { SessionService } from '../services/SessionService';
import { SidenavService } from '../services/SidenavService';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'root-component',
  templateUrl: './root.html',
  styleUrls: ['./root.css']
})
export class RootComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router, private session: SessionService, private sidenavService:SidenavService) {
    console.log("Root cons")
    session.setRouter(router)
    router.navigate(["/login"])
  } 

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}