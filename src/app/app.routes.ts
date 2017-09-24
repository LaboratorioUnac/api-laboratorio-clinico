import { RouterModule, Routes } from '@angular/router';


import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {LaboratorioComponent} from './components/laboratorio/laboratorio.component';
import {PacientesComponent} from './components/pacientes/pacientes.component';
import {PacienteComponent} from './components/pacientes/paciente.component';
import {HematologiasComponent} from './components/hematologias/hematologias.component';
import {HematologiaComponent} from './components/hematologias/hematologia.component';
import {InmunologiasComponent} from './components/inmunologias/inmunologias.component';
import {InmunologiaComponent} from './components/inmunologias/inmunologia.component';
import {MensajesComponent} from './components/mensajes/mensajes.component';

import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'laboratorio', component: LaboratorioComponent },
  { path: 'contact', component: ContactComponent },
      {
        path: 'pacientes',
        component: PacientesComponent,
        canActivate: [ AuthGuardService ]
       },
       {
         path: 'paciente/:id',
         component: PacienteComponent,
         canActivate: [ AuthGuardService ]
        },
        {
          path: 'hematologias/:id',
          component: HematologiasComponent,
          canActivate: [ AuthGuardService ]
         },
         {
           path: 'hematologia/:id',
           component: HematologiaComponent,
           canActivate: [ AuthGuardService ]
          },
          {
            path: 'inmunologias/:id',
            component: InmunologiasComponent,
            canActivate: [ AuthGuardService ]
           },
           {
             path: 'inmunologia/:id',
             component: InmunologiaComponent,
             canActivate: [ AuthGuardService ]
            },
            {
              path: 'mensajes',
              component: MensajesComponent,
              canActivate: [ AuthGuardService ]
             },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
