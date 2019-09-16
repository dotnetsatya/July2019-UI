import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactModel } from '../../models/contactModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  isModalOpen: boolean = false;

  @Input() myContacts: ContactModel[];
  @Output() onContactSelected: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onContactView(contactObj: ContactModel): void {
    this.onContactSelected.emit(contactObj);
  }

  onEditContact(contact: ContactModel) : void {
    alert(contact.id);
    this.router.navigate(['/add-contact', contact.id]);
  }

  onDelete(contact: ContactModel): void {
    this.isModalOpen = true;
  }

  onCloseModal(): void {
    this.isModalOpen = false;
  }
}
