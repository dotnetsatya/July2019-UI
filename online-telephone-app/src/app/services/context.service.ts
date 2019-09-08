import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContextService {
    public counter: number;

    constructor() {
        this.counter = 0;
    }
}