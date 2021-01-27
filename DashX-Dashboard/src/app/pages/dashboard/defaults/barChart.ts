import { BaseChart } from '../base'

import {
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
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid : ApexGrid;
  stroke : ApexStroke;
};

export class BarChart extends BaseChart{
  
  barChartDefaultData : Partial<BarChartOptions>
  constructor(){
    super()
    this.barChartDefaultData = this.barChartDefaultData = {
      series: [
        {
          name: 'basic',
          data:[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
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
            show : true
          }
        }
      },
      stroke :{

      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
      }
    };
  }
  GetDefaults(){
    return this.barChartDefaultData;
  }
  DataComplete(){
    
  }
}

