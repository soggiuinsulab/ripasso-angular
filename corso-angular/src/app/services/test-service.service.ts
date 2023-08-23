import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  people = [
    {name: 'Luca', surname: 'Rossi', isOnline: true, color: 'blue'},
    {name: 'Paolo', surname: 'Bianchi', isOnline: false, color: 'red'},
    {name: 'Mario', surname: 'Verdi', isOnline: true, color: 'yellow'},
    {name: 'Marco', surname: 'Neri', isOnline: false, color: 'green'},
    {name: 'Giuseppe', surname: 'Galli', isOnline: true, color: 'purple'}
  ]

  constructor() { }
}
