import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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


  constructor(private UserService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  sendLogin(){
    this.UserService.loginUser(this.loginForm)
    .subscribe({
      next: data => {
        console.log(data),
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      },
      error: error => alert("No ha sido posible encontrarle, revise sus datos.")
    })
  }
}
