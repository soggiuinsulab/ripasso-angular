import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people = [
    {id: 1, name: 'Luca', surname: 'Rossi', isOnline: true, color: 'blue'},
    {id: 2, name: 'Paolo', surname: 'Bianchi', isOnline: false, color: 'red'},
    {id: 3, name: 'Mario', surname: 'Verdi', isOnline: true, color: 'yellow'},
    {id: 4, name: 'Marco', surname: 'Neri', isOnline: false, color: 'green'},
    {id: 5, name: 'Giuseppe', surname: 'Galli', isOnline: true, color: 'purple'}
  ]

  constructor() { }

  getPeople() {
    return this.people
  }

  getPerson(id: number) {
    return this.people.find(singlePerson => singlePerson.id === id)
  }
}
