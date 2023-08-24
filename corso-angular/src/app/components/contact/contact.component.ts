import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  person: any
  personId: any
  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {}
    
  ngOnInit() {
    this.person = this.peopleService.getPerson(parseInt(this.route.snapshot.paramMap.get('id')!))
  }
}
