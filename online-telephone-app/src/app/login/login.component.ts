import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/userModel';
import { Router } from '@angular/router';
import { BroadCastService } from '../services/broadcast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginModel: UserModel;
  isInvalidUser: boolean = false;

  constructor(private broadCast: BroadCastService, private userService: UserService, private router: Router) {


  }

  ngOnInit() {
    this.loginModel = new UserModel();
  }


  validLogin(): void {
    let isValid = this.userService.validateLogin(this.loginModel.username, this.loginModel.password);
    if (isValid) {
      this.isInvalidUser = false;
      sessionStorage.setItem('loggedUsername', this.loginModel.username);
      this.broadCast.refreshUserLogin(true);
      this.router.navigate(['/welcome']);
    } else {
      this.isInvalidUser = true;
    }
  }
}
