import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }
  
  nuevo: boolean = false;
  id: string;

  constructor(private _heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params.subscribe( params => {
                  console.log(params);
                  this.id = params.id;
                });
              }

  ngOnInit() {
  }

  guardar() {
    //console.log(this.heroe);

    if (this.id === "nuevo") {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe( (data: any) => {
      console.log(data);
      this.router.navigate(['/heroe', data.name]);
      },
      error => console.error(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
      .subscribe( (data: any) => {
      console.log(data);
      },
      error => console.error(error));
    }

  }

}
