import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Capitán América', 'Ironman', 'Hulk', 'Thor', 'Gokú'];
  heroeBorrado: string = '';

  borrarHeroe():void {
    console.log("borrando...");
    this.heroeBorrado = this.heroes.pop() || '';

  }
}
