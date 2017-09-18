import { Component, OnInit } from '@angular/core';
import { HematologiasService } from '../../services/hematologias.service';

@Component({
  selector: 'app-hematologias',
  templateUrl: './hematologias.component.html'
})
export class HematologiasComponent implements OnInit {

  hematologias:any[] = [];
  loading:boolean = true;

  constructor(private _hematologiasService:HematologiasService) {
    this._hematologiasService.obtenerHematologias()
            .subscribe( data => {
              console.log(data);
              this.hematologias = data;
              this.loading = false;
            } )
    }

  ngOnInit() {
  }

  borrarPaciente(key$:string){
      this._hematologiasService.borrarHematologia(key$)
                .subscribe( respuesta =>{
                    if( respuesta ){
                      console.error(respuesta);
                    }else{
                      //Todo bien
                      delete this.hematologias[key$];
                    }
                 })
  }

}
