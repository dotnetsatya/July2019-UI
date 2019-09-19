import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/userModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUser: UserModel;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.newUser = new UserModel();
  }


  saveUser(): void {
    this.userService.addUser(this.newUser);
    this.router.navigate(['/login']);
  }
}
