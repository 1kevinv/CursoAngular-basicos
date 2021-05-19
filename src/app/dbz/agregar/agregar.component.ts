import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  // @Input() personajes: Personaje[] = [];
  // decorador de propiedad, indica que el arreglo personajes vendrá de la clase padre

  //Input emite un evento de padre a hijo
  //Output emite un evento de hijo a padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ){

  }
  //EventEmitter le indica que va emitir un evento
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    console.log( this.nuevo );
    // this.onNuevoPersonaje.emit( this.nuevo )
    // this.personajes.push(this.nuevo)
    this.dbzService.agregarPersonaje( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }

    // console.log(this.personajes)
  }
}
