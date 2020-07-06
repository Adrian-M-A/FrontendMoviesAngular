import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/movie.service';

@Component({
  selector: 'app-popular-collection',
  templateUrl: './popular-collection.component.html',
  styleUrls: ['./popular-collection.component.scss']
})
export class PopularCollectionComponent implements OnInit {

  showFilms: object;

  constructor(public filmService:FilmService) { }
  // Gets popular films
  ngOnInit(): void {
    this.filmService.getPopularFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
