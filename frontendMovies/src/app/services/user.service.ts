import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';
import { Credentials } from '../interfaces/credentials';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendURL="http://localhost:3000/users/"
  private user: User;
  
  constructor(private HttpClient:HttpClient) { }

  userRegister(form:object){
    return this.HttpClient.post(this.backendURL + "signup", form);
  }

  loginUser(credentials: Credentials):Observable<Login>{
    return this.HttpClient.post<Login>(this.backendURL + "login", credentials)
  }

  deleteRegister(form:object){
    return this.HttpClient.post(this.backendURL + "drop", form);
  }

  setUser(user: User): void {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }
}
