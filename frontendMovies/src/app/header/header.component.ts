import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
  }
  searchTitle(event){//en esta funcion guardamos lo que tecleamos por el input referenciado con el titulo y la url de la pelicula para compararlos
    if(event.target.value.length >= 2){//le decimos que se active cuando hayamos tecleado tres o mas teclas
      this.MovieService.searchFilmsTitle(event.target.value)
      .subscribe(res=>this.MovieService.setFilms(res))
      
    }
  }
}
