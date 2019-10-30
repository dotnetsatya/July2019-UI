import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BroadCastService {
    public isLoading: BehaviorSubject<boolean>;
    public refreshHeader: BehaviorSubject<boolean>;
    constructor() {
        this.isLoading = new BehaviorSubject<boolean>(false);
        this.refreshHeader = new BehaviorSubject<boolean>(false);
    }

    toggleSpinner(value: boolean) {
        this.isLoading.next(value);
    }

    refreshUserLogin(value: boolean) {
        this.refreshHeader.next(value);
    }

}