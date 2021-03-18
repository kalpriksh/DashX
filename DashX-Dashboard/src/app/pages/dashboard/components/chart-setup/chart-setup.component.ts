import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'
import { ChartSetup, PieChart, BarChart, BarChartOptions, PieChartOptions, LineChart, LineChartOptions } from '../../component-classes';
import { PieChartData, SeriesData } from '../../models';
@Component({
  selector: 'app-chart-setup',
  templateUrl: './chart-setup.component.html',
  styleUrls: ['./chart-setup.component.css']
})

export class ChartSetupComponent implements OnInit {
  
  panelOpenState = true;
  // binds _chartSetupData to the UI
  _chartSetupData
  _chartObject

  //#region classes
  chartSetup : ChartSetup
  barChart : BarChart
  pieChart: PieChart
  //#endregion

  //#region UI variables
  seriesNames : string[];
  categoryNames : any[];
  availableCategoryNames: any[];
  labelNames : any[];
  labelList: any[];
  addedSeries : any;
  seriesList : any[];
  categoryList : any[];
  chartTypeData : string; //test variable
  chartTypesList : string[];
  //#endregion
  

  constructor(private chartData : ChartEditorService){}

  ngOnInit(){
    this.barChart = new BarChart();
    this.pieChart = new PieChart();
    
    this.chartData.editorData_current.subscribe(_chartObject =>{
      this.Reset()
      this.LoadData(_chartObject)
      }
    )
    
    this.Reset()
    this.chartSetup = new ChartSetup();
    this.chartTypesList = ["Bar","Line","Pie"]
    this.seriesNames = ["null"]
    this.categoryNames = ["null"]

  }
  DeleteSeries(deletedSeries)
  {
    this.seriesList = this.seriesList.filter(series => series !== deletedSeries);
    this._chartSetupData.series.pop(deletedSeries)
    this._chartObject.chartData = this._chartSetupData
    this.chartData.EditorDataUpdated(this._chartObject)
  }
  DeleteCategory(deletedCategory)
  {  
    this.availableCategoryNames = this.availableCategoryNames.filter(category => category !== deletedCategory);
    this._chartSetupData.series.pop(deletedCategory)
    this._chartObject.chartData = this._chartSetupData
    this.chartData.EditorDataUpdated(this._chartObject)
  }
  DeleteLabels(deletedLabel)
  {}
  /**
   * initialize the lists as empty 
   */
  Reset(){
    this.seriesList = [];
    this.categoryList = [];
    this.availableCategoryNames = [];
    this.labelList = [];
  }

  test(event){
    this.UpdateChartSetup(event.value)
  }

   // updates the component UI
    UpdateChartSetup(chartType){
      
    this.seriesNames = this.chartSetup.GetSeriesName(chartType, "series")
    this.categoryNames = this.chartSetup.GetSeriesName(chartType, "category")
    this.labelNames = this.chartSetup.GetSeriesName(chartType, "label")
  }

  EnterSubmit(event, form){
    if (event.keyCode == 13) {
      this._chartObject.Defaults = this._chartSetupData
      this.chartData.EditorDataUpdated(this._chartObject)
    }
  }

  /**updates:
   * data lists
   * chart data
   */
  ChartInit(chartData){
    
        if(chartData.series){
          this.seriesList.push(...chartData.series);
        }
        if(chartData.xaxis && chartData.xaxis.categories){
          this.categoryList.push(...chartData.xaxis.categories);
        }
        if(chartData.labels){
          this.labelList.push(...chartData.labels)
        }
        this._chartSetupData = chartData
  }
  
  LoadData(chartObject){
    if(chartObject){

      if(chartObject.chartType == "Bar") {
        let _barChart : BarChart = chartObject
        let _chartData : Partial<BarChartOptions> = _barChart.chartData
        this.ChartInit(_chartData)
      }
      else if(chartObject.chartType == "Pie"){
        let _pieChart : PieChart = chartObject
        let _chartData : Partial<PieChartOptions> = _pieChart.chartData
        this.ChartInit(_chartData)
      }
      else if(chartObject.chartType == "Line") {
        
        let _lineChart : LineChart = chartObject
        let _chartData : Partial<LineChartOptions> = _lineChart.chartData
        this.ChartInit(_chartData)
      }
      this._chartObject = chartObject
    }

  }

  AddData(dataTypeName : string, dataType : string){
    /**
     * adds series/category to the ui    
     * adds series/category to the chartData object
     */
    // default case
    
    if(dataTypeName == "null"){
      alert("need to add data file")
    }
    else 
    if (this._chartObject.chartType == "Bar" || this._chartObject.chartType == "Line" || this._chartObject.chartType == "Pie")
    {
      this.addedSeries = this.barChart.CreateNewSeries(dataTypeName, this.chartSetup.GetSeriesData(this._chartObject.chartType, dataType, dataTypeName));
      // to prevent call by reference
      let dataToPush : SeriesData = {
        name : this.addedSeries.name,
        data : this.addedSeries.data
      } 

      if(dataType == 'series'){
        this.seriesList.push(dataToPush)
        this._chartSetupData.series.push(dataToPush)
      }
      else if(dataType == 'category'){
        this._chartSetupData.xaxis.categories = dataToPush.data;
        this.categoryList.push(dataToPush)
        this.availableCategoryNames.push(dataToPush)
      }
      else
      if (dataType == 'label'){
        this._chartSetupData.labels = dataToPush.data;
        this.labelList.push(dataToPush)
      }
    }

      // update seriesList UI
      // update setup data
      // update chart
      
      this._chartObject.chartData = this._chartSetupData
      this.chartData.EditorDataUpdated(this._chartObject)
    }

  SaveChartData(){
    /**
     * saves chartData to DB
     */
  }

}

