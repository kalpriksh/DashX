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
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from "ng-apexcharts";
import { from } from 'rxjs';

import { ChartsContainerComponent } from './components/charts-container/charts-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardService } from './services';

@NgModule({
  declarations: [OptionSelectorComponent, ChartMakerComponent, ChartsContainerComponent],
  imports: [
    CommonModule,
    
    NgApexchartsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OptionSelectorComponent,
    ChartMakerComponent,
   ChartsContainerComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
