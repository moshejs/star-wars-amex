import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from './character/character.component';
import {CharacterResolver} from './services/character.resolver';
import {ErrorComponent} from './error/error.component';
import {CharactersComponent} from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'characters/:name',
    component: CharacterComponent,
    resolve: {
      character: CharacterResolver
    }
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
