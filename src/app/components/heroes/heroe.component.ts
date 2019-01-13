import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _heroesService: HeroesService,
              private router: Router) {}

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    this._heroesService.nuevoHeroe(this.heroe)
    .subscribe( (data: any) => {
      console.log(data);
      this.router.navigate(['/heroe', data.name]);
    },
    error => console.error(error));
  }

}
