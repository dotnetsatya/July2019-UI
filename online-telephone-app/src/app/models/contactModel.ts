import { AddressModel } from './addressModel';
export class ContactModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: AddressModel;
    aliases: string[];
    userId: number;
}