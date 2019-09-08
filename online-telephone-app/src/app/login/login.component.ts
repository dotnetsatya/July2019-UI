import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginModel: UserModel;
  constructor(private userService: UserService, private router: Router) {


  }

  ngOnInit() {
    this.loginModel = new UserModel();
  }


  validLogin(): void {
    let isValid = this.userService.validateLogin(this.loginModel.username, this.loginModel.password);
    if (isValid) {
      sessionStorage.setItem('loggedUsername', this.loginModel.username);
      this.router.navigate(['/welcome']);
    } else {
      alert("Invali Credentails");
    }
  }
}
