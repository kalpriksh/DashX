import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData, KpiData, Dashboard } from '../../models';
import { NewChartTabDirective } from '../../directives/new-chart-tab.directive'
//components

//gridster
import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable} from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}


//services
import { ChartContainerService } from "../../services/chart-container.service";
import { ChartEditorService, DashboardService } from "../../services";
import { AppConfig } from '../../services/app-config.service';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  _currentChartData

  // list of chart types {placeholder}
  listOfChartTypes : any[]

  // dummy chart data
  barChartDummyData : BarGraphData
  kpiDummyData : KpiData
  pieChartDummyData : PieChartData
  lineChartDummyData : LineChartData

  //gridster properties
  options: Safe;
  dashboard: Array<GridsterItem>;

  /**
   * @param dashboardService to fetch data for dashboard
   * @param chartContainerService service to transfer chart data between components
   */
  constructor(private dashboardService: DashboardService, private chartContainerService : ChartContainerService, private chartEditorService : ChartEditorService) {
    
    
    this._dashboard = dashboardService.loadDashboardData();
    //toggle demo charts
    if(AppConfig.settings.variables.demoChartVisible)
    {
      this._dashboard.charts = [];
    }
    

    this.chartEditorService.editorData_current.subscribe(_chartObject =>{
      this._currentChartData = _chartObject
    }
    )
  }

  //#region gridster static methods 
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  UpdateChart(item, itemComponent){
    
    //window resize event triggered to resize charts using redrawOnWindowResize
    window.dispatchEvent(new Event('resize'))
  }

  //#endregion

  ngOnInit(): void {

    // bind deleteChart function to service's delete chart function
    this.chartContainerService.DeleteSelectedChart(this.DeleteChart.bind(this))
    //initialize listOfChartTypes
    this.listOfChartTypes = this.dashboardService.GetListOfChartTypes()
    //#region gridster init
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 160,
      maxCols: 160,
      minRows: 100,
      maxRows: 100,
      maxItemCols: 200,
      minItemCols: 1,
      maxItemRows: 200,
      minItemRows: 1,
      maxItemArea: 40000,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: false, east: false, south: false, west: false},
      pushResizeItems: false,
      displayGrid: DisplayGrid.OnDragAndResize,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemResizeCallback : this.UpdateChart,
    };

  }

  //#region gridster methods
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  
  addItem(): void {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
  
  //#endregion

  
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
