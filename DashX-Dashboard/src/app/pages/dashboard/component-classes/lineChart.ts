import { BaseChart } from '../base'
import { SeriesData, CategoryData } from '../models'

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

import { LineChartData } from '../models';

export type LineChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};


export class LineChart extends BaseChart {
chartData : Partial<LineChartOptions>

  constructor(chartId? : number, chartData? : Partial<LineChartOptions>) {
      super()

      if(chartId && chartData){
          this.chartData = chartData
      }
      else{
          this.chartData = this.chartData = {
              series: [
                  {
                    name:"basic",
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                  }
              ],
              title: {
                text: "Line Chart",
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '23px',
                  fontWeight:  'bold',
                  fontFamily:  undefined,
                  color:  '#263238'
                },
              },
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
                opacity: 0.5}
              },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
              }
          };
      }
      this.chartId = chartId
      this.chartType = "Line"
  }

  GetDefaults(){
    return this.chartData;
  }

}