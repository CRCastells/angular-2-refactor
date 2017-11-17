import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CartoonComponent } from './cartoon/cartoon.component';

import { EasterEggService } from './easter-egg.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EasterEggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
