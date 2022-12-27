import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})

export class BanComponent implements OnInit{
  nombre:string = '';
  portafolio:any;
  //any=[]
  constructor(private datos: DatosService){}
  ngOnInit(): void {
      this.datos.getDatos().subscribe(data=>{
        this.portafolio=data;
      })
  }
}

