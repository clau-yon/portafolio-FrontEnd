import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PanelComponent } from './components/panel/panel.component';
import { PaginafailComponent } from './components/paginafail/paginafail.component';
import { EducaComponent } from './components/panel/educa/educa.component';
import { InfoComponent } from './components/panel/info/info.component';
import { ProyecComponent } from './components/panel/proyec/proyec.component';
import { SkillComponent } from './components/panel/skill/skill.component';
import { BanComponent } from './components/panel/ban/ban.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'banner', component:BanComponent},
  {path: 'acerca', component:InfoComponent},
  {path: 'educacion', component:EducaComponent},
  {path: 'skill', component:SkillComponent},
  {path: 'proyectos', component:ProyecComponent},
  {path: '**', component:PaginafailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
