import { GridsterItem } from "angular-gridster2";

export interface Dashboard
{
  charts : DashboardObject[]
}

export interface DashboardObject
{
  chartType : string,
  chartID : number,
  position : GridsterItem
  chartData : any
}