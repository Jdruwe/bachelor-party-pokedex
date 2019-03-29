import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokedexRoutingModule} from './pokedex-routing.module';
import {PokedexComponent} from './containers/pokedex/pokedex.component';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  declarations: [
    PokedexComponent
  ]
})
export class PokedexModule {
}
