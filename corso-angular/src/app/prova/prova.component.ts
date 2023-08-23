import { Component, Output, EventEmitter } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  constructor(private testService: TestServiceService) {}

  ngOnInit() {
    console.log('from prova component', this.testService.people)
  }
  
}
