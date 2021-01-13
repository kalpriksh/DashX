import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs'
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';


import { NgApexchartsModule } from "ng-apexcharts";
import { from } from 'rxjs';

import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { LineChartComponent} from './components/line-chart/line-chart.component';
import { ChartsContainerComponent } from './components/charts-container/charts-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardService } from './services';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { ChartSetupComponent } from './components/chart-setup/chart-setup.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';

@NgModule({
  declarations: [OptionSelectorComponent, LineChartComponent, ChartsContainerComponent, BarGraphComponent, ChartEditorComponent, ChartSetupComponent],

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
    MatCheckboxModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ],
  exports: [
    OptionSelectorComponent,
    ChartsContainerComponent
  ],
  providers: [
    DashboardService,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class DashboardModule { }
