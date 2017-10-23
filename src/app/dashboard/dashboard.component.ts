import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero-service/hero';
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit { 

  constructor(private heroService: HeroService) {}

  title = 'Top Heroes';
  heroes: Hero[];

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); //for demo purposes
    return Promise.reject(error.message || error);
  }
}