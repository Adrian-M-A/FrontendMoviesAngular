import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/movie.service';
import { Film } from '../models/film.model';
import { OrderService } from '../services/order.service';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  choosenFilm: Film;

  constructor(private filmService:FilmService, private orderService: OrderService, private router:Router) { }
    // For getting the details of the film choosed
  ngOnInit(): void {
    this.choosenFilm = this.filmService.getChoosenFilm();
  }
    // For setting the details of the film choosen
  setChoosenFilm(film:Film){
    this.filmService.setChoosenFilm(film);
  }
    // For renting the film
  rentFilm(day:number):void{
    const userData:User = JSON.parse(localStorage.getItem("user"));
   
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + day);

    const order:Order = {
      UserId: userData.id,
      FilmId: this.choosenFilm.id,
      OrderDate: today,
      Devolution: tomorrow,
      Price: 2.9 * day,
      Days: day
    }
  
    this.orderService.createOrder(order)
    .subscribe(
      res => this.orderService.setOrder(res),
      error => console.error(error)
    )
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 50);
  }
}
