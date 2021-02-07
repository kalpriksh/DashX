import { Component, Input, OnInit } from '@angular/core';
import { KPI } from "../../component-classes";

@Component({
  selector: 'app-kpi',
  templateUrl: './key-performance-indicator.component.html',
  styleUrls: ['./key-performance-indicator.component.css']
})
export class KeyPerformanceIndicatorComponent implements OnInit {

  kpi : KPI
  @Input() kpiIcon: string
  @Input() kpiMetric : string
  @Input() kpiName : string
  constructor() { }

  ngOnInit(): void {
    this.kpi = new KPI(this.kpiName,this.kpiMetric,this.kpiIcon);
    
  }

}
