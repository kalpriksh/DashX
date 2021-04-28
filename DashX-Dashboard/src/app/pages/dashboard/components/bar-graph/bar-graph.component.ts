import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BarGraphData } from '../../models';
import { BarChart, BarChartOptions } from '../../component-classes/barChart'
import { ChartComponent } from "ng-apexcharts";
import { ChartEditorService } from '../../services'
import { DataHandler } from '../../helpers'
import { ChartContainerService } from '../../services/chart-container.service';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit{
  
  public chart: Partial<BarChartOptions>;
  barChart : BarChart;
  isEditorOpen : boolean
  chartData : Partial<BarChartOptions>
  editorState

  @Input() barGraphData;
  @ViewChild ('chartObj') chartObj : ChartComponent;

  constructor(private editorData : ChartEditorService, private chartContainerService : ChartContainerService){
  }

  ngOnInit(): void {

    this.barChart = new BarChart(parseInt(Math.random().toString(36).substr(2, 9)));
    this.chart = this.initChart()
    
    // if input is provided then load data
    if(this.barGraphData)
    {
      this.chart.series = this.barGraphData.series;
      this.chart.xaxis = this.barGraphData.xaxis;
    }

    // on toggle edit chart
    this.editorData.isEditorOpen_current.subscribe(_editorState => {
      this.isEditorOpen = _editorState[0]
      this.editorState = _editorState
    })

    // on data modified event
    this.editorData.editorData_current.subscribe(_modifiedChartObject => {

      if(this.chartObj != null){
        //update if chartType and chartID is the same
        if(_modifiedChartObject.chartType == this.barChart.chartType && _modifiedChartObject.chartId == this.barChart.chartId){
          this.chartData = _modifiedChartObject
          this.UpdateChart(_modifiedChartObject.chartData)
          this.barChart = _modifiedChartObject
        }
      }

    })

  }

  //#region component functions
  
  public initChart(): Partial<any> {
    return  this.barChart.GetDefaults()
  }
  
  UpdateChart( chartOption : Partial<BarChartOptions> )
  {/**to update the chart options */
    this.chartObj.updateOptions(
      chartOption
    );
  }
  
  // to open chart editor
  EditChart(){
    if(this.isEditorOpen){
      //if editor is already open
      if(this.editorState[1] == this.barChart.chartId){
        // chart data is already loaded on the editor
        this.editorData.ToggleEditor(!this.editorState[0], this.barChart.chartId);
      } 
      else{
        // need to load chart data on editor
        this.editorData.ToggleEditor(this.editorState[0], this.barChart.chartId)
        this.editorData.EditorDataUpdated(this.barChart)
      }
    }
    else{
      this.editorData.ToggleEditor(!this.editorState[0], this.barChart.chartId)
      this.editorData.EditorDataUpdated(this.barChart)
    }
  }

  DeleteChart(chartID)
  {
    this.chartContainerService.DeleteChart(chartID);
  }

  //#endregion

}
