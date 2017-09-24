import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hematologia } from '../interfaces/hematologia.interface';
import 'rxjs/Rx';

@Injectable()
export class HematologiasService {

hematologiasURL:string ="https://laboratorioclinico-eps.firebaseio.com/hematologias.json";
hematologiaURL:string="https://laboratorioclinico-eps.firebaseio.com/hematologias/";
  constructor( private http:Http ) {}

      nuevaHematologia( hematologia:Hematologia ){

          let body = JSON.stringify( hematologia );
          let headers = new Headers ({
            'Content-Type':'application/json'
          });

          return this.http.post( this.hematologiasURL, body, { headers } )
              .map( res => {
                console.log(res.json());
                return res.json();
              })
        }

        actualizarHematologia( hematologia:Hematologia, key$:string){

            let body = JSON.stringify( hematologia );
            let headers = new Headers ({
              'Content-Type':'application/json'
            });

            let url = `${ this.hematologiaURL }/${ key$ }.json`;

            return this.http.put( url, body, { headers } )
                .map( res => {
                  console.log(res.json());
                  return res.json();
                })
          }

          obtenerHematologia( key$:string ){
            let url = `${ this.hematologiaURL }/${ key$ }.json`;
            return this.http.get(url)
            .map(res=>res.json());
          }

          obtenerHematologias(  ){
            return this.http.get(this.hematologiasURL)
                .map(res=>res.json());
          }

          borrarHematologia(key$ : string){
            let url = `${ this.hematologiaURL }/${ key$ }.json`;
            return this.http.delete( url )
              .map(res=>res.json());
          }
}
