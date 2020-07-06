import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/movie.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private filmService: FilmService, private userService:UserService) { }

  ngOnInit(): void {
  }
    // The function that searches the film looked for in the header's input
  searchTitle(event){
    if(event.target.value.length >= 2){
      this.filmService.searchFilmsTitle(event.target.value)
      .subscribe(res=>this.filmService.setFilms(res))
    }
  }
    // Gets user from the service
  getUser():User {
    return this.userService.getUser();
  }
    // Logs out the user's data 
  logout(): void {
    this.userService.logout();
  }

}
