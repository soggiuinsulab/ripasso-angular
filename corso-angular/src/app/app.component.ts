import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular'

  today = Date.now()

  integerNumber = 5
  floatNumber = 5.234394868
  percentExampleNumber = 0.05
}
