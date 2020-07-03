import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

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
  messageWrong: string = "No puede registrarse con ese Email";
  messageRight: string = "Se ha registrado con éxito";
  notRegister="";

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  sendRegister(){
    this.UserService.userRegister(this.userForm)
    .subscribe({
      next: data => {
        alert ("Usuario registrado correctamente");
        console.log(data);
      },  
      error: error => {
        alert("No puede registrarse con ese Email.");
        console.log(error);
      }
    });
  }
}
