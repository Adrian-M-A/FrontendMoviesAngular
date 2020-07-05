import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmService } from './movie.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  backendURL="http://localhost:3000/orders/";


  constructor(private HttpClient: HttpClient, private filmService: FilmService) { }

  

  createOrder(order:Order){
    this.HttpClient.post(this.backendURL + "create", order)
    .subscribe(console.log)
  }
}
