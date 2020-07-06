import { Component, OnInit } from '@angular/core';
import { FilmService } from "../services/movie.service"
@Component({
  selector: 'app-z-generation-collection',
  templateUrl: './z-generation-collection.component.html',
  styleUrls: ['./z-generation-collection.component.scss']
})
export class ZGenerationCollectionComponent implements OnInit {

  showFilms: object;

  constructor(public filmService:FilmService) { }

  ngOnInit(): void {
    // Gets films from 2000 till now
    this.filmService.getZGenerationFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
