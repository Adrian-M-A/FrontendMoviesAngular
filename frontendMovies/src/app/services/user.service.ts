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
    // For registering an user
  userRegister(form:object):Observable<User>{
    return this.HttpClient.post<User>(this.backendURL + "signup", form);
  }
    // For logging an user
  loginUser(credentials: Credentials):Observable<Login>{
    return this.HttpClient.post<Login>(this.backendURL + "login", credentials)
  }
    // For deleting an user
  deleteRegister(form:object){
    return this.HttpClient.post(this.backendURL + "drop", form);
  }
    // For setting and getting an user in the service
  setUser(user: User): void {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }
    // For logging out user
  logout(): void {
    this.HttpClient.get(this.backendURL + 'logout')
    .subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  }
}
