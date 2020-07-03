import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm={
    Email:"",
    Password:""
  };


  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  sendLogin(){
    this.UserService.loginUser(this.loginForm)
    .subscribe({
      next: data => console.log(data),
      error: error => alert("No ha sido posible encontrarle, revise sus datos.")
    })
  }
}
