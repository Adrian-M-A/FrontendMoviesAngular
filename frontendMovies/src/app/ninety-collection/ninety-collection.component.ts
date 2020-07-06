import { Component, OnInit } from '@angular/core';
import { FilmService} from '../services/movie.service'

@Component({
  selector: 'app-ninety-collection',
  templateUrl: './ninety-collection.component.html',
  styleUrls: ['./ninety-collection.component.scss']
})
export class NinetyCollectionComponent implements OnInit {
  
  showFilms: object;

  constructor(public filmService:FilmService) { }
  // Gets films form 90s
  ngOnInit(): void {
    this.filmService.getNinetyFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
