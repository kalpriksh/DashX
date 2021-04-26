import { DashboardService } from "../../services";
import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData } from '../../models';
import { Dashboard } from '../../component-classes'
import { NewChartTabDirective } from '../../directives/new-chart-tab.directive'

//components

import { BarGraphComponent } from '../bar-graph/bar-graph.component'
import { of } from "rxjs";
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { KeyPerformanceIndicatorComponent } from "../key-performance-indicator/key-performance-indicator.component";

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
                      }];

  // dashboard object to edit/save
  _dashboard : Dashboard
  // contains the list chart in a dashboard
  listChartObjects
  listChartPosition

  constructor(private service: DashboardService, private componentFactoryResolver : ComponentFactoryResolver) {
    this.lineChartData = this.service.loadLineChartData();
    this.pieChartData = this.service.loadPieChartData();
    this.barGraphData = this.service.loadBarGraphData();
  }

  ngOnInit(): void {
    this.listChartObjects = ["kpi", "kpi", "kpi", "kpi","bar"];
    this.listChartPosition = [[1,1],[1,1],[1,1],[1,1],[3,2]];
    
    this._dashboard = new Dashboard(this.listChartObjects, this.listChartPosition)
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
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BarGraphComponent);
      const viewContainerRef = this.newChart.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<BarGraphComponent>(componentFactory);
    }
    if(chartType.toUpperCase() == "PIE")
    {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PieChartComponent);
      const viewContainerRef = this.newChart.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<PieChartComponent>(componentFactory);
    }
    if(chartType.toUpperCase() == "KPI")
    {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(KeyPerformanceIndicatorComponent);
      const viewContainerRef = this.newChart.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<KeyPerformanceIndicatorComponent>(componentFactory);
    }

    this.showChartTypesList = false;
  }
  

  DeleteChart(chartId){
    /**
     * will be called from chartSetup
     * remove from UI
     * update dashboard
     */

  }

  UpdateDashboard(){
    /**
     * updates the dashboard | add/deletes chart
     * updates the list of charts in the dashboard
     */

  }

  SaveDashboard(){
    /**
     * creates dashboard object
     * returns the object to be saved
     */

  }

}
