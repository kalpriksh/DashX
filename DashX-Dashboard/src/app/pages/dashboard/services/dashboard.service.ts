import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { LineChartData, PieChartData, BarGraphData, Dashboard, KpiData, DashboardData, DashboardObject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData
  dashboardDummyData: DashboardData
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
      return {charts :[
      {
      chartType : "bar",
      chartID : 0,
      position : {
      cols : 80,
      rows : 45,
      x : 0,
      y : 0
      },
      chartData : this.barChartDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position :{
        cols : 39,
        rows : 23,
        x : 2,
        y : 0
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position : {
        cols : 39,
        rows : 23,
        x : 3,
        y : 0
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position :{
        cols : 39,
        rows : 23,
        x : 2,
        y : 1
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position : {
        cols : 39,
        rows : 23,
        x : 80,
        y : 32
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "pie",
      chartID : 0,
      position :{
        cols : 62,
        rows : 47,
        x : 0,
        y : 3
        },
      chartData : this.pieChartDummyData
    },
    {
      chartType : "line",
      chartID : 0,
      position :{
        cols : 80,
        rows : 45,
        x : 2,
        y : 3
        },
      chartData : this.lineChartDummyData
    }
  ]}

  }
  public GetDefaultBarDashboardObject(): DashboardObject 
  {
    return {
      chartData : this.barChartDummyData,
      chartID : 0,
      chartType : 'bar',
      position : this.demoBarChartPosition
    }
  }
  public GetDefaultLineDashboardObject(): DashboardObject 
  { 
    return {
      chartData : this.lineChartDummyData,
      chartID : 0,
      chartType : 'line',
      position : this.demoLineChartPosition
    }
  }
  public GetDefaultPieDashboardObject(): DashboardObject
  {
    return {
      chartData : this.pieChartDummyData,
      chartID : 0,
      chartType : 'pie',
      position : this.demoPieChartPosition
    }
  }
  public GetDefaultKpiDashboardObject(): DashboardObject
  {
    return {
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
      chartData : this.dashboardDummyData,
      chartID : 0,
      chartType : 'Dashboard',
      position : this.demoDashboardPosition
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
