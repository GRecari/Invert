import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hijo-output',
  templateUrl: './hijo-output.component.html',
  styleUrls: ['./hijo-output.component.css']
})
export class HijoOutputComponent implements OnInit {
  texto: string | undefined;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
   // this.servicioComunicacion.enviarTextoObservable.subscribe(texto => {
  //    this.texto=texto;
  //  });
  }

  cambioTexto(texto: string) {
    this.servicioComunicacion.enviarTexto(texto);
  }

  invertir(){
    let auxTexto= this.servicioComunicacion.texto;

    if(typeof auxTexto === "string"){

      this.texto = "";
      let iter=auxTexto.length -1;

      while(iter >= 0){
        this.texto=this.texto + auxTexto.charAt(iter);
        iter--;
      }

      this.cambioTexto(this.texto);
    }


  }

  borrar(){
    this.texto = this.servicioComunicacion.texto?.split(" ").join("");
  }

}
