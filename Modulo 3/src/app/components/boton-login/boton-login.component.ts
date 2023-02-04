import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent {

  constructor(private router:Router){}
  ngOnInit():void{

  }

  login(){
    this.router.navigate(['/login'])
  }
}
