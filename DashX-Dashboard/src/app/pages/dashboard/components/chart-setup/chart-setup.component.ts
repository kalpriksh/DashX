import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart-setup',
  templateUrl: './chart-setup.component.html',
  styleUrls: ['./chart-setup.component.css']
})
export class ChartSetupComponent implements OnInit {
  panelOpenState = true;
  value='';
  ngOnInit(){}

}

