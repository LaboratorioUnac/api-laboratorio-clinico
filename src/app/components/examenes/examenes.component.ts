import { Component, OnInit } from '@angular/core';
import { ExamenesService } from '../../services/examenes.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styles: []
})
export class ExamenesComponent implements OnInit {

  examenes:any[] = [];
  loading:boolean = true;

  constructor( private _examenesService:ExamenesService) {
      this._examenesService.obtenerExamenes()
              .subscribe( data => {
                console.log(data);
                this.examenes = data;
                this.loading = false;
              } )
   }
  ngOnInit() {
  }

}
