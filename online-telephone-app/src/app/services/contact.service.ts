import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contactModel';

@Injectable({
    providedIn: 'root'
})
export class ContactSevice {
    private contacts: ContactModel[] = [];

    constructor() {

    }

    addContact(contactModel: ContactModel): void {
        this.contacts.push(contactModel);
    }

    getContacts(): ContactModel[] {
        return this.contacts;
    }
}