import { Component,OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit  {

  signupUsers: any [] = [];
  signupObj:any = {
    email: '',
    password: ''
  };


 

  ngOnInit():void {

  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  }

}