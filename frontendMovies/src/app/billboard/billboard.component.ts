import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service'

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

    showMovies: object;

    constructor(public MovieService:MovieService) { }

    //Al inicio del componente llama al servicio para realizar la función getFilms y conectar con Endpoint que ofrece todas las películas
  ngOnInit(){
    this.MovieService.getFilms()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error)
    )
  }

}
