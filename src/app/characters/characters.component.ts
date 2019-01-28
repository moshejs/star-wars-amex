import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {Character} from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = environment.characters;

  constructor() { }

  ngOnInit() {
  }

}
