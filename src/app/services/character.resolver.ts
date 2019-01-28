import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {CharacterService} from './character.service';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CharacterResolver implements Resolve<any> {

  constructor(private router: Router,
              private characterService: CharacterService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const name  = route.paramMap.get('name');
    const url = environment.characters
      .filter(character => character.name === name)[0].url;

    return this.characterService.getCharacterByUrl(url)
      .pipe(catchError(e => this.router.navigateByUrl('error')));
  }
}
