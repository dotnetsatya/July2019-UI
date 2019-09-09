import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../models/addressModel';
import { ContactModel } from '../models/contactModel';
import { UserModel } from '../models/userModel';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


import { ContactSevice } from '../services/contact.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

    newContact: ContactModel;
    myContacts: ContactModel[] = [];
    contactForm: FormGroup;
    activeUser: UserModel;

    constructor(private fb: FormBuilder, private contactService: ContactSevice, private userService: UserService) {

    }

    initForm(): void {
        this.newContact = new ContactModel();
        this.newContact.address = new AddressModel();
    }
    ngOnInit(): void {
        this.initForm();

        if (sessionStorage.getItem('loggedUsername') != null && sessionStorage.getItem('loggedUsername') != undefined) {
            this.activeUser = this.userService.getUserByUsername(sessionStorage.getItem('loggedUsername'));
        }

        this.contactForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: this.fb.group({
                street: ['', Validators.required],
                city: [''],
                state: [''],
                zip: ['', Validators.required]
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ])
        });


        this.myContacts = this.contactService.getContacts();
    }

    get aliases() {
        return this.contactForm.get('aliases') as FormArray;
    }


    addAlias() {
        this.aliases.push(this.fb.control(''));
    }

    onSubmit() {
        if (this.contactForm.valid) {
            var formData = this.contactForm.value;
            this.newContact.userId = this.activeUser.id;
            this.newContact.firstName = formData.firstName;
            this.newContact.lastName = formData.lastName;
            this.newContact.address.street = formData.address.street;

            this.contactService.addContact(this.newContact);
            this.initForm();
            this.myContacts = this.contactService.getContacts();
        }
    }

}