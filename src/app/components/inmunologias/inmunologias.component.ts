import { Component, OnInit } from '@angular/core';
import { InmunologiasService } from '../../services/inmunologias.service';

@Component({
  selector: 'app-inmunologias',
  templateUrl: './inmunologias.component.html',
  styles: []
})
export class InmunologiasComponent implements OnInit {
  inmunologias:any[] = [];
  loading:boolean = true;

  constructor(private _inmunologiasService:InmunologiasService) {
    this._inmunologiasService.obtenerInmunologias()
            .subscribe( data => {
              console.log(data);
              this.inmunologias = data;
              this.loading = false;
            } )
    }

  ngOnInit() {
  }

  borrarInmunologia(key$:string){
      this._inmunologiasService.borrarInmunologia(key$)
                .subscribe( respuesta =>{
                    if( respuesta ){
                      console.error(respuesta);
                    }else{
                      //Todo bien
                      delete this.inmunologias[key$];
                    }
                 })
  }
}
