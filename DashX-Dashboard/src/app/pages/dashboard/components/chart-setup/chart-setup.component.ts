import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';
import { ChartSetup, PieChart, BarChart, BarChartOptions, PieChartOptions, LineChart, LineChartOptions } from '../../component-classes';
import { CategoryData, PieChartData, SeriesData } from '../../models';

import { ChartEditorService, } from '../../services'
import { DataHandlerService } from '../../services/data-handler.service';

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
  availableCategoryNames: CategoryData[];
  availableLabelNames: any[];
  labelNames : any[];
  labelList: any[];
  addedSeries : any;
  seriesList : any[];
  categoryList : any[];
  chartTypeData : string; //test variable
  chartTypesList : string[];
  updatedCategory : string;
  updatedSeriesOption : string[] = [''];
  updatedCategoryOption : string[] = [''];
  //#endregion

  constructor(private chartData : ChartEditorService, private dataHandler : DataHandlerService){
    this.chartSetup = new ChartSetup(this.dataHandler);
  }

  ngOnInit(){
    this.barChart = new BarChart();
    this.pieChart = new PieChart();
    
        
    this.chartData.editorData_current.subscribe(_chartObject =>{
      this.Reset()
      this.LoadData(_chartObject)
    }
    )

    this.Reset()
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
    this._chartSetupData.xaxis.categories = []
    this._chartObject.chartData = this._chartSetupData
    this.chartData.EditorDataUpdated(this._chartObject)
  }

  DeleteLabel(deletedLabel)
  {    
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

  // updates the component UI
  UpdateChartSetup(){
    this.seriesNames = this.categoryNames = this.availableLabelNames = this.labelNames = this.
    chartSetup.GetSeriesName();
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

      this.availableCategoryNames = [];

      if(chartData.xaxis.categories.length != 0)
      {
        var category = this.chartSetup.CreateCategoryData("cat-1", chartData.xaxis.categories)
        this.availableCategoryNames.push(category);
      }

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
    if(chartData.chart.type.toUpperCase() == this.barChart.chartType.toUpperCase()){
      this.seriesList.push(...chartData.series);
    }
    else if(chartData.chartType.toUpperCase() == this.pieChart.chartType.toUpperCase()){

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
  
  /**
   * function to update an orginal field(category/series) with selected one 
   * @param updated updated field value
   * @param original original field value
   * @param fieldType type of field value (....can be series, category..)
   */
  UpdateField(updated, original, fieldType)
  {
    if(fieldType == "series" || fieldType == "category")
    {
      this.DeleteSeries(original);
      this.AddData(updated, fieldType);
    }
    else if(fieldType == "label")
    {

    }

  }

  LoadData(chartObject){
    
    //load data from connected DB 
    this.UpdateChartSetup();

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
        // this.availableCategoryNames.push(dataToPush.name)
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

