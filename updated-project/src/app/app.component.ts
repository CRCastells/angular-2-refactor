import { Component, OnInit } from '@angular/core';
import { EasterEggService } from './easter-egg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private easterEggService : EasterEggService){}
  
	ngOnInit() {
		this.easterEggService.easterEgg();
	}

}
