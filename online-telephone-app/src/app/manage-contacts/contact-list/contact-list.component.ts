import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactModel } from '../../models/contactModel';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  isModalOpen: boolean = false;

  
  @Input() myContacts: ContactModel[];
  @Output() onContactSelected: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();
  constructor(private router : Router, private dialog: MatDialog) { }

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
    // this.isModalOpen = true;

    this.dialog.open(DialogComponent);
  }

  onCloseModal(): void {
    this.isModalOpen = false;
  }

  onSaveModel(): void {
    this.isModalOpen = false;
  }
}
