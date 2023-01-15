import { Component, OnInit  } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  informacionList:any=[];
  informacion:string='';
//foto
  constructor(private datos: DatosService){}
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=>{
      this.informacionList=data.acerca;
      this.informacion=data.contenido;
      })
    }
}