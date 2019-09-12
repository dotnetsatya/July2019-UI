import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddressModel } from '../../models/addressModel';
import { ContactModel } from '../../models/contactModel';
import { UserModel } from '../../models/userModel';
import { Subscription, Observable, of } from 'rxjs';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


import { ContactSevice } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { CanComponentDeactivate } from '../../models/interfaces/canDeactivateComponent';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {

    newContact: ContactModel;
    contactForm: FormGroup;
    activeUser: UserModel;
    contactId: string;

    private sub: Subscription;
    constructor(private dialogService: DialogService,  private fb: FormBuilder, private contactService: ContactSevice, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {

    }

    initForm(): void {
        this.newContact = new ContactModel();
        this.newContact.address = new AddressModel();
    }
    ngOnInit(): void {
        this.sub = this.activatedRoute.paramMap.subscribe(params => {
            this.contactId = params.get('id');
        });

        if (parseInt(this.contactId) > 0) {
            console.log(this.contactId);
            this.newContact = this.contactService.getContactById(parseInt(this.contactId));
            this.contactForm = this.fb.group({
                firstName: [this.newContact.firstName, Validators.required],
                lastName: [this.newContact.lastName, Validators.required],
                address: this.fb.group({
                    street: [this.newContact.address.street, Validators.required],
                    city: [this.newContact.address.city],
                    state: [this.newContact.address.state],
                    zip: [this.newContact.address.zip, Validators.required]
                }),
                aliases: this.fb.array([
                    this.fb.control('')
                ])
            });

        } else {
            this.initForm();
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

        }


        if (sessionStorage.getItem('loggedUsername') != null && sessionStorage.getItem('loggedUsername') != undefined) {
            this.activeUser = this.userService.getUserByUsername(sessionStorage.getItem('loggedUsername'));
        }




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
            if (this.newContact.id == null || this.newContact.id == undefined) {
                this.newContact.userId = this.activeUser.id;
            }

            this.newContact.firstName = formData.firstName;
            this.newContact.lastName = formData.lastName;
            this.newContact.address.street = formData.address.street;
            this.newContact.address.city = formData.address.city;
            this.newContact.address.state = formData.address.state;
            this.newContact.address.zip = formData.address.zip;

            this.contactService.addContact(this.newContact);
            this.router.navigate(['/contacts']);
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if(this.contactForm.dirty){     
            return this.dialogService.confirm('There are unsaved changes, click Ok to cancel to go different route OR cancel to keep on the same page?');
          }
      
          return of(true);
    }
}