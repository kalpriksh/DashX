import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routingComponents } from '../../app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


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

import { LineChartComponent} from './components/line-chart/line-chart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ChartSetupComponent } from './components/chart-setup/chart-setup.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { KeyPerformanceIndicatorComponent } from './components/key-performance-indicator/key-performance-indicator.component';
import { MatDialog} from '@angular/material/dialog';

//gridster
import { GridsterModule } from 'angular-gridster2';


//services
import { DashboardService, ChartEditorService } from './services';
import { ReadExcelDirective } from './directives/read-excel.directive';

import { NewChartTabDirective } from './directives/new-chart-tab.directive';
import { ChartCustomizerComponent } from './components/chart-customizer/chart-customizer.component';
import { DataHandlerService } from './services/data-handler.service';
import { CreateDashboardComponent } from './components/create-dashboard/create-dashboard.component';



@NgModule({
  declarations: [LineChartComponent, PieChartComponent, BarGraphComponent, ChartEditorComponent, ChartSetupComponent, ReadExcelDirective, KeyPerformanceIndicatorComponent, routingComponents, NewChartTabDirective, ChartCustomizerComponent, CreateDashboardComponent],

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
    MatRadioModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    GridsterModule
  ],
  exports: [
    
  ],
  providers: [
    DashboardService,
    ChartEditorService,
    DataHandlerService,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
  
})
export class DashboardModule { }
