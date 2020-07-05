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

    //Al inicio del componente llama al servicio para realizar la función getFilms y conectar con Endpoint que ofrece todas las películas
  ngOnInit(){
    this.filmService.getAllFilms()
    .subscribe(
      res => this.showFilms = res,
      error => console.error(error)
    )
  }

}
