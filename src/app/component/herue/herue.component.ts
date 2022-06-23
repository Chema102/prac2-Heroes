import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: 'app-herue',
  templateUrl: './herue.component.html'
})
export class HerueComponent implements OnInit {
  heroe:any ={};


  constructor(  private _activatedRouter:ActivatedRoute,
                private _heroesService:HeroesService
                ){
    this._activatedRouter.params.subscribe( params =>{

      this.heroe = this._heroesService.getHeroe(params["id"]);


    })
   }

  ngOnInit(): void {
  }

}
