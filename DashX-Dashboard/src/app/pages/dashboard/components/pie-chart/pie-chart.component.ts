import { PieChartData } from '../../models/pieChartData';
import { Component, OnInit, Input } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pnie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public chart: Partial<any>;
  @Input() pieChartData: PieChartData;
  ngOnInit(): void {
    this.chart = this.initChart(this.pieChartData.series, this.pieChartData.labels);
  }
  public initChart(series: number[], labels: string[]): Partial<any> {
    return {
      series: series,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

