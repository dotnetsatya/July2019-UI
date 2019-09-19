import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/userModel';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  selectedUser: UserModel;
  constructor(private userService: UserService) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedUsername') != null && sessionStorage.getItem('loggedUsername') != undefined) {
      this.selectedUser = this.userService.getUserByUsername(sessionStorage.getItem('loggedUsername'));
    }
  }

}
