import { BaseChart } from '../base'
import { SeriesData, CategoryData } from '../models'


import {
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  ApexStroke
} from "ng-apexcharts";

export type BarChartOptions = {
  title : ApexTitleSubtitle;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid : ApexGrid;
  stroke : ApexStroke;
};

export class BarChart extends BaseChart{
  
  chartId : number  
  seriesData : SeriesData
  categoryData : CategoryData
  

  barChartDefaultData : Partial<BarChartOptions>
  constructor(chartId? : number, chartData? : Partial<BarChartOptions>){
    super()

    if(chartId && chartData){
      this.barChartDefaultData = chartData
    }
    else{
      this.barChartDefaultData = this.barChartDefaultData = {
        series: [
        ],
        title: {
          text: "Placeholder",
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
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        grid :{
          xaxis : {
            lines :{
              show : true
            }
          },
          yaxis : {
            lines :{
              show : false
            }
          }
        },
        stroke :{
  
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: []
        }
      };
    }

    // init series data
    this.seriesData = {
      name : "",
      data : []
    }

  }

  GetDefaults(){
    return this.barChartDefaultData;
  }

  DataComplete(){
    
  }

  CreateNewSeries(name : string , data){
    this.seriesData.name = name;
    this.seriesData.data = data;
    return this.seriesData;
  }
 
}

