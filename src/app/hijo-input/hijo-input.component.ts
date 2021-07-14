import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';


@Component({
  selector: 'app-hijo-input',
  templateUrl: './hijo-input.component.html',
  styleUrls: ['./hijo-input.component.css']
})
export class HijoInputComponent implements OnInit {
  texto: string | undefined;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    //this.servicioComunicacion.enviarTextoObservable.subscribe(texto => {
    //  this.texto=texto;
    //});
  }

  cambioTexto(texto: string) {
    this.servicioComunicacion.enviarTexto(texto);
  }

}
