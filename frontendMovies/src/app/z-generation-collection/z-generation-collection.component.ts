import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"
@Component({
  selector: 'app-z-generation-collection',
  templateUrl: './z-generation-collection.component.html',
  styleUrls: ['./z-generation-collection.component.scss']
})
export class ZGenerationCollectionComponent implements OnInit {

  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getZGenerationFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }

}
