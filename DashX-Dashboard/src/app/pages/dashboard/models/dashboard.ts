export interface Dashboard
{
  charts : DashboardObject[]
}

export interface DashboardObject
{
  chartType : string,
  chartID : number,
  position : {
    col : number,
    row : number
  },
  chartData : any
}