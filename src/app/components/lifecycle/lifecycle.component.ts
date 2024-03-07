import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, AfterViewInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked {
  
  @Input("nombres") test: string | undefined;
  @Input("apellidos") test2: string | undefined;

  //enviar informacion al padre desde el hijo
  @Output() datoAlPadre: EventEmitter<string> = new EventEmitter<string>();

  /*
  ngOnchanges -> Se llama cuando se detectan cambios en las propiedades de entrada @Input
  ngOnInit -> se llama una vez que el componente ha sido inicializados y todas sus propiedades han sido configuradas
  ngDoCheck -> se llama durante cada detección de cambios, lo que permite realizar acciones personalizadas. 
  ngAfterContentInit -> se llama despues que angular haya proyectado el contenido en el componente.
  ngAfterContentChecked -> se llama despues que angular haya verificado el contenido proyectado en el componente.
  ngAfterViewInit -> se llama despues que angular haya inicializado las vistas del componente y las vistas secundarias (cuando tenemos componentes hijos)
  ngAfterViewChecked -> se llama despues que angular haya verficiado las vistas del componente y las vistas secundarias
  ngOnDestroy -> se llama justo antes de destruir el componente de angular.
   */

  constructor(/* Inyección de dependencias */){
    /* Inicializarlas */
    console.log("Constructor: el primero en ejecutarse antes de todo el ciclo de vida")
  }

  ngOnInit(): void {
    console.log("ngOnInit: ")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit:")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked:")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit:")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked:")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges:")
  }  

  ngDoCheck(): void {
    console.log("ngDoCheck: [Mostrando dato del padre] nombres", this.test)
    console.log("ngDoCheck: [Mostrando dato del padre] apellidos", this.test2);
    this.datoAlPadre.emit("Dato recibido desde el hijo");
  }

}