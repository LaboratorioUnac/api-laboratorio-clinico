import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent implements OnInit {

  mensajes:any[] = [];
  loading:boolean = true;

  constructor(private _mensajesService:MensajesService) {
    this._mensajesService.obtenerMensajes()
            .subscribe( data => {
              console.log(data);
              this.mensajes = data;
              this.loading = false;
            } )
    }

  ngOnInit() {
  }

  borrarMensaje(key$:string){
      this._mensajesService.borrarMensaje(key$)
                .subscribe( respuesta =>{
                    if( respuesta ){
                      console.error(respuesta);
                    }else{
                      //Todo bien
                      delete this.mensajes[key$];
                    }
                 })
  }

}
