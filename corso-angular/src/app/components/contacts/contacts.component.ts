import { Component } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  people: any
  constructor(private peopleService: PeopleService) {}


  ngOnInit() {
    this.people = this.peopleService.getPeople()
  }

}
