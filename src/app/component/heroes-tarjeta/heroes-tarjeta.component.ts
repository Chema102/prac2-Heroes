import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent implements OnInit {
  heroe:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
