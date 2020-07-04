import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-popular-collection',
  templateUrl: './popular-collection.component.html',
  styleUrls: ['./popular-collection.component.scss']
})
export class PopularCollectionComponent implements OnInit {

  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getPopularFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }

}
