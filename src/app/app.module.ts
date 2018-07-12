import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
