import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userData: UserModel[] = [];

    constructor() {
        let userModel = new UserModel();
        userModel.id = 1;
        userModel.username = "admin";
        userModel.password = "admin";
        userModel.email = "Admin@gmail.com";
        this.userData.push(userModel);
    }

    validateLogin(username: string, password: string): boolean {
        var results = this.userData.filter(user => user.username == username && user.password == password);
        if (results != null && results.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    addUser(userModel: UserModel): number {
        let newId = this.userData.length + 1;
        userModel.id = newId;
        this.userData.push(userModel);
        return newId;
    }

    getUserByUsername(username: string): UserModel {
        return this.userData.filter(user => user.username == username)[0];
    }
}