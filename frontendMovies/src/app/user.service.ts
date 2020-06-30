import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendURL="http://localhost:3000/users/"
  
  constructor(private HttpClient:HttpClient) { }

  userRegister(form:object){
    return this.HttpClient.post(this.backendURL + "signup", form);
  }

  deleteRegister(form:object){
    return this.HttpClient.post(this.backendURL + "drop", form);
  }
}
