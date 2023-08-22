import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';

  people = [
    {
      name: 'Luca',
      surname: 'Rossi',
      isOnline: true,
      color: 'blue'
    },
    {
      name: 'Mario',
      surname: 'Bianchi',
      isOnline: false,
      color: 'red'
    },
    {
      name: 'Franco',
      surname: 'Verdi',
      isOnline: false,
      color: 'green'
    }
  ]

  handleClick() {
    this.people = [
      {
        name: 'Luca',
        surname: 'sdad',
        isOnline: true,
        color: 'blue'
      },
      {
        name: 'Mario',
        surname: 'pefkpow',
        isOnline: false,
        color: 'red'
      },
      {
        name: 'Franco',
        surname: 'iefi',
        isOnline: false,
        color: 'green'
      }
    ]
  }
}
