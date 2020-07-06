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
  
  private dataOrder: Order;

  constructor(private HttpClient: HttpClient) { }
    // Creates the order
  createOrder(order:Order):Observable<Order>{
    return this.HttpClient.post<Order>(this.backendURL + "create", order)
  }
    // Sets the order here, in the service
  setOrder(order:Order):void{ 
    this.dataOrder = order;
  }

    // Gets the order's information
  getOrder():Order{
    return this.dataOrder;
  }
}
