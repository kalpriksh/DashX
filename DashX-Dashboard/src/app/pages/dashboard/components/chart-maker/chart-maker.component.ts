import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
};


@Component({
  selector: 'app-chart-maker',
  templateUrl: './chart-maker.component.html',
  styleUrls: ['./chart-maker.component.css']
})
export class ChartMakerComponent {
  public chart: Partial<any>
  XGrid : boolean
  YGrid : boolean
  @ViewChild('chartObj') usedChart : ChartComponent;

  public ngOnInit(): void {    
    this.chart = this.initChart();
  }

  updateChart( chartOption ){

    this.usedChart.updateOptions({
      dataLabels:{
        enabled : chartOption.labels
      },
      grid:{
        xaxis: {
          lines: {
              show: chartOption.XGrid
          }
      },   
      yaxis: {
          lines: {
              show: chartOption.YGrid
          }
      }
      }
    });

  }

  public initChart(): Partial<any> {
    
    return  {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 375,
        // width: '100%'

      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      grid : {
        show : true
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              height : '300',
              width : '500'
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      }
    };
  }
}
