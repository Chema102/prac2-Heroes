import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from "./app.routes";

import { HeroesService } from "./component/services/heroes.service";
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HerueComponent } from './component/herue/herue.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { HeroesTarjetaComponent } from './component/heroes-tarjeta/heroes-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    HeroesComponent,
    HerueComponent,
    BuscadorComponent,
    HeroesTarjetaComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
