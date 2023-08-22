import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  

}
