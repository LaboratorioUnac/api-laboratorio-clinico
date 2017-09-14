import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ExamenesService {

examenesURL:string="https://laboratorioapp-2017.firebaseio.com/examenes.json";
hematologiasURL:string="https://laboratorioapp-2017.firebaseio.com/examenes/Hematologia.json";

  constructor(private http:Http) { }

  obtenerExamenes(  ){
    return this.http.get(this.examenesURL)
        .map(res=>res.json());
  }

}
