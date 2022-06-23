import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string="";

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
    ) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( param =>{
      this.termino = param["termino"]
      this.heroes = this._heroesService.buscarH( param["termino"] )





    })
  }



}
