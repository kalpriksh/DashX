import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BarGraphData } from '../../models';
import { BarChartDefault, BarChartOptions } from '../../defaults/barChartDefault'
import { ChartComponent } from "ng-apexcharts";


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit{
  
  public chart: Partial<BarChartOptions>;
  barChartDefaults : BarChartDefault;

  @Input() barGraphData: BarGraphData;
  @ViewChild ('chartObj') chartObj : ChartComponent

  ngOnInit(): void {
    this.barChartDefaults = new BarChartDefault();
    this.chart = this.initChart()
  }

  //#region component functions

  //to update the chart options
  updateChart( chartOption : Partial<BarChartOptions> ){
    this.chartObj.updateOptions(
      chartOption
    );

  }
  EditChart()
  {
    console.log('working');
  }
  public initChart(): Partial<any> {
   return  this.barChartDefaults.GetData()
  }

  //#endregion
}
