import { Injectable } from '@angular/core';
import { PieChartData } from '../models/PieChartData';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  public loadPieChartData(): PieChartData{
    return{
      series: [44, 55, 13, 43, 22],
      labels:["Team A", "Team B", "Team C", "Team D", "Team E"]
    };
  }
}
