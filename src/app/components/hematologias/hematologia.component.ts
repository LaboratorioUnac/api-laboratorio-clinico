import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-hematologia',
  templateUrl: './hematologia.component.html',
  styles: []
})
export class HematologiaComponent implements OnInit {

    pacientes:any[] = [];

  constructor( private _pacientesService:PacientesService) {
      this._pacientesService.obtenerPacientes()
              .subscribe( data => {
                console.log(data);
                this.pacientes = data;
              } )
   }

  ngOnInit() {
  }

}
