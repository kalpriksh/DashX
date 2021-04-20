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
  availableCategoryNames: string[];
  availableLabelNames: any[];
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
    this._chartSetupData.categories.pop(deletedCategory)
    this._chartObject.chartData = this._chartSetupData
    this.chartData.EditorDataUpdated(this._chartObject)
  }

  DeleteLabel(deletedLabel)
  {    console.log(deletedLabel);
    this.availableLabelNames = this.availableLabelNames.filter(label => label !== deletedLabel);
    this._chartSetupData.label.pop(deletedLabel)
    this._chartObject.chartData = this._chartSetupData
    this.chartData.EditorDataUpdated(this._chartObject)
  }

  /**
   * initialize the lists as empty 
   */
  Reset(){
    this.seriesList = [];
    this.categoryList = [];
    this.labelList = [];
  }

  DataSelected(event){
    this.UpdateChartSetup(event.value);
  }

  // updates the component UI
  UpdateChartSetup(chartType){
      
    this.seriesNames = this.chartSetup.GetSeriesName(chartType, "series")
    this.categoryNames = this.chartSetup.GetSeriesName(chartType, "category")
    this.availableCategoryNames = [];
    this.availableLabelNames = this.chartSetup.GetSeriesName(chartType, "label")
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
      this.UpdateSeriesList(chartData)
    }
    if(chartData.xaxis && chartData.xaxis.categories){
      this.categoryList.push(...chartData.xaxis.categories);
    }
    if(chartData.labels){
      this.labelList.push(...chartData.labels)
    }
    this._chartSetupData = chartData
  }

  /**
   * to set the seriesList (different for different chart types)
   * @param chartData chart data
   */
  UpdateSeriesList(chartData){
    if(chartData.chartType == 'Bar'){
      this.seriesList.push(...chartData.series);
    }
    else if(chartData.chartType == 'Pie'){

      let dataToPush : SeriesData = {
        name : this.addedSeries.name,
        data : this.addedSeries.data
      }
      dataToPush.data = chartData.series;
      // TODO: Harcoding here, Pie object does not contain series object @pall97
      dataToPush.name = 'Teams'
      this.seriesList.push(dataToPush)
      
    }
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
        if (this._chartObject.chartType == "Pie"){
          this._chartSetupData.series = dataToPush.data
          this.seriesList.push(dataToPush)
        }
      }
      else if(dataType == 'category'){
        this._chartSetupData.xaxis.categories = dataToPush.data;
        this.categoryList.push(dataToPush)
        this.availableCategoryNames.push(dataToPush.name)
      }
      else
      if (dataType == 'label'){
        this._chartSetupData.labels = dataToPush.data;
        this.labelList.push(dataToPush)
        this.availableLabelNames.push(dataToPush.name)
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

