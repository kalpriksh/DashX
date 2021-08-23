import { PieChartData } from '../../models';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { ChartEditorService } from '../../services'
import { PieChart, PieChartOptions } from '../../component-classes/pieChart';
import { ChartContainerService } from '../../services/chart-container.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  public chart: Partial<PieChartOptions>;

  @Input() pieChartData: PieChartData;  
  pieChart : PieChart;
  isEditorOpen : boolean
  editorState : [boolean, string]

  EditorData

  @ViewChild ('chartObj') chartObj : ChartComponent;

  constructor(private data : ChartEditorService, private chartContainerService : ChartContainerService){
  }
  
  @Output() chartId = new EventEmitter<string>(); 

  ngOnInit(): void {

    this.pieChart = new PieChart(this.data.UID());
    this.chart = this.initChart()

    //emit chart id on chart creation
    this.chartId.emit(this.pieChart.chartId)

    if(this.pieChartData)
    {
      this.chart.series = this.pieChartData.series,
      this.chart.labels = this.pieChartData.labels
    }
    
    // on toggle edit chart
    this.data.isEditorOpen_current.subscribe( _editorState =>{ 
      this.isEditorOpen = _editorState[0]
      this.editorState = _editorState
    })

    // on data modified event
    this.data.editorData_current.subscribe( graphData => {
      this.EditorData = graphData
      if(this.chartObj != null){        
        if(graphData.chartType == "Pie")
        this.updateChart(graphData)
      }
    })

  }

  //#region component functions

  //to update the chart options
  updateChart( chartOption : Partial<PieChartOptions>){
    this.chartObj.updateOptions(
      chartOption
    );
  }
  
  // to open chart editor
  EditChart(){
    if(this.isEditorOpen){
      //if editor is already open
      if(this.editorState[1] == this.pieChart.chartId){
        // chart data is already loaded on the editor
        this.data.ToggleEditor(!this.editorState[0], this.pieChart.chartId);
      } 
      else{
        // need to load chart data on editor
        this.data.ToggleEditor(this.editorState[0], this.pieChart.chartId)
        this.data.EditorDataUpdated(this.pieChart)
      }
    }
    else{
        this.data.ToggleEditor(!this.editorState[0], this.pieChart.chartId)
        this.data.EditorDataUpdated(this.pieChart)
    }
  }

  /**
   * to delete the selected chart
   */
  DeleteChart()
  {
    this.chartContainerService.DeleteChart(this.pieChart.chartId);
  }
  public initChart(): Partial<any> {
    return  this.pieChart.GetDefaults()
  }
}

