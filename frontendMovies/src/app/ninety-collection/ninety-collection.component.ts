import { Component, OnInit } from '@angular/core';
import { MovieService} from '../services/movie.service'

@Component({
  selector: 'app-ninety-collection',
  templateUrl: './ninety-collection.component.html',
  styleUrls: ['./ninety-collection.component.scss']
})
export class NinetyCollectionComponent implements OnInit {
  
  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getNinetyFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }

}
