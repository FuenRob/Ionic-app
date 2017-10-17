import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  hello: string = "Hello, I'm Roberto Morais";
  text1: string = "It's is my app. I'm creatting this app with Ionic 3";

  constructor() {

  }
}
