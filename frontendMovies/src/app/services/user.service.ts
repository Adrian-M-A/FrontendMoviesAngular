import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendURL="http://localhost:3000/users/"
  
  constructor(private HttpClient:HttpClient) { }

  userRegister(form:object){
    return this.HttpClient.post(this.backendURL + "signup", form);
  }

  loginUser(log:object){
    return this.HttpClient.post(this.backendURL + "login", log)
  }

  deleteRegister(form:object){
    return this.HttpClient.post(this.backendURL + "drop", form);
  }
}
