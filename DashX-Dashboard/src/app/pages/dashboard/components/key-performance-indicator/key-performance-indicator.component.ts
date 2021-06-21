import { Component, Input, OnInit } from '@angular/core';
import { KPI } from "../../component-classes";
import { KpiData } from "../../models"

@Component({
  selector: 'app-kpi',
  templateUrl: './key-performance-indicator.component.html',
  styleUrls: ['./key-performance-indicator.component.css']
})
export class KeyPerformanceIndicatorComponent implements OnInit {

  kpi : KPI
  @Input() kpiData: KpiData
  kpiColor = 'green'

  constructor() { }

  ngOnInit(): void {
    this.kpi = new KPI(this.kpiData.name, this.kpiData.metric, this.kpiData.icon);
  }

}
