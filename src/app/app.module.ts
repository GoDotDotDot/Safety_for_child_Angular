import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing,appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import {SafetyHeaderComponent} from './safety-header.component';
import {SafetySlideComponent} from './safety-slide.component';
import {SafetyContentComponent} from './safety-content.component'
import {SafetyChildStatusComponent} from "./safety-child-status.component";
import {Error404} from "./error404.component";
import {PanelMenuModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PanelMenuModule
    
  ],
  declarations: [
    AppComponent,
    SafetyHeaderComponent,
    SafetySlideComponent,
    SafetyContentComponent,
    SafetyChildStatusComponent,
    Error404   
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
