
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from './../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  firebaseURL: string = "https://heroesapp-a8250.firebaseio.com/heroes.json";
  heroePutURL: string = "https://heroesapp-a8250.firebaseio.com/heroes/";

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

  actualizarHeroe(heroe: Heroe, key$:string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let URL = `${this.heroePutURL}/${key$}.json`;

    return this.http.put(URL, body, {headers}).pipe(
      map( res => {
        return res;
      })
    );
  }

  getHeroe(key$: string) {
    let url = `${this.heroePutURL}/${key$}.json`;
    return this.http.get(url).pipe(
      map( (res: Heroe) => {
        return res;
      })
    )
  }

  getHeroes() {
    return this.http.get(this.firebaseURL).pipe(
      map( (res) => {
        return res;
      })
    )
  }

  borrarHeroe(key$: string) {
    let url = `${ this.heroePutURL}/${ key$}.json`;
    return this.http.delete(url).pipe(
      map( (res) => {
        return res;
      })
    )

  }
}
