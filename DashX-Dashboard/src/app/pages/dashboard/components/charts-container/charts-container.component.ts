import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData, KpiData, Dashboard } from '../../models';
import { NewChartTabDirective } from '../../directives/new-chart-tab.directive'
import { of } from "rxjs";

//components
import { BarGraphComponent } from '../bar-graph/bar-graph.component'
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { KeyPerformanceIndicatorComponent } from "../key-performance-indicator/key-performance-indicator.component";

//services
import { ChartContainerService } from "../../services/chart-container.service";
import { DashboardService } from "../../services";

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ChartsContainerComponent implements OnInit {
  /**
   * pass dashboard object to this class
   * dashboard object should contain : child chart components
   * chart components needs to loaded dynamically
   */


  @ViewChild(NewChartTabDirective, {static: true}) newChart: NewChartTabDirective;

  public lineChartData: LineChartData;
  public pieChartData: PieChartData;
  public barGraphData: BarGraphData;

  showChartTypesList = false
  _dashboard : Dashboard 

  // list of chart types {placeholder}
  listOfChartTypes = [{
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
                      }];

  // dummy chart data
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData

  constructor(private dashboardService: DashboardService, private componentFactoryResolver : ComponentFactoryResolver, private chartContainerService : ChartContainerService) {
    this._dashboard = dashboardService.loadDashboardData()
  }

  ngOnInit(): void {
    // bind deleteChart function to service's delete chart function
    this.chartContainerService.DeleteSelectedChart(this.DeleteChart.bind(this));
    this.DashboardInit(this._dashboard);
  }

  DashboardInit(dashboardObject){
    /**
     * initializes the dashboard
     */
    
    
  }

  AddChart(chartType : string){
    /**
     * add chart type on selection basis 
     * dynamically load chart component
     */
    if(chartType.toUpperCase() == "BAR")
    {
      this._dashboard.charts.push(this.dashboardService.GetDefaultBarDashboardObject())
    }
    if(chartType.toUpperCase() == "PIE")
    {
      this._dashboard.charts.push(this.dashboardService.GetDefaultPieDashboardObject())
    }
    if(chartType.toUpperCase() == "KPI")
    {
      this._dashboard.charts.push(this.dashboardService.GetDefaultKpiDashboardObject())
    }
    if(chartType.toUpperCase() == "LINE")
    {
      this._dashboard.charts.push(this.dashboardService.GetDefaultLineDashboardObject())
    }

    this.showChartTypesList = false;
  }
  

  DeleteChart(chartId)
  {
    /**
     * will be called from chart itself using chart-container service
     * remove from UI
     * update dashboard
     */
    
    //filter out the chart not required based on id
    var filteredData = this._dashboard.charts.filter((chartData) => {
      return chartData.chartID != chartId
    })
    this._dashboard.charts = filteredData

  }

  SaveDashboard(){
    /**
     * creates dashboard object
     * returns the object to be saved
     */
    this.dashboardService.SaveDashboardData(this._dashboard)
  }

}
