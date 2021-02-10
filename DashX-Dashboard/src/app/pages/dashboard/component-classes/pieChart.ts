import { BaseChart } from '../base'
import { PieChartData } from '../models';
import {
    ApexTitleSubtitle,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
  } from "ng-apexcharts";
  
  export type PieChartOptions = {
    title : ApexTitleSubtitle;
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
// class for defining the behavior and rules for the given chart type
export class PieChart extends BaseChart{
    seriesData : PieChartData

    pieChartDefaultData : Partial<PieChartOptions>
    constructor(chartId? : number){
      super()
    this.pieChartDefaultData = {
      title: {
        text: "Pie Chart",
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
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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

    this.chartType = "Pie"
    this.chartId = chartId // unique chart id should be generated for each chart

    this.seriesData = {
        series : [],
        labels : []
      }
    }
    GetDefaults(){
      return this.pieChartDefaultData;
    }
    DataComplete(){
      
    }
    CreateNewSeriesForPieChart(name : number[] , data){
      this.seriesData.series = name;
      this.seriesData.labels = data;
      return this.seriesData;
    }
  }