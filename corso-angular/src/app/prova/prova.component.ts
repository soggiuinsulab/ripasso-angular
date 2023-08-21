import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  isDisabled = true
  renderedImage = ''
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnW7J9cSLy_4rsTqIKcbDv5X-bW6GYqUKit2su4_pw&s'
  image2 = 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D&w=1000&q=80'

  ngOnInit() {
    let count = 0
    setInterval(() => {
      this.isDisabled = !this.isDisabled
      count % 2 === 0 ? this.renderedImage = this.image2 : this.renderedImage = this.image1
      count++
    }, 1000)

  }

}
