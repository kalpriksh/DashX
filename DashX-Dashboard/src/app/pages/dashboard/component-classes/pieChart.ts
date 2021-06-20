import { BaseChart } from '../base'
import { CategoryData, PieChartData, SeriesData } from '../models';
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
  seriesData : SeriesData
  categoryData : CategoryData
    chartData : Partial<PieChartOptions>    
    constructor(chartId? : string, chartData? : Partial<PieChartOptions>){
      super()
      if(chartId && chartData){
        this.chartData = chartData
      }
      else{
    this.chartData = {
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
      series: [],
      chart: {
        // width: 380,
        type: "pie",
        redrawOnParentResize : true,
        redrawOnWindowResize : true
      },
      labels: [],
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200
      //       },
      //       legend: {
      //         position: "bottom"
      //       }
      //     }
      //   }
      // ]
    };
  }

    this.chartType = "Pie"
    this.chartId = chartId // unique chart id should be generated for each chart

    this.seriesData = {
      name : "",
      data : []
    }
    }
    GetDefaults(){
      return this.chartData;
    }
    DataComplete(){
      
    }
    CreateNewSeries(name : string , data){
      this.seriesData.name = name;
      this.seriesData.data = data;
      return this.seriesData;
    }
  }