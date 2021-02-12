import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'
import { ChartSetup, PieChart, BarChart } from '../../component-classes';
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

  //#region classes
  chartSetup : ChartSetup;
  barChart : BarChart;
  pieChart: PieChart;
  //#endregion

  //#region UI variables
  seriesNames : string[];
  categoryNames : string[];
  labels: string[];
  addedSeries : any;
  seriesList : any[];
  categoryList : any[];
  chartType : string; //test variable
  //#endregion

  chartObject

  constructor(private chartData : ChartEditorService){}

  ngOnInit(){
    this.barChart = new BarChart();
    this.pieChart = new PieChart();
    
    this.chartData.editorData_current.subscribe(_chartObject =>{
      if(_chartObject){

        this._chartSetupData = _chartObject.GetDefaults()
        this.chartObject = _chartObject 
        console.log(_chartObject.GetDefaults());
      } 
      else
      if(this.chartType == "Bar") {
        this._chartSetupData = this.barChart.GetDefaults()}

      else if(this.chartType == "Pie"){
        this._chartSetupData = this.pieChart.GetDefaults();}
      }
    )
    
    this.seriesNames = ["null"]
    this.seriesList = []
    this.categoryList = []
    this.chartSetup = new ChartSetup()
  }

  test(event){
    console.log(event);
    this.UpdateChartSetup(event.value)
  }

  EnterSubmit(event, form){
    if (event.keyCode == 13) {
      this.chartObject.Defaults = this._chartSetupData
      this.chartData.EditorDataUpdated(this.chartObject)
    }
  }

  // updates the component UI
  UpdateChartSetup(chartType){
    this.seriesNames = this.chartSetup.GetSeriesName(chartType, "series")
    this.categoryNames = this.chartSetup.GetSeriesName(chartType, "category")
    this.labels = this.chartSetup.GetSeriesName(chartType, "labels")
  }

  AddData(dataTypeName : string, dataType : string){
    /**
     * adds series/category to the ui    
     * adds series/categot to the chartData object
     */
    // default case
    if(dataTypeName == "null"){
      alert("need to add data file")
    }
    else 
    if (this.chartType == "Bar")
    {  
      this.addedSeries = this.barChart.CreateNewSeries(dataTypeName, this.chartSetup.GetSeriesData(this.chartType, dataType, dataTypeName));
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
      if(this.chartType == "Pie")
      {
        this.addedSeries = this.pieChart.CreateNewSeriesForPieChart(dataTypeName, this.chartSetup.GetSeriesData(this.chartType, dataType, dataTypeName));
        // to prevent call by reference
        let dataToPush : PieChartData = {
          labels : this.addedSeries.labels,
          series : this.addedSeries.series
        } 
       if (dataType == 'category'){
          this._chartSetupData.xaxis.categories = dataToPush.data;
          this.pieCategoryList.push(dataToPush)
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
      this.chartObject.Defaults = this._chartSetupData
      this.chartData.EditorDataUpdated(this.chartObject)
    }

  SaveChartData(){
    /**
     * saves chartData to DB
     */
  }

}

