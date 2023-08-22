import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('greetingsInput') greetingsInput!: ElementRef<HTMLInputElement>

  title = 'corso-angular';

  customValue = 'ciao'

  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.greetingsInput)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.greetingsInput)
  }
  
  handleClick() {
    console.log(this.greetingsInput.nativeElement.value)
  }

}
