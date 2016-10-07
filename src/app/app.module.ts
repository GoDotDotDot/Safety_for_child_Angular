import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SafetyHeaderComponent} from './safety-header.component';
import {SafetySlideComponent} from './safety-slide.component';
import {SafetyContentComponent} from './safety-content.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SafetyHeaderComponent,
    SafetySlideComponent,
    SafetyContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
