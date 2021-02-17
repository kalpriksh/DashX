import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'
import { ChartSetup, PieChart, BarChart, BarChartOptions, PieChartOptions } from '../../component-classes';
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
  categoryNames : string[];
  labelList: string[];
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
      this.initVariables()
      this.LoadData(_chartObject)
      }
    )
    
    this.initVariables()
    this.chartSetup = new ChartSetup();
    this.chartTypesList = ["Bar","Line","Column","Map","Pie"]

  }
  
  initVariables(){
    this.seriesNames = ["null"];
    this.seriesList = [];
    this.categoryList = [];
    this.labelList = [];
  }

  test(event){
    this.UpdateChartSetup(event.value)
  }

   // updates the component UI
   UpdateChartSetup(chartType){
    this.seriesNames = this.chartSetup.GetSeriesName(chartType, "series")
    this.categoryNames = this.chartSetup.GetSeriesName(chartType, "category")
    this.labelList = this.chartSetup.GetSeriesName(chartType, "labels")
  }

  EnterSubmit(event, form){
    if (event.keyCode == 13) {
      this._chartObject.Defaults = this._chartSetupData
      this.chartData.EditorDataUpdated(this._chartObject)
    }
  }

  LoadData(chartObject){

    if(chartObject){

      if(chartObject.chartType == "Bar") {
        let _barChart : BarChart = chartObject
        let _chartData : Partial<BarChartOptions> = _barChart.chartData
        this.seriesList =  _chartData.series
        this.categoryList = _chartData.xaxis.categories
        this._chartSetupData = _chartData
      }
      else if(chartObject.chartType == "Pie"){
        let _pieChart : PieChart = chartObject
        let _chartData : Partial<PieChartOptions> = _pieChart.chartData
        this._chartSetupData = _chartData
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
    if (this._chartObject.chartType == "Bar")
    {
      this.addedSeries = this.barChart.CreateNewSeries(dataTypeName, this.chartSetup.GetSeriesData(this._chartObject.chartType, dataType, dataTypeName));
      // to prevent call by reference
      let dataToPush : SeriesData = {
        name : this.addedSeries.name,
        data : this.addedSeries.data
      } 
      if(dataType == 'series'){
        this._chartSetupData.series.push(dataToPush)
        this.seriesList.push(dataToPush)
      }
      else if(dataType == 'category'){
        this._chartSetupData.xaxis.categories = dataToPush.data;
        this.categoryList.push(dataToPush)
      }
    }
      if(this.chartTypeData == "Pie")
      {
        this.addedSeries = this.pieChart.CreateNewSeriesForPieChart(dataTypeName, this.chartSetup.GetSeriesData(this.chartTypeData, dataType, dataTypeName));
        // to prevent call by reference
        let dataToPush : PieChartData = {
          labels : this.addedSeries.labels,
          series : this.addedSeries.series
        } 
       if (dataType == 'category'){
          this._chartSetupData.xaxis.categories = dataToPush.labels;
          this.categoryList.push(dataToPush)
        }
        else
        if(dataType == 'series'){
          this._chartSetupData.series.push(dataToPush)
          this.seriesList.push(dataToPush)
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

