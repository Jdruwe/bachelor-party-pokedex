import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PokedexComponent]
})
export class AppModule {
}
