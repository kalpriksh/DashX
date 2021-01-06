import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexXAxis,
    ApexPlotOptions,
    ApexGrid,
    ApexResponsive,
    ApexYAxis,
    ApexLegend,
    ApexTooltip,
    ApexTheme,
    ApexStroke,
    ApexTitleSubtitle,
    ApexStates,
    ApexNoData,
    ApexMarkers,
    ApexFill,
    ApexAnnotations,

  } from "ng-apexcharts";


  export type ChartOptions = {
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
    markers: ApexMarkers;
    theme: ApexTheme;
    responsive: ApexResponsive;
    title: ApexTitleSubtitle;
    states: ApexStates;
    anotations: ApexAnnotations;
    noData: ApexNoData;
  };

  // export type DashChartOptions {
    
  //   series: ApexAxisChartSeries;
  //   chart: ApexChart;
  //   dataLabels: ApexDataLabels;
  //   plotOptions: ApexPlotOptions;
  //   yaxis: ApexYAxis;
  //   xaxis: ApexXAxis;
  //   fill: ApexFill;
  //   tooltip: ApexTooltip;
  //   stroke: ApexStroke;
  //   legend: ApexLegend;
  //   grid: ApexGrid;
  //   markers: ApexMarkers;
  //   theme: ApexTheme;
  //   responsive: ApexResponsive;
  //   title: ApexTitleSubtitle;
  //   states: ApexStates;
  //   anotations: ApexAnnotations;
  //   noData: ApexNoData;

  // }