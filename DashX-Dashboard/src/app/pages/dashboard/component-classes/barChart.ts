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
  ApexStroke,
  ApexLegend,
  ApexTheme

} from "ng-apexcharts";
import { autoType } from 'd3';

export type BarChartOptions = {
  title : ApexTitleSubtitle;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid : ApexGrid;
  stroke : ApexStroke;
  legend : ApexLegend;
  theme : ApexTheme
};

export class BarChart extends BaseChart{
  
  seriesData : SeriesData
  categoryData : CategoryData
  chartData : Partial<BarChartOptions>
  
  constructor(chartId? : string, chartData? : Partial<BarChartOptions>)
  {
    super()
    
    if(chartId && chartData){
      this.chartData = chartData
    }
    else{
      this.chartData = this.chartData = {
        series: [
        ],
        theme: {
          mode: 'light', 
          palette: 'palette4', 
          monochrome: {
              enabled: false,
              color: '#C7F464',
              shadeTo: 'dark',
              shadeIntensity: 0.65
          }
        },
        title: {
          text: "Bar Chart",
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '23px',
            fontWeight:  10,
            fontFamily:  'Roboto',
            // color:  '#263238'
          },
        },
      
        chart: {
          toolbar : {
            show : false
          },
          redrawOnParentResize : true,
          redrawOnWindowResize : true,
          type: "bar",
          height: '100%'
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

    this.chartId = chartId
    this.chartType = "Bar"
    // init series data
    this.seriesData ={
      name : "",
      data : []
    }

  }

  GetDefaults(){
    return this.chartData;
  }

  DataComplete(){
  }

  CreateNewSeries(name : string , data) : SeriesData {
    this.seriesData.name = name;
    this.seriesData.data = data;
    return this.seriesData;
  }
}

