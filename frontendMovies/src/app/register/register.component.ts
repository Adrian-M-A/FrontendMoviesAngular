import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from '@angular/router';

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
    Role:""
  };
  message="";

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  sendRegister(){
    this.UserService.userRegister(this.userForm)
    .subscribe(
      (res) => { 
        if(res.Name){
          this.message = "Bienvenido " + res.Name + ", ya estás registrado.";
          setTimeout(() => {
            //once register process is done, we wait with a delay and we go back to the display page.
            this.router.navigate(['/display'])
          }, 2500);
        }else{
          this.message = res.message;
        }
      },

      error => console.error(error)
    )
  }


}
