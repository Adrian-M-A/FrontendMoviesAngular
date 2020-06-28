import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendURL="http://localhost:3000/users/"

  constructor(private HttpClient:HttpClient) { }

  userRegister(form:object):Observable<any>{
    return this.HttpClient.post(this.backendURL + "signup", form);
  }
}
