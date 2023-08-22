import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  // title = 'corso-angular'

  // onClick(e: Event) {
  //   this.title = 'ho cliccato!'
  // }

  // onInput(e: Event) {
  //   this.title = (<HTMLInputElement>e.target).value
  // }

  // isVisible = true

  people = [
    {
      name: 'Luca',
      surname: 'Rossi',
      isOnline: true
    },
    {
      name: 'Mario',
      surname: 'Bianchi',
      isOnline: false
    },
    {
      name: 'Franco',
      surname: 'Verdi',
      isOnline: false
    }
  ]

  number = 3
  string = 'brad'

}
