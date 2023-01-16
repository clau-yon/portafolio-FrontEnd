import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit  {
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

      alert("Formulario enviado")
    }else{
     
      this.form.markAllAsTouched(); 
    }
 
  }
}