import { Component, OnInit } from '@angular/core';
import { FilmService} from '../services/movie.service'
import { Film } from '../models/film.model';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

    showFilms: Film[];

    constructor(public filmService:FilmService) { }

    //Get all the films to show in the billboard
  ngOnInit(){
    this.filmService.getAllFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
