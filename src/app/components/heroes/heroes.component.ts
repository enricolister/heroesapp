import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor(private _heroesService: HeroesService) { 
    this._heroesService.getHeroes()
      .subscribe( (heroes : any) => {
        for ( let key$ in heroes) {

            

            setTimeout( () => {
              this.heroes = heroes;
              this.loading = false;
            }, 1000);

            /* if (heroes[key$] !== null) {
              let h = heroes[key$];
              h.key$ = key$;
              this.heroes.push( heroes[key$]);
            } */
        }
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
        delete this.heroes[key$];

      }
      
    })
  }

}
