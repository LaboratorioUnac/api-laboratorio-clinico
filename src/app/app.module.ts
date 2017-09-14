import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacienteComponent } from './components/pacientes/paciente.component';

//servicios
import { AuthService }  from "./services/auth.service";
import { AuthGuardService } from './services/auth-guard.service';
import { PacientesService } from './services/pacientes.service';
import { ExamenesService } from './services/examenes.service';

//pipes
import { KeysPipe } from './pipes/keys.pipe';
import { PdfComponent } from './components/pdf/pdf.component';
import { HematologiasComponent } from './components/hematologias/hematologias.component';
import { HematologiaComponent } from './components/hematologias/hematologia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    LaboratorioComponent,
    HeaderTopComponent,
    MenuComponent,
    PerfilComponent,
    ExamenesComponent,
    PacientesComponent,
    PacienteComponent,
    KeysPipe,
    PdfComponent,
    HematologiasComponent,
    HematologiaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PacientesService,
    ExamenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
