import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class Contacts {
 
    contacts;
    groupedContacts = [];
 
    constructor(public navCtrl: NavController) {
 
        this.contacts = [
            'Susan Smith',
            'Marilyn Monroe',
            'Luke Skywalker',
            'Alexander Skarsgard'
        ];
 
        this.groupContacts(this.contacts);
 
    }
 
    groupContacts(contacts){
 
        let sortedContacts = contacts.sort();
        let currentLetter = false;
        let currentContacts = [];
 
        sortedContacts.forEach((value, index) => {
 
            if(value.charAt(0) != currentLetter){
 
                currentLetter = value.charAt(0);
 
                let newGroup = {
                    letter: currentLetter,
                    contacts: []
                };
 
                currentContacts = newGroup.contacts;
                this.groupedContacts.push(newGroup);
 
            }
 
            currentContacts.push(value);
 
        });
 
    }
 
}