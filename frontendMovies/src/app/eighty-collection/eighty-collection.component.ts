import { Component, OnInit } from '@angular/core';
import { MovieService} from '../services/movie.service';

@Component({
  selector: 'app-eighty-collection',
  templateUrl: './eighty-collection.component.html',
  styleUrls: ['./eighty-collection.component.scss']
})
export class EightyCollectionComponent implements OnInit {

  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getEigthyFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }
}
