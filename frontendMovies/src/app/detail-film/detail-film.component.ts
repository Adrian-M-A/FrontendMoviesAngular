import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/movie.service';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  choosenFilm: Film;

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.choosenFilm = this.filmService.getChoosenFilm();
    console.log(this.choosenFilm)
  }

  setChoosenFilm(film:Film){
    this.filmService.setChoosenFilm(film);
  }
}
