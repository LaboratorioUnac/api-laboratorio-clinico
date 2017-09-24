import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Mensaje } from '../interfaces/mensaje.interface';
import 'rxjs/Rx';

@Injectable()
export class MensajesService {

  mensajesURL:string ="https://laboratorioclinico-eps.firebaseio.com/mensajes.json";
  mensajeURL:string="https://laboratorioclinico-eps.firebaseio.com/mensajes/";

    constructor( private http:Http ) {}

        nuevoMensaje( mensaje:Mensaje ){
            let body = JSON.stringify( mensaje );
            let headers = new Headers ({
              'Content-Type':'application/json'
            });

            return this.http.post( this.mensajesURL, body, { headers } )
                .map( res => {
                  console.log(res.json());
                  return res.json();
                })
          }

            obtenerMensaje( key$:string ){
              let url = `${ this.mensajeURL }/${ key$ }.json`;
              return this.http.get(url)
              .map(res=>res.json());
            }

            obtenerMensajes(  ){
              return this.http.get(this.mensajesURL)
                  .map(res=>res.json());
            }

            borrarMensaje(key$ : string){
              let url = `${ this.mensajeURL }/${ key$ }.json`;
              return this.http.delete( url )
                .map(res=>res.json());
            }
}
