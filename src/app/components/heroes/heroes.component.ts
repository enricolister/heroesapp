import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService) { 
    this._heroesService.getHeroes()
      .subscribe( (heroes : any) => {
        //console.log(heroes);
        for ( let key$ in heroes) {
            //console.log(heroes[key$]);

            this.heroes = heroes;

            /* if (heroes[key$] !== null) {
              let h = heroes[key$];
              h.key$ = key$;
              this.heroes.push( heroes[key$]);
            } */
        }
        //console.log('This are the heroes: ' + this.heroes);
      })
  }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
    .subscribe(respuesta => {
      if (respuesta) {
        console.error(respuesta);
      } else {
        //todo bien, eliminar el elemento de la vista
        delete this.heroes[key$];

      }
      
    })
  }

}
