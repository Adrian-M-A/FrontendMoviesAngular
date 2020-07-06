import { Component, OnInit } from '@angular/core';
import { FilmService } from "../services/movie.service"
@Component({
  selector: 'app-voted-collection',
  templateUrl: './voted-collection.component.html',
  styleUrls: ['./voted-collection.component.scss']
})
export class VotedCollectionComponent implements OnInit {
  
  showFilms: object;

  constructor(public filmService:FilmService) { }

  ngOnInit(): void {
        // Gets voted films
    this.filmService.getVotedFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
