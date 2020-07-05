import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userSevice:UserService) { }

  ngOnInit(): void {
    this.user = this.userSevice.getUser();
  }

  sendModification(profileForm: NgForm){
    const dataUpdate = profileForm.value;
    this.userSevice.modifyUser(dataUpdate)
    .subscribe({
      next: data => this.user = data
    })
    console.log(this.user);
  }

}
