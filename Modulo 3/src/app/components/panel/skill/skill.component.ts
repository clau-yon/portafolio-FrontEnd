import { Component, OnInit }  from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
  skillList:any=[];
  nombre:string='';
  porcentaje:string='';
  color:string='';
  constructor(private datos: DatosService){}
    ngOnInit(): void {
      this.datos.getDatos().subscribe(data=>{
        this.skillList=data.skills;
        this.nombre=data.nombreSkill;
        this.porcentaje=data.numeroSkill;
        this.color=data.pintar;
        })
      }
}