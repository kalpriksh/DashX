import { BaseChart } from '../base'
import { PieChartData } from '../models';
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
  } from "ng-apexcharts";
  
  export type PieChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
// class for defining the behavior and rules for the given chart type
export class PieChart extends BaseChart{
    seriesData : PieChartData

    pieChartDefaultData : Partial<PieChartOptions>
    constructor(){
      super()
    this.pieChartDefaultData = {
          
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