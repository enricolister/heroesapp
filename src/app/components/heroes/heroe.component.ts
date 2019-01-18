import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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
                  //console.log(params);
                  this.id = params.id;
                  if (this.id !== 'nuevo') {
                    this._heroesService.getHeroe(this.id)
                      .subscribe(heroe => this.heroe = heroe)
                  }
                });
              }

  ngOnInit() {
    if(this.router.url === '/heroe/nuevo'){
      this.nuevo = true;
    }
  }

  guardar() {

    if (this.id === "nuevo") {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe( (data: any) => {
      //console.log(data);
      this.router.navigate(['/heroe', data.name]);
      },
      error => console.error(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
      .subscribe( (data: any) => {
      //console.log(data);
      },
      error => console.error(error));
    }

  }

  agregarNuevo(form: NgForm) {
    this.router.navigate(['/heroe','nuevo']);
    this.nuevo = true;
    form.reset({
      casa: "Marvel"
    });
  }

}
