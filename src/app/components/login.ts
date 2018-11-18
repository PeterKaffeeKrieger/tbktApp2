import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import {Router} from "@angular/router";
import { SidenavService } from '../services/SidenavService';
import {MatSnackBar, MatSnackBarHorizontalPosition} from '@angular/material';
import {DataBaseService} from "../services/DataBaseService";
import {DataService} from "../services/DataService";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'login-component',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private router: Router, 
    private session: SessionService,
    private dataBase: DataBaseService,
    private data: DataService,
    private sideNav:SidenavService, 
    public snackBar: MatSnackBar){

  }

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher(); 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  login(email: string, password: string){
    console.log(email + " " + password);
    if(this.dataBase.validateUser(email, password)){
      this.data.setUserData(this.dataBase.loadUserData(email, password));
      this.session.login();
      this.snackBar.open("Login successful!", "", {
        duration: 2000,
        panelClass: ['snack-bar-success'],
        horizontalPosition: this.horizontalPosition
      });
      console.log("Login successful, navigating...")
      this.sideNav.open()
      this.router.navigate(["/appointments"])      
    }
    else {
      this.snackBar.open("Login failed...", "", {
        panelClass: ['snack-bar-warning'],
        duration: 2000,
        horizontalPosition: this.horizontalPosition
      });
    }
  }
}
