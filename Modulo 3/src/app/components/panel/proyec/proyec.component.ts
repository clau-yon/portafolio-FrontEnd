import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-proyec',
  templateUrl: './proyec.component.html',
  styleUrls: ['./proyec.component.css']
})
export class ProyecComponent implements OnInit{
  
  proyectoList:any=[];
  nombre:string='';
  describe:string='';
  //foto
  constructor(private datos: DatosService){}
    ngOnInit(): void {
      this.datos.getDatos().subscribe(data=>{
        this.proyectoList=data.proyecto;
        this.nombre=data.nombreProyecto;
        this.describe=data.descripcion;
        })
      }
}
