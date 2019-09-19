import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    isModalOpen: boolean = true;

    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
    constructor() {

    }

    ngOnInit(): void {

    }

    onCloseModal(): void {
        this.isModalOpen = false;
        this.onClose.emit();
    }

    onSaveChanges(): void {
        this.isModalOpen = false;
        this.onSave.emit();
    }
}