
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from './../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  firebaseURL: string = "https://heroesapp-a8250.firebaseio.com/heroes.json"

  constructor( private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.firebaseURL, body, {headers}).pipe(
      map( res => {
        return res;
      })
    );
  }
}
