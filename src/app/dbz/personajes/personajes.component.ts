import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];
  // decorador de propiedad, indica que el arreglo personajes vendrá de la clase padre

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ){}

}
