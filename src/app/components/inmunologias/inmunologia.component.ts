import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Inmunologia } from '../../interfaces/inmunologia.interface';
import { InmunologiasService } from '../../services/inmunologias.service';

@Component({
  selector: 'app-inmunologia',
  templateUrl: './inmunologia.component.html',
  styles: []
})
export class InmunologiaComponent implements OnInit {

  inmunologia:Inmunologia = {
    nombre:"",
    documento:null,
    telefono:null,
    codigo:null,
    atencion:"",
    entrega:"",
    reumatoideo:null,
    proteinac:null,
    dengueg:"",
    denguem:"",
    hbs:"",
    hvc:"",
    serologia:"",
    vih1:"",
    vih2:"",
    psa:"",
    toxoplasmag:"",
    toxoplasmam:"",
    coombs:"",
    embarazo:"",
    grupo:"",
    rh:"",
    proteinac2:"",
  }

  nuevo:boolean = false;
  id:string;
  actualizado:boolean = false;
  ingresado:boolean = false;

    constructor(private _inmunologiasService:InmunologiasService,
                private router: Router,
                private activatedRoute: ActivatedRoute){
        this.activatedRoute.params
        .subscribe( parametros =>{
          this.id = parametros['id']
          if( this.id !== "nuevo" ){
            this._inmunologiasService.obtenerInmunologia(this.id)
                  .subscribe ( hematologia => this.inmunologia = hematologia)
          }
        });
     }

    ngOnInit() {
    }

    guardar(){
      console.log(this.inmunologia);

      if( this.id == "nuevo" ){
        //insertando
        this.ingresado = true;
        this._inmunologiasService.nuevaInmunologia( this.inmunologia )
              .subscribe( data => {
                  this.router.navigate(['/inmunologia',data.name])
              },
            error => console.error(error));
      }else{
        //actualizando
        this.actualizado = true;
        this._inmunologiasService.actualizarInmunologia( this.inmunologia,this.id )
              .subscribe( data => {
                  console.log(data);
              },
            error => console.error(error));
      }
    }

    agregarNuevo( forma:NgForm ){
        this.router.navigate(['/inmunologia','nuevo']);
        forma.reset();
    }
}
