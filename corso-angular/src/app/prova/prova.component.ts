import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  @Input() people: any

  ngOnInit() {
    console.log(this.people)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
