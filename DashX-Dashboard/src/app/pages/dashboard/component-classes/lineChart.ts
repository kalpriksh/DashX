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

  constructor(chartId? : string, chartData? : Partial<LineChartOptions>) {
      super()

      if(chartId && chartData){
          this.chartData = chartData
      }
      else{
          this.chartData = this.chartData = {
              series: [
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
                  fontWeight:  10,
                  fontFamily:  'Roboto',
                  color:  '#263238'
                },
              },
              chart: {
                toolbar : {
                  show : false
                },
                height: "100%",
                type: "line",
                redrawOnParentResize : true,
                redrawOnWindowResize : true,
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
                categories: []
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