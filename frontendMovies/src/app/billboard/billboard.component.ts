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

  ngOnInit(){
    this.MovieService.getFilms()
    .subscribe(
      res => this.showMovies = res["results"],
      error => console.error(error),
      () => console.log("pelis ", this.showMovies)
    )
  }

}
