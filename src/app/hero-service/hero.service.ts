import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http)  {}

     getHeroes(): Promise<Hero[]> {
         return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                     .catch(this.handleError);
     }

     private handleError(error: any): Promise<any> {
         console.error('An error ovvurred', error); //for demo purposes
         return Promise.reject(error.message || error);
     }

     getHero(id: Number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
      }

     getHeroesSlowly(): Promise<Hero[]> {
         return new Promise(resolve => {
             setTimeout( () => resolve(this.getHeroes()), 2000);
         });
     }
 }