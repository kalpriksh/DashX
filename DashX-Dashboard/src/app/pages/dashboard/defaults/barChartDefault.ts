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
  ApexGrid,
  
} from "ng-apexcharts";

// chart options for bar chart
export type BarChartOptions = {
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

export class BarChartDefault {

  barChartDefaultData : Partial<BarChartOptions>
  constructor() {
    this.barChartDefaultData = {
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
        height: 200,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          colors: {
            ranges: [{
                from: 0,
                to: 0,
                color: "blue"
            }],
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
        }
        }
      },
      grid : {
        show : true,
        xaxis:{
          lines:{
            show: false
          }
        },
        yaxis:{
          lines:{
            show: true
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["black"]
      },
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
        opacity: 0
      }
    };
  }
  
  /**
   * GetDefaultData
   * to get the default data for Bar Chart
   */
  public GetData() {
    return this.barChartDefaultData
  }

}


