import { Injectable } from '@angular/core';

@Injectable()
export class EasterEggService {

  constructor() { }

  easterEgg() {
  	return console.log("You're a developer, you can see me!");
  }

}
