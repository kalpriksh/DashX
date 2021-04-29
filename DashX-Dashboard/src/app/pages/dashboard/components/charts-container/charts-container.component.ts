import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData, KpiData } from '../../models';
import { Dashboard } from '../../component-classes'
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
                      }];

  // dummy chart data
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData

  constructor(private service: DashboardService, private componentFactoryResolver : ComponentFactoryResolver, private chartComponentService : ChartContainerService) {
    this.lineChartData = this.service.loadLineChartData();
    this.pieChartData = this.service.loadPieChartData();
    this.barGraphData = this.service.loadBarGraphData();
  }

  ngOnInit(): void {
    

    // this.listChartObjects = ["kpi", "kpi", "kpi", "kpi","bar"];
    // this.listChartPosition = [[1,1],[1,1],[1,1],[1,1],[3,2]];

    // bind deleteChart function to service's delete chart function
    this.chartComponentService.DeleteSelectedChart(this.DeleteChart.bind(this));

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

    // dummy dashboard testing
    this._dashboard = {charts :[
      {
      chartType : "bar",
      chartID : 6666,
      position : {
      col : 2,
      row : 3
      },
      chartData : this.barChartDummyData
    },{
      chartType : "kpi",
      chartID : 6666,
      position : {
      col : 1,
      row : 1
      },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 6666,
      position : {
      col : 1,
      row : 1
      },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 6666,
      position : {
      col : 1,
      row : 1
      },
      chartData : this.kpiDummyData
    },
    {
      chartType : "kpi",
      chartID : 6666,
      position : {
      col : 1,
      row : 1
      },
      chartData : this.kpiDummyData
    },
    {
      chartType : "pie",
      chartID : 6666,
      position : {
      col : 2,
      row : 2
      },
      chartData : this.pieChartDummyData
    },
    {
      chartType : "line",
      chartID : 6666,
      position : {
      col : 2,
      row : 3
      },
      chartData : this.lineChartDummyData
    }
  ]}

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
      //TODO: update dashboard object
    }
    if(chartType.toUpperCase() == "PIE")
    {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PieChartComponent);
      const viewContainerRef = this.newChart.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<PieChartComponent>(componentFactory);
      //TODO: update dashboard object
    }
    if(chartType.toUpperCase() == "KPI")
    {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(KeyPerformanceIndicatorComponent);
      const viewContainerRef = this.newChart.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<KeyPerformanceIndicatorComponent>(componentFactory);
      //TODO: update dashboard object
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
