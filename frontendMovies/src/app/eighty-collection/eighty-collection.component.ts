import { Component, OnInit } from '@angular/core';
import { FilmService} from '../services/movie.service';

@Component({
  selector: 'app-eighty-collection',
  templateUrl: './eighty-collection.component.html',
  styleUrls: ['./eighty-collection.component.scss']
})
export class EightyCollectionComponent implements OnInit {

  showFilms: object;

  constructor(public filmService:FilmService) { }

  ngOnInit(): void {
    this.filmService.getEigthyFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }
}
