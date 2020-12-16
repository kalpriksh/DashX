import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { ChartMakerComponent } from './components/chart-maker/chart-maker.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms' 

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NgApexchartsModule } from "ng-apexcharts";
import { from } from 'rxjs';


@NgModule({
  declarations: [OptionSelectorComponent, ChartMakerComponent],
  imports: [
    CommonModule,
    
    NgApexchartsModule,
    
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OptionSelectorComponent,
    ChartMakerComponent,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
