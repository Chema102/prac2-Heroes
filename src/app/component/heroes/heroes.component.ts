import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from "../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:heroe[]=[];

  constructor( private _heroesServises: HeroesService ) {

  }

  ngOnInit(): void {
    this.heroes = this._heroesServises.getHeroes();



  }

}
