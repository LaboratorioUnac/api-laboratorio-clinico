import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Mensaje } from '../../interfaces/mensaje.interface';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  mensaje:Mensaje = {
    nombre:"",
    asunto:"",
    mail:"",
    informacion:""
  }

  ingresado:boolean = false;

    constructor(private _mensajesService:MensajesService, private router: Router){
     }

    ngOnInit() {
    }

    guardar(){
      console.log(this.mensaje);
      this._mensajesService.nuevoMensaje( this.mensaje )
              .subscribe( data =>{
                  this.ingresado=true;
              } )
    }
}
