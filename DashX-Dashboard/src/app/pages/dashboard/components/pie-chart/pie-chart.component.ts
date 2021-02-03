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
  EditorData
  @ViewChild ('chartObj') chartObj : ChartComponent;

  constructor(private data : ChartEditorService){

  }
  

  ngOnInit(): void {

    this.pieChartDefaults = new PieChart();
    this.chart = this.initChart()
    this.data.isEditorOpen_current.subscribe( isOpen => this.isEditorOpen = isOpen )
    this.data.editorData_current.subscribe( graphData => {
      
      this.EditorData = graphData
      if(this.chartObj != null){
        this.updateChart(graphData)
      }

    })

  }

  //#region component functions

  //to update the chart options
  updateChart( chartOption : Partial<PieChartOptions> ){
    this.chartObj.updateOptions(
      chartOption
    );
  }
  
  // to open chart editor
  EditChart()
  {
    this.data.ToggleEditor(!this.isEditorOpen);
  }

  public initChart(): Partial<any> {
   return  this.pieChartDefaults.GetDefaults()
  }
}

