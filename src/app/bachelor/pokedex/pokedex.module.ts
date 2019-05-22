import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokedexRoutingModule} from './pokedex-routing.module';
import {PokedexServiceModule} from './pokedex-service.module';
import {PokedexComponent} from './containers/pokedex/pokedex.component';
import {MissionDisplayComponent} from './components/mission-display/mission-display.component';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PokedexServiceModule
  ],
  declarations: [
    PokedexComponent,
    MissionDisplayComponent
  ],
})
export class PokedexModule {
}
