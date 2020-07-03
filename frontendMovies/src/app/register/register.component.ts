import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = {
    Name: "",
    Surnames:"",
    Birthdate:"",
    Document:"",
    Phone:"",
    Email:"",
    Password:"",
    Role:"user"
  };
  Password2:string;

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  sendRegister(){
    console.log(this.userForm)
    this.UserService.userRegister(this.userForm)
    .subscribe({
      next: data => {
        alert ("Usuario registrado correctamente");
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 500);
      },  
      error: error => {
        alert("No puede registrarse con ese Email.");
      }
    });
  }
}
