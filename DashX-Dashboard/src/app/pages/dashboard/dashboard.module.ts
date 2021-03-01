import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routingComponents } from '../../app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';


import { NgApexchartsModule } from "ng-apexcharts";
import { from } from 'rxjs';

import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { LineChartComponent} from './components/line-chart/line-chart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ChartSetupComponent } from './components/chart-setup/chart-setup.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';

//services
import { DashboardService, ChartEditorService } from './services';
import { ReadExcelDirective } from './directives/read-excel.directive';

import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { KeyPerformanceIndicatorComponent } from './components/key-performance-indicator/key-performance-indicator.component';


@NgModule({
  declarations: [OptionSelectorComponent, LineChartComponent, PieChartComponent, BarGraphComponent, ChartEditorComponent, ChartSetupComponent, ReadExcelDirective, KeyPerformanceIndicatorComponent, routingComponents],

  imports: [
    CommonModule,
    AppRoutingModule,
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
    MatCheckboxModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatRadioModule
  ],
  exports: [
    OptionSelectorComponent
  ],
  providers: [
    DashboardService,
    ChartEditorService,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
  
})
export class DashboardModule { }
