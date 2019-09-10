import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from '../../models/contactModel';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() selectedContact: ContactModel;
  constructor() { }

  ngOnInit() {
  }

}
