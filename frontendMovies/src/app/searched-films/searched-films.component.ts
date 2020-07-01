import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-searched-films',
  templateUrl: './searched-films.component.html',
  styleUrls: ['./searched-films.component.scss']
})
export class SearchedFilmsComponent implements OnInit {

  constructor(public MovieService:MovieService) { }

  ngOnInit() {}
}
