import { GridsterItem } from "angular-gridster2";

export interface Dashboard
{
  id : string,
  data : DashboardData,
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
  chartType : string,
  chartID : number,
  position : GridsterItem
  chartData : any
}

export interface DashboardData {
  title: string,
  description: string
}