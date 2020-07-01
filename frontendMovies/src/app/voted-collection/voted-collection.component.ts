import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"
@Component({
  selector: 'app-voted-collection',
  templateUrl: './voted-collection.component.html',
  styleUrls: ['./voted-collection.component.scss']
})
export class VotedCollectionComponent implements OnInit {
  
  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.MovieService.getVotedFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }

}
