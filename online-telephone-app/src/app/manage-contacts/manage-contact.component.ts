import { Component, OnInit } from '@angular/core';
import { ContactSevice } from '../services/contact.service';
import { ContactModel } from '../models/contactModel';
import { Router } from '@angular/router';

@Component({
    selector: 'manage-contact',
    templateUrl: './manage-contact.component.html',
    styleUrls: ['./manage-contact.component.scss']
})
export class ManageContactComponent implements OnInit {
    contactsData: ContactModel[] = [];
    selectedContact: ContactModel;

    constructor(private contactService: ContactSevice, private router: Router) {

    }

    ngOnInit(): void {
        this.contactsData = this.contactService.getContacts();
    }

    routeToAddContact(): void {
        this.router.navigate(['/add-contact']);
    }

    callback(event: ContactModel): void {
        this.selectedContact = event;

    }
}