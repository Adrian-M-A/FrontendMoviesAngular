import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { FilmService } from '../services/movie.service';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  order: Order;
  film: Film;

  constructor(private userSevice:UserService, private orderService: OrderService, private filmService: FilmService) { }

  ngOnInit(): void {
    // Initialize variables when init to show the profile and order state
    this.user = this.userSevice.getUser();
    this.order = this.orderService.getOrder();
    this.film = this.filmService.getChoosenFilm();
    
  }
    // Sends notifications about user
  sendModification(profileForm: NgForm){
    const dataUpdate = profileForm.value;
    this.userSevice.modifyUser(dataUpdate)
    .subscribe({
      next: data => this.user = data
    })
    console.log(this.user);
  }

}
