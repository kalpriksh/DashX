import { SeriesData } from '../models';
import { CategoryData } from '../models';
import { BarChart } from "../component-classes/barChart"
import { PieChart } from "../component-classes/pieChart"
import { LineChart } from "../component-classes/lineChart"
import { LabelData } from "../models/labelData";
import { DataHandlerService } from '../services/data-handler.service';

// class for chart setup component
export class ChartSetup {

    private barChart : BarChart
    private pieChart : PieChart
    private lineChart : LineChart
    
    //#region properties
    //#endregion

    constructor(private dataHandler : DataHandlerService) {
        // init charts to handle different charts
        this.barChart = new BarChart();
        this.pieChart = new PieChart();
        this.lineChart = new LineChart();
    }

    //#region functions related to series
    // functionality changes wrt to type of graph should be handled here 

    // to get series available as input for the chart
    GetSeriesName(){
        return this.dataHandler.GetHeaders()
    }

    // to get data for a series based on series name 
    GetSeriesData(chartType : string, dataType : string, name : string){
        return this.dataHandler.GetHeaderValue(chartType, dataType, name)
    }

    // to create category data used by chart-setup component
    CreateCategoryData(categoryName, categoryData) : CategoryData{
      var category : CategoryData = {
        name : categoryName,
        data : categoryData
      };
      return category;
    }

    //#endregion
}    