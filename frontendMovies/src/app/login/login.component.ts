import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Credentials } from '../interfaces/credentials';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  sendLogin(loginForm: NgForm):void{
    if (loginForm.valid){
      const credentials: Credentials = loginForm.value;
      this.userService.loginUser(credentials)
        .subscribe(res => {
          localStorage.setItem('authToken', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.userService.setUser(res.user);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500);
        }, error => alert("Email o contraseña mal introducidos.")
        );
    }
  }
}
