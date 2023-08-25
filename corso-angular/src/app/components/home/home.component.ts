import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeform!: FormGroup
  constructor() {}
  ngOnInit() {
    this.homeform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      option: new FormControl()
    })
  }

  handleSubmit(form: FormGroup) {
    console.log(form)
  }

}