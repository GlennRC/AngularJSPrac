import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero-service/hero';
import { HeroService } from '../hero-service/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
   
    constructor(private heroService: HeroService) { }
   
    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
   
    ngOnInit(): void {
      this.getHeroes();
    }
   
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }