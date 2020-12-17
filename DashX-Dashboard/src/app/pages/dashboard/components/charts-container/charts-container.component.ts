import { DashboardService } from "../../services";
import { Component, OnInit } from '@angular/core';
import { LineChartData, PieChartData, BarGraphData } from '../../../models';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})
export class ChartsContainerComponent implements OnInit {
  
  public lineChartData: LineChartData;
  public pieChartData: PieChartData;
  public barGraphData: BarGraphData;

  constructor(private service: DashboardService) {
    this.lineChartData = this.service.loadLineChartData();
    this.pieChartData = this.service.loadPieChartData();
    this.barGraphData = this.service.loadBarGraphData();
   }

  ngOnInit(): void {
  }

}
