import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})

export class BanComponent implements OnInit{
  nombres:string = '';
  apellidos:string = '';
  puestos:string = '';
  portafolioList:any=[];
  //any=[]
  constructor(private datos: DatosService){}
  ngOnInit(): void {
      this.datos.getDatos().subscribe(data=>{
        this.portafolioList=data.banner;
        this.nombres=data.nombre;
        this.apellidos=data.apellido;
        this.puestos=data.puesto;
      })
  }
}

