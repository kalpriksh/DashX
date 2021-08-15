import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from "@angular/material/card";

import { NgApexchartsModule } from "ng-apexcharts";
import { MatSliderModule } from '@angular/material/slider';

import { DashxModule, DashAppRoutingModule } from 'dashx'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgApexchartsModule,
    DashxModule,
    DashAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
