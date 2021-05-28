import { Injectable } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData, Dashboard, KpiData, DashboardObject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData

  constructor()
  {
    // dummy data testing
    
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
      cols : 2,
      rows : 3,
      x : 0,
      y : 0
      },
      chartData : this.barChartDummyData
    },{
      chartType : "kpi",
      chartID : 0,
      position :{
        cols : 1,
        rows : 1,
        x : 2,
        y : 0
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position : {
        cols : 1,
        rows : 1,
        x : 3,
        y : 0
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position :{
        cols : 1,
        rows : 1,
        x : 2,
        y : 1
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 0,
      position : {
        cols : 1,
        rows : 1,
        x : 3,
        y : 1
        },
      chartData : this.kpiDummyData
    },
    {
      chartType : "pie",
      chartID : 0,
      position :{
        cols : 2,
        rows : 2,
        x : 0,
        y : 3
        },
      chartData : this.pieChartDummyData
    },
    {
      chartType : "line",
      chartID : 0,
      position :{
        cols : 2,
        rows : 3,
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
      position :{
        rows : 3,
        cols : 2,
        x : 0,
        y : 0
      }
    }
  }
  public GetDefaultLineDashboardObject(): DashboardObject 
  { 
    return {
      chartData : this.lineChartDummyData,
      chartID : 0,
      chartType : 'line',
      position :{
        rows : 3,
        cols : 2,
        x : 0,
        y : 0
      }
    }
  }
  public GetDefaultPieDashboardObject(): DashboardObject
  {
    return {
      chartData : this.pieChartDummyData,
      chartID : 0,
      chartType : 'pie',
      position :{
        rows : 2,
        cols : 2,
        x : 0,
        y : 0
      }
    }
  }
  public GetDefaultKpiDashboardObject(): DashboardObject
  {
    return {
      chartData : this.kpiDummyData,
      chartID : 0,
      chartType : 'kpi',
      position :{
        rows : 1,
        cols : 1,
        x : 0,
        y : 0
      }
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
