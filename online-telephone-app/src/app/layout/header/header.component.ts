import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadCastService } from '../../services/broadcast.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isUserLogged: boolean = false;
    constructor(private broadCast: BroadCastService, private router: Router) {

    }

    ngOnInit(): void {
        this.broadCast.refreshHeader.subscribe((value: boolean) => {
            this.isUserLogged = value;
        });
    }

    logout(): void {
        this.isUserLogged = false;
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}