export class DashboardContainer{
  
  //#region Properties
  /**
   * contains the list of chart in the container
   */
  private _chartList : [];
  public get chartList() : [] {
    return this._chartList;
  }
  public set chartList(v : []) {
    this._chartList = v;
  }

  /**
   * contains the list of positions of the respective charts
   */
  private _chartPosition : [];
  public get chartPosition() : [] {
    return this._chartPosition;
  }
  public set chartPosition(v : []) {
    this._chartPosition = v;
  }
  
  //#endregion

  
  constructor(chartList, positionList) {
    this._chartList = chartList
    this._chartPosition = positionList
  }

}