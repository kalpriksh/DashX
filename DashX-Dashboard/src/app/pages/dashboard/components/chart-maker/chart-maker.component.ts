import { Component, OnInit, ViewChild } from '@angular/core';
import { BarChartDefault,BarChartOptions } from "./../../defaults/barChartDefault";
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-chart-maker',
  templateUrl: './chart-maker.component.html',
  styleUrls: ['./chart-maker.component.css']
})
export class ChartMakerComponent {
  public chart: Partial<BarChartOptions>
  barChartDefaults : BarChartDefault

  XGrid : boolean
  YGrid : boolean

  @ViewChild('chartObj') usedChart : ChartComponent;

  public ngOnInit(): void {
    this.barChartDefaults = new BarChartDefault();
    this.chart = this.initChart();
  }

  updateChart( chartOption : Partial<BarChartOptions> ){
    // this.chart = chartOption;
    this.usedChart.updateOptions(
      chartOption
    );

  }
  // to initialize the chart
  public initChart(): Partial<BarChartOptions> {
    return this.barChartDefaults.GetData();
  }
}
