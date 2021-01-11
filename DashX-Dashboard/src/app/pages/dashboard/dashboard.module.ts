import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ChartMakerComponent } from './components/chart-maker/chart-maker.component';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { LineChartComponent} from './components/line-chart/line-chart.component';
import { ChartsContainerComponent } from './components/charts-container/charts-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardService } from './services';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [OptionSelectorComponent, ChartMakerComponent, LineChartComponent, ChartsContainerComponent, BarGraphComponent, ChartEditorComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,   
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  exports: [
    OptionSelectorComponent,
    ChartMakerComponent,
    ChartsContainerComponent, 
    ChartEditorComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
 }
