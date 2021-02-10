import { PieChartData } from '../../models';
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { ChartEditorService } from '../../services'
import { PieChart, PieChartOptions } from '../../component-classes/pieChart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  public chart: Partial<PieChartOptions>;
  @Input() pieChartData: PieChartData;  
  pieChartDefaults : PieChart;
  isEditorOpen : boolean
  editorState : [boolean, number]

  EditorData
  @ViewChild ('chartObj') chartObj : ChartComponent;
  constructor(private data : ChartEditorService){
  }
  

  ngOnInit(): void {

    this.pieChartDefaults = new PieChart(102);
    this.chart = this.initChart()
    
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
    debugger
    if(this.isEditorOpen){
      //if editor is already open
      if(this.editorState[1] == this.pieChartDefaults.chartId){
        // chart data is already loaded on the editor
        this.data.ToggleEditor(!this.editorState[0], this.pieChartDefaults.chartId);
      } 
      else{
        // need to load chart data on editor
        this.data.ToggleEditor(this.editorState[0], this.pieChartDefaults.chartId)
        this.data.EditorDataUpdated(this.pieChartDefaults)
      }
    }
    else{
        this.data.ToggleEditor(!this.editorState[0], this.pieChartDefaults.chartId)
        this.data.EditorDataUpdated(this.pieChartDefaults)
    }
  }

  public initChart(): Partial<any> {
    return  this.pieChartDefaults.GetDefaults()
  }
}

