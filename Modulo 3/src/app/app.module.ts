import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { DatosService } from './servicios/datos.service';
import { UsuarioService } from './servicios/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PanelComponent } from './components/panel/panel.component';
import { IndexComponent } from './components/index/index.component';
import { RedesComponent } from './components/panel/redes/redes.component';
import { BanComponent } from './components/panel/ban/ban.component';
import { InfoComponent } from './components/panel/info/info.component';
import { EducaComponent } from './components/panel/educa/educa.component';
import { SkillComponent } from './components/panel/skill/skill.component';
import { ProyecComponent } from './components/panel/proyec/proyec.component';
import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { BotonLogoutComponent } from './components/boton-logout/boton-logout.component';
import { NetComponent } from './components/net/net.component';
import { NavComponent } from './components/panel/nav/nav.component';
import { PaginafailComponent } from './components/paginafail/paginafail.component';

import { ModalComponent } from './components/modal/modal.component';
import { ModalEducaComponent } from './components/modal/modal-educa/modal-educa.component';
import { ModalAcercaComponent } from './components/modal/modal-acerca/modal-acerca.component';
import { ModalSkillComponent } from './components/modal/modal-skill/modal-skill.component';
import { ModalProyectoComponent } from './components/modal/modal-proyecto/modal-proyecto.component';
import { from } from 'rxjs';
import { ModalbannerComponent } from './components/modal/modalbanner/modalbanner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AcercaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    RegistroComponent,
    PanelComponent,
    IndexComponent,
    RedesComponent,
    BanComponent,
    InfoComponent,
    EducaComponent,
    SkillComponent,
    ProyecComponent,
    BotonLoginComponent,
    NetComponent,
    BotonLogoutComponent,
    NavComponent,
    PaginafailComponent,
    ModalComponent,
    ModalEducaComponent,
    ModalAcercaComponent,
    ModalSkillComponent,
    ModalProyectoComponent,
    ModalbannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
