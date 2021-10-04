import { GridsterItem } from "angular-gridster2";

export interface Dashboard
{
  id : string,
  data : DashboardObject,
  color : string,
  position : {
    rows : number,
    cols : number,
    x : number,
    y : number
  }
  charts : ChartObject[]
}

export interface ChartObject
{
  dataSource: any,
  table: any
  chartType : string,
  chartID : number,
  position : GridsterItem
  chartData : any
}

export interface DashboardObject {
  title: string,
  description: string
}