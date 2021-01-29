import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartEditorService } from '../../services'

@Component({
  selector: 'app-chart-setup',
  templateUrl: './chart-setup.component.html',
  styleUrls: ['./chart-setup.component.css']
})
export class ChartSetupComponent implements OnInit {
  
  panelOpenState = true;

  // bind SetupData to the UI
  SetupData

  constructor(private data : ChartEditorService){}

  ngOnInit(){
    this.data.editorData_current.subscribe(chartData => this.SetupData = chartData)
    console.log(this.SetupData);
    
  }

  EnterSubmit(event, form){

    if (event.keyCode === 13) {
      this.data.EditorDataUpdated(this.SetupData)
    }
    
  }

}

