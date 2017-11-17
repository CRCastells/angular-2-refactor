import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	showZoidberg : boolean = false;
	imageurl : string = 'http://s2.quickmeme.com/img/36/360d1ece12c5e46f38347b8704e0ad9a32cc3e19dfc4c09a209d4bf15705a521.jpg';
	money : number = 24;
	characters : Array<object> = [
		{
			name: "Zoidberg",
			age: 58
		},
		{
			name: "Professor Farnsworth",
			age: 190
		},
		{
			name: "Philip J Fry",
			age: 32
		},
		{
			name: "Bender",
			age: 3000
		}
	];

  constructor() { }

  ngOnInit() {
  }

  woopWoopWoop() {
  	this.showZoidberg = !this.showZoidberg;
  }
}
