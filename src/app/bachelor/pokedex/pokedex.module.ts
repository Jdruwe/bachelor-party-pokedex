import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokedexRoutingModule} from './pokedex-routing.module';
import {PokedexComponent} from './containers/pokedex/pokedex.component';
import {MissionsQuery, MissionsService, MissionsStore} from './state';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  declarations: [
    PokedexComponent
  ],
  providers: [
    MissionsStore,
    MissionsQuery,
    MissionsService
  ]
})
export class PokedexModule {
}
