import { DashboardObject } from "../../models";

export interface IAppConfig
{
  env : {
    name : string
  },
  variables : {
    demoChartVisible : boolean
  }
}