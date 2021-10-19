import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { LineChartData, PieChartData, BarGraphData, Dashboard, KpiData, ChartObject, DashboardObject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData
  dashboardDummyData: DashboardObject
  demoPieChartPosition : GridsterItem
  demoLineChartPosition : GridsterItem
  demoBarChartPosition : GridsterItem
  demoKPIPosition : GridsterItem
  demoDashboardPosition : GridsterItem

  constructor()
  {
    //#region dummy chart data
    this.barChartDummyData = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    }
    this.kpiDummyData = {
      name : "Quaterly Revenue",
      metric : "200",
      icon : "show_chart"
    }
    this.pieChartDummyData = {
      labels : ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      series : [44, 55, 13, 43, 22]
    }
    this.lineChartDummyData = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      xaxis : {
        categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    }
    this.dashboardDummyData =
    {
      title: 'Inventory',
      description: 'Inventory sold'
    }
    //#endregion

    //#region dummy chart position data
    this.demoPieChartPosition = {
      rows : 21,
      cols : 52,
      x : 0,
      y : 0
    }
    this.demoLineChartPosition = {
      rows : 21,
      cols : 52,
      x : 0,
      y : 0
    }
    this.demoBarChartPosition = {
      rows : 21,
      cols : 52,
      x : 0,
      y : 0
    }
    this.demoKPIPosition = {
      rows : 11,
      cols : 36,
      x : 0,
      y : 0
    }
    //#endregion
    this.demoDashboardPosition = 
    {
      rows : 21,
      cols : 52,
      x : 0,
      y : 0
    }
  }

  public loadPieChartData(): PieChartData{
    return{
      series: [44, 55, 13, 43, 22],
      labels:["Team A", "Team B", "Team C", "Team D", "Team E"]
    };
  }
  public loadLineChartData(): LineChartData{
    return{
      series : [{
        name : "Desktops",
        data : [10, 41, 35, 51, 49, 62, 69, 91, 148],
      }],
      xaxis : {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
  }
  public loadBarGraphData(): BarGraphData{
    return{
      series:
      [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      xaxis : 
      {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
      }
    };
  }
  public loadDashboardData(): Dashboard
  {
      return {
        id : "100",
        data : {
          title : "jojo",
          description : "awsm charts"
        },
        color : "red",
        position : {
          rows : 0,
          cols : 0,
          x : 0,
          y : 0
        },
        charts :[]
      }

  }
  public GetDefaultBarChartObject(): ChartObject 
  {
    return {
      dataSource: null,
      table: null,
      chartData : this.barChartDummyData,
      chartID : 0,
      chartType : 'bar',
      position : this.demoBarChartPosition
    }
  }
  public GetDefaultLineChartObject(): ChartObject 
  { 
    return {
      dataSource: null,
      table: null,
      chartData : this.lineChartDummyData,
      chartID : 0,
      chartType : 'line',
      position : this.demoLineChartPosition
    }
  }
  public GetDefaultPieChartObject(): ChartObject
  {
    return {
      dataSource: null,
      table: null,
      chartData : this.pieChartDummyData,
      chartID : 0,
      chartType : 'pie',
      position : this.demoPieChartPosition
    }
  }
  public GetDefaultKpiChartObject(): ChartObject
  {
    return {
      dataSource: null,
      table: null,
      chartData : this.kpiDummyData,
      chartID : 0,
      chartType : 'kpi',
      position : this.demoKPIPosition
    }
  }
  public GetDefaultDashboardObject(): DashboardObject 
  { 
    console.log(this.dashboardDummyData);
    return {
      title: 'test title',
      description: 'test description'
    }
  }

  public GetListOfChartTypes(): any[]
  {return [{
      name : "Kpi",
      icon : "vpn_key"
    }, {
      name : "Pie",
      icon : "pie_chart"
    }, {
      name : "Bar",
      icon : "bar_chart"
    },
    {
      name : "Line",
      icon : "show_chart"
    }]
  }
  public SaveDashboardData(dashboardData : Dashboard)
  {
    console.log('////saving data////', dashboardData);
  }

}
