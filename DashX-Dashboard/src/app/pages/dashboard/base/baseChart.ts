//this abstract class should be inherited by all the chart classes
export class BaseChart{

    
    //#region properties
    private _chartType : string;
    public get chartType() : string {
        return this._chartType;
    }
    public set chartType(v : string) {
        this._chartType = v;
    }
    
    
    private _chartId : number;
    public get chartId() : number {
        return this._chartId;
    }
    public set chartId(v : number) {
        this._chartId = v;
    }
    //#endregion
    
    // ctor
    constructor(){}

    // to get the defaults for the chart
    GetDefaults(){}

    // to check if data is complete wrt to the chart being used
    DataComplete(){}

    // to create new series for the data
    CreateNewSeries(name : string, data : []){}
    CreateNewSeriesForPieChart(name : number[], data : []){}
}