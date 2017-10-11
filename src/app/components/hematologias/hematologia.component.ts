import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Hematologia } from '../../interfaces/hematologia.interface';
import { HematologiasService } from '../../services/hematologias.service';

@Component({
  selector: 'app-hematologia',
  templateUrl: './hematologia.component.html',
  styles: []
})
export class HematologiaComponent implements OnInit {

hematologia:Hematologia = {
  nombre:"",
  documento:null,
  sexo:"",
  edad:null,
  telefono:null,
  codigo:null,
  atencion:"",
  entrega:"",
  eritrocitaria:"",
  leucocitaria:"",
  plaquetaria:"",
  neutrofilos:null,
  linfocitos:null,
  eosinofilos:null,
  monocitos:null,
  basofilos:null,
  gota:"",
  hemoglobina:null,
  hematocrito:null,
  plaquetas:null,
  reticulocitos:null,
  minutosangria:null,
  segundosangria:null,
  minutocoagulacion:null,
  segundocoagulacion:null,
  sicklemia:"",
  eritrosedimentacion:null
}

nuevo:boolean = false;
id:string;
actualizado:boolean = false;
ingresado:boolean = false;

  constructor(private _hematologiasService:HematologiasService,
              private router: Router,
              private activatedRoute: ActivatedRoute){
      this.activatedRoute.params
      .subscribe( parametros =>{
        this.id = parametros['id']
        if( this.id !== "nuevo" ){
          this._hematologiasService.obtenerHematologia(this.id)
                .subscribe ( hematologia => this.hematologia =hematologia)
        }
      });
   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.hematologia);

    if( this.id == "nuevo" ){
      //insertando
      this.ingresado = true;
      this._hematologiasService.nuevaHematologia( this.hematologia )
            .subscribe( data => {
                this.router.navigate(['/hematologia',data.name])
            },
          error => console.error(error));
    }else{
      //actualizando
      this.actualizado = true;
      this._hematologiasService.actualizarHematologia( this.hematologia,this.id )
            .subscribe( data => {
                console.log(data);
            },
          error => console.error(error));
    }
  }

  agregarNuevo( forma:NgForm ){
      this.router.navigate(['/hematologia','nuevo']);
      forma.reset();
  }
}
