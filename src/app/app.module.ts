import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './containers/app/app.component';
import {AuthModule} from './auth/auth.module';
import {BachelorModule} from './bachelor/bachelor.module';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppControlsComponent} from './components/app-controls/app-controls.component';
import {AppScreenComponent} from './components/app-screen/app-screen.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppControlsComponent,
    AppScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BachelorModule,
    environment.production ?
      [] :
      [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
