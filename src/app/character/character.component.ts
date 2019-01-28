import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../models/character.model';
import {Film} from '../models/film.model';

import {FilmService} from '../services/film.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: Character;
  films: Film[] = [];
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => {
        this.character = <Character>data.character;
        this.films = []; // Resets films when a new character is chosen
        this.character.films.forEach((film: string) =>
          this.filmService.getFilmByUrl(film)
            .subscribe(( resolvedFilm: Film) => {
              this.films.push(resolvedFilm);
              this.loading = (this.films.length !== this.character.films.length);
            }));
      });
  }

}
