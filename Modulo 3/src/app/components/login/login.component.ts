import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder){ 
    
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail(){
   return this.form.get("email");
  }
  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){

    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      alert("Falta datos");
    }
 
  }
}