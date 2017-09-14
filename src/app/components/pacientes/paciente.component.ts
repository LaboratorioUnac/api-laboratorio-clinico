import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../interfaces/paciente.interface';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: []
})
export class PacienteComponent implements OnInit {

  paciente:Paciente ={
      nombre:"",
      documento: null,
      telefono: null
  }

nuevo:boolean = false;
actualizado:boolean = false;
ingresado:boolean = false;
id:string;

  constructor( private _pacientesService: PacientesService ,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params
      .subscribe( parametros =>{
        this.id = parametros['id']
        if( this.id !== "nuevo" ){
          this._pacientesService.obtenerPaciente(this.id)
                .subscribe ( paciente => this.paciente = paciente)
        }
      });
}

  ngOnInit() {
  }

  guardar(){
    console.log(this.paciente);

    if( this.id == "nuevo" ){
      //insertando
      this.ingresado = true;
      this._pacientesService.nuevoPaciente( this.paciente )
            .subscribe( data => {
                this.router.navigate(['/paciente',data.name])
            },
          error => console.error(error));
    }else{
      //actualizando
      this.actualizado = true;
      this._pacientesService.actualizarPaciente( this.paciente,this.id )
            .subscribe( data => {
                console.log(data);
            },
          error => console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
      this.router.navigate(['/paciente','nuevo']);
      forma.reset();
  }

}
