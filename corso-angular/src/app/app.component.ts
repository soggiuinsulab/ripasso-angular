import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestServiceService } from './services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private testService: TestServiceService) {}

  ngOnInit() {
    console.log('from app component', this.testService.people)
  }
}
