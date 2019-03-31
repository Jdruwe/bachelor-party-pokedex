import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/shared/guards/auth.guard';

export const routes: Routes = [
  {path: 'pokedex', canActivate: [AuthGuard], loadChildren: './pokedex/pokedex.module#PokedexModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BachelorRoutingModule {
}
