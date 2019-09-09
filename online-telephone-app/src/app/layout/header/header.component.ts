import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isUserLogged: boolean = false;
    constructor(private router: Router) {

    }

    ngOnInit(): void {
        if (sessionStorage.getItem('loggedUsername') != null && sessionStorage.getItem('loggedUsername') != undefined) {
            this.isUserLogged = true;
        }
    }

    logout(): void {
        this.isUserLogged = false;
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}