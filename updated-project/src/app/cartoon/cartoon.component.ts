import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent implements OnInit {

	debbyDowner : boolean;
	favoriteCartoon : string = 'Futurama';

  constructor() { }

  ngOnInit() {
  }

}
