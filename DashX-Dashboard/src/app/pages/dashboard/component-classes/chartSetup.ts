import { DataHandler } from "../helpers";
import { WorkBook } from "xlsx"
import { SeriesData } from '../models';
import { CategoryData } from '../models';
import { BarChart } from "../component-classes/barChart"
import { PieChart } from "../component-classes/pieChart"

// class for chart setup component
export class ChartSetup {

    private barChart : BarChart
    private pieChart : PieChart
    private DataHandler : DataHandler

    //#region properties

    private _seriesNames : string[];
    public get seriesNames() : string[] {
        return this._seriesNames;
    }
    public set seriesNames(v : string[]) {
        this._seriesNames = v;
    }
    
    
    private _seriesList : SeriesData[];
    public get seriesList() : SeriesData[] {
        return this._seriesList;
    }
    public set seriesList(v : SeriesData[]) {
        this._seriesList = v;
    }
    
    private _categoryList : CategoryData[];
    public get categoryList() : CategoryData[] {
        return this._categoryList;
    }
    public set categoryList(v : CategoryData[]) {
        this._categoryList = v;
    }
    
    //#endregion

    constructor() {
        this.DataHandler = new DataHandler()

        // init charts to handle different charts
        this.barChart = new BarChart();
        this.pieChart = new PieChart();
    }

    //#region functions related to series
    // functionality changes wrt to type of graph should be handled here 

    // to get series available as input for the chart
    GetSeriesName(chartType : string, dataType : string){
        return this.DataHandler.GetKeys(chartType, dataType)
    }

    // to get data for a series based on series name 
    GetSeriesData(chartType : string, dataType : string, name : string){
        return this.DataHandler.GetValuesAll(chartType, dataType, name)
    }

    //#endregion
}    