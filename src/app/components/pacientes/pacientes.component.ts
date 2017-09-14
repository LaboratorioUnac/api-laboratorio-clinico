import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: []
})
export class PacientesComponent implements OnInit {

  pacientes:any[] = [];
  loading:boolean = true;

  constructor( private _pacientesService:PacientesService) {
      this._pacientesService.obtenerPacientes()
              .subscribe( data => {
                console.log(data);
                this.pacientes = data;
                this.loading = false;
              } )
   }

  ngOnInit() {
  }

  borrarPaciente(key$:string){
      this._pacientesService.borrarPaciente(key$)
                .subscribe( respuesta =>{
                    if( respuesta ){
                      console.error(respuesta);
                    }else{
                      //Todo bien
                      delete this.pacientes[key$];
                    }
                 })
  }
}
