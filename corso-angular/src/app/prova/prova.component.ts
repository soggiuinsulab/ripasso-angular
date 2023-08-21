import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  isDisabled = false

  onClick() {
    console.log('ho cliccato!')
  }

  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value)
  }

}
