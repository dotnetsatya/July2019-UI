import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contactModel';
import { AddressModel } from '../models/addressModel';

@Injectable({
    providedIn: 'root'
})
export class ContactSevice {
    private contacts: ContactModel[] = [];

    constructor() {
        let newContact = new ContactModel();
        newContact.id = 1;
        newContact.firstName = "satya";
        newContact.lastName  = "palakurla";
        newContact.address = new AddressModel();
        newContact.address.street = "RI";
        newContact.address.city = "RI";
        newContact.address.state = "RI";
        newContact.address.zip = "5634";
        

        this.contacts.push(newContact);
    }

    addContact(contactModel: ContactModel): void {
        contactModel.id = this.contacts.length + 1;
        this.contacts.push(contactModel);
    }

    getContacts(): ContactModel[] {
        return this.contacts;
    }

    getContactById(id: number): ContactModel {
        return this.contacts.filter(c => c.id == id)[0];
    }
}