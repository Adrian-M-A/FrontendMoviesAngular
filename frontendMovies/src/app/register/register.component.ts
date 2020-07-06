import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  password2:string = "";

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  sendRegister(registerForm:NgForm):void{

    this.UserService.userRegister(registerForm.value)
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
