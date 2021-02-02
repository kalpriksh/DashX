import { BaseChart } from '../base'
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
  } from "ng-apexcharts";
import { SeriesData } from '../models';
  
  export type PieChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
// class for defining the behavior and rules for the given chart type
export class PieChart extends BaseChart{
    seriesData : SeriesData

    pieChartDefaultData : Partial<PieChartOptions>
    constructor(){
      super()
    this.pieChartDefaultData = {
          
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [],
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
        name : "",
        data : []
      }
    }
    GetDefaults(){
      return this.pieChartDefaultData;
    }
    DataComplete(){
      
    }
    CreateNewSeries(name : string , data){
      this.seriesData.name = name;
      this.seriesData.data = data;
      return this.seriesData;
    }
  }