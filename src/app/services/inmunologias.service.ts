import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Inmunologia } from '../interfaces/inmunologia.interface';
import 'rxjs/Rx';

@Injectable()
export class InmunologiasService {

  inmunologiasURL:string ="https://laboratorioclinico-eps.firebaseio.com/inmunologias.json";
  inmunologiaURL:string="https://laboratorioclinico-eps.firebaseio.com/inmunologias/";
    constructor( private http:Http ) {}

        nuevaInmunologia( inmunologia:Inmunologia ){

            let body = JSON.stringify( inmunologia );
            let headers = new Headers ({
              'Content-Type':'application/json'
            });

            return this.http.post( this.inmunologiasURL, body, { headers } )
                .map( res => {
                  console.log(res.json());
                  return res.json();
                })
          }

          actualizarInmunologia( inmunologia:Inmunologia, key$:string){

              let body = JSON.stringify( inmunologia );
              let headers = new Headers ({
                'Content-Type':'application/json'
              });

              let url = `${ this.inmunologiaURL }/${ key$ }.json`;

              return this.http.put( url, body, { headers } )
                  .map( res => {
                    console.log(res.json());
                    return res.json();
                  })
            }

            obtenerInmunologia( key$:string ){
              let url = `${ this.inmunologiaURL }/${ key$ }.json`;
              return this.http.get(url)
              .map(res=>res.json());
            }

            obtenerInmunologias(  ){
              return this.http.get(this.inmunologiasURL)
                  .map(res=>res.json());
            }

            borrarInmunologia(key$ : string){
              let url = `${ this.inmunologiaURL }/${ key$ }.json`;
              return this.http.delete( url )
                .map(res=>res.json());
            }
    }
