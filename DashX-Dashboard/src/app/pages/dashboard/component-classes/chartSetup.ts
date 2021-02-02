import { DataHandler } from "../helpers";
import { WorkBook } from "xlsx"
import { SeriesData } from '../models';


// class for chart setup component
export class ChartSetup {

    private DataHandler : DataHandler
    constructor(WorkBook : WorkBook) {
        this.DataHandler = new DataHandler(WorkBook)
    }

    //#region functions related to series
    // functionality changes wrt to type of graph should be handled here 

    // to get series available as input for the chart
    GetSeriesName(){
        return this.DataHandler.GetKeys()
    }

    // to get data for a series based on series name 
    GetSeriesData(name : string){
        return this.DataHandler.GetValuesAll(name)
    }

    //#endregion
}    