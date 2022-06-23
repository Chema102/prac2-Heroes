import { Routes, RouterModule } from "@angular/router";
import { BodyComponent } from "./component/body/body.component";
import { HeroesComponent } from "./component/heroes/heroes.component";
import { AboutComponent } from "./component/about/about.component";
import { HerueComponent } from "./component/herue/herue.component";
import { BuscadorComponent } from "./component/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HerueComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'body' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

