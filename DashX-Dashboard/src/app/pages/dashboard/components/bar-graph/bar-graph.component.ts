import { Component, OnInit, Input } from '@angular/core';
import { BarGraphData } from '../../models';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  public chart: Partial<any>;
  @Input() barGraphData: BarGraphData;
  ngOnInit(): void {
    this.chart = this.initChart(this.barGraphData.name, this.barGraphData.data, this.barGraphData.categories);
  }
  public initChart(name: string, data: number[], categories: string[]): Partial<any> {
   return {
      series: [
        {
          name: name,
          data: data
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: categories
      }
    };
  }
}
