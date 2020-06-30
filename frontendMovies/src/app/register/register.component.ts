import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

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
  message="";

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  sendRegister(){
    let error = this.validate();
    if (error) {
      alert(error);
      return;
    }
    this.UserService.userRegister(this.userForm)
    .subscribe({
      next: data => alert ("Usuario registrado correctamente"),
      error: error => console.log(error)
    });    
  }

  validate(): string {
    let error = "";
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    if (this.userForm.Password == this.Password2) {
      if (this.userForm.Password.length < 8) {
        error += " The password must be longer than 8 characters. ";
      }
      //password contains symbol
      //password contains upper and lowercase
    } else {
      error += "The passwords don't match.";
    }
    if (!this.userForm.Email.match(regexp)) {
      error += "The email have an incorrect format.";
    }
    return error;
  }
}
