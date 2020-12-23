import { Component, Input, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { LineChartData } from '../../models';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
public chart: Partial<any>;
@Input() lineChartData: LineChartData;
 
ngOnInit(): void {
  this.chart = this.initChart(this.lineChartData.name, this.lineChartData.data, this.lineChartData.categories);
}
public initChart(name: string, data: number[], categories: string[]): Partial<any> {
 
 return{ 
   series: [
      {
        name:name,
        data: data
      }
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: categories
  }
};
}
}

