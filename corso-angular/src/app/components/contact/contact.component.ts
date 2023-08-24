import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.personId = +params.get('id')!
      this.person = this.peopleService.getPerson(this.personId)
    })
  }
}
