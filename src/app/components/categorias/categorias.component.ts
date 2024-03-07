import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  public arg: any = 0;

  handleChange(){

    this.arg = 5

  }

  leerDatodelHijo(dato: any){
    console.log("[Mostrando dato del hijo]", dato)
  }

}
