import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { Contact } from "../model/contact.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {

    constructor(private database: AngularFirestore) { }

    createContact(contact: Contact): Promise<DocumentReference> {
        console.log("Mæhle-adresse: ")
        console.log(contact.email.valueOf())
        return this.database.collection<Contact>("Beskeder").add(contact);
    }
}