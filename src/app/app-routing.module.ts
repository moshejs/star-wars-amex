import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from './characters/characters.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: 'characters'
  },
  {
    path: 'characters/:name',
    component: CharactersComponent,
    resolve: {
      character: CharacterResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
