import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokedexRoutingModule} from './pokedex-routing.module';
import {PokedexComponent} from './containers/pokedex/pokedex.component';
import {MissionsQuery, MissionsService, MissionsStore} from './state';
import { MissionDisplayComponent } from './components/mission-display/mission-display.component';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  declarations: [
    PokedexComponent,
    MissionDisplayComponent
  ],
  providers: [
    MissionsStore,
    MissionsQuery,
    MissionsService
  ]
})
export class PokedexModule {
}
