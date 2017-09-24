import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Paciente } from '../interfaces/paciente.interface';
import 'rxjs/Rx';

@Injectable()
export class PacientesService {

pacientesURL:string="https://laboratorioclinico-eps.firebaseio.com/pacientes.json";
pacienteURL:string="https://laboratorioclinico-eps.firebaseio.com/pacientes/";

  constructor( private http:Http ) { }

      nuevoPaciente( paciente:Paciente ){

          let body = JSON.stringify( paciente );
          let headers = new Headers ({
            'Content-Type':'application/json'
          });

          return this.http.post( this.pacientesURL, body, { headers } )
              .map( res => {
                console.log(res.json());
                return res.json();
              })
      }

      actualizarPaciente( paciente:Paciente, key$:string){

          let body = JSON.stringify( paciente );
          let headers = new Headers ({
            'Content-Type':'application/json'
          });

          let url = `${ this.pacienteURL }/${ key$ }.json`;

          return this.http.put( url, body, { headers } )
              .map( res => {
                console.log(res.json());
                return res.json();
              })
      }

      obtenerPaciente( key$:string ){
        let url = `${ this.pacienteURL }/${ key$ }.json`;
        return this.http.get(url)
        .map(res=>res.json());
      }

      obtenerPacientes(  ){
        return this.http.get(this.pacientesURL)
            .map(res=>res.json());
      }

      borrarPaciente(key$ : string){
        let url = `${ this.pacienteURL }/${ key$ }.json`;
        return this.http.delete( url )
          .map(res=>res.json());
      }

}
