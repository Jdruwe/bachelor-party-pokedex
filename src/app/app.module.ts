import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './containers/app/app.component';
import {AuthModule} from './auth/auth.module';
import {BachelorModule} from './bachelor/bachelor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BachelorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
