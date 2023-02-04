import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educa',
  templateUrl: './educa.component.html',
  styleUrls: ['./educa.component.css']
})

export class EducaComponent implements OnInit{
  educacionList:any=[];
  titulos : string = '';
  instituciones : string = '';
  years : string = '';
  
  constructor(private datos: DatosService){}
  ngOnInit(): void {
      this.datos.getDatos().subscribe(data=>{
        this.educacionList=data.educacion;
        this.titulos=data.titulo;
        this.instituciones=data.institucion;
        this.years=data.year;
      })
  }
}




