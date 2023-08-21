import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  constructor() {
    console.log('costruttore')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
