import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'


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

import { LineChartData } from '../../models';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  public chart: Partial<ChartOptions>;
  isEditorOpen : boolean
  editorState

  @Input() lineChartData: LineChartData;
  @ViewChild ('chartObj') chartObj : ChartComponent

  constructor(private data : ChartEditorService){

  }

  ngOnInit(): void {
    this.chart = this.initChart();
    this.data.isEditorOpen_current.subscribe( _editorState => {
      this.isEditorOpen = _editorState[0]
      this.editorState = _editorState
    })
  }

  EditChart()
    {
      this.data.ToggleEditor(!this.isEditorOpen, 666); // chartID modifications need when line chart is being implemented
    }
    
  public initChart(): Partial<ChartOptions> {
  return {
    series: [
        {
          name:"basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
    ],
    chart: {
      height: 350,
      type: "line",
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
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
  };

  }

}

