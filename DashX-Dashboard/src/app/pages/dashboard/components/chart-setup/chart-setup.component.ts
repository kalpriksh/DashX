import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'
import { ChartSetup } from '../../component-classes';
import { SeriesData } from '../../models';
import { BarChart } from '../../component-classes';

@Component({
  selector: 'app-chart-setup',
  templateUrl: './chart-setup.component.html',
  styleUrls: ['./chart-setup.component.css']
})
export class ChartSetupComponent implements OnInit {
  
  panelOpenState = true;

  // binds SetupData to the UI
  SetupData

  //#region classes
  ChartSetup : ChartSetup;
  BarChart : BarChart;
  //#endregion

  //#region UI variables
  seriesNames : string[];
  seriesList : SeriesData[];
  categoryList : any[]
  //#endregion

  constructor(private chartData : ChartEditorService){}

  ngOnInit(){
    this.chartData.editorData_current.subscribe(chartData => this.SetupData = chartData)
    this.seriesNames = ["null"]
    this.seriesList = []
    this.categoryList = []
    this.BarChart = new BarChart();
  }

  EnterSubmit(event, form){
    if (event.keyCode == 13) {
      this.chartData.EditorDataUpdated(this.SetupData)
    }
  }

  OnSheetUpload(workBookData){
    /**
     * init ChartSetup class
     * takes entire workbook processes it and returns required data
     */
    this.ChartSetup = new ChartSetup(workBookData);
    this.UpdateChartSetup();
  }

  // updates the component UI
  UpdateChartSetup(){
    this.seriesNames = this.ChartSetup.GetSeriesName();
  }

  AddSeries(name : string){
    /**
     * adds series to the ui    
     * adds series to the chartData object
     */
    // default case
    if(name == "null"){
      alert("need to add data file")
    }
    else{
      const series  = this.BarChart.CreateNewSeries(name, this.ChartSetup.GetSeriesData(name));

      // update seriesList UI
      this.seriesList.push(series)

      // update setup data
      this.SetupData.series.push(series);
      
      // update chart
      this.chartData.EditorDataUpdated(this.SetupData)
    }
  }

  
  AddCategory(name : string){
    /**
     * adds series to the ui    
     * adds series to the chartData object
     */
    // default case
    if(name == "null"){
      alert("need to add data file")
    }
    else{
      const categoryData = this.ChartSetup.GetSeriesData(name);

      // update seriesList UI
      this.categoryList = categoryData;

      // update setup data
      this.SetupData.xaxis.categories = categoryData;
      
      // update chart
      this.chartData.EditorDataUpdated(this.SetupData)
    }
  }

  SaveChartData(){
    /**
     * saves chartData to DB
     */
  }

}

