import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './containers/app/app.component';
import {AuthModule} from './auth/auth.module';
import {BachelorModule} from './bachelor/bachelor.module';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {AppScreenComponent} from './components/app-screen/app-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppScreenComponent
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
