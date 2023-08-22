import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  @Output() sendEventData = new EventEmitter<string>()
  name = 'Luca'

  handleSendData() {
    this.sendEventData.emit(this.name)
  }
}
