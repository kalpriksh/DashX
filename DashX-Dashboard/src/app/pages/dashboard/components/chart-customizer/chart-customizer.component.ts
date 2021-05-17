import { Component, OnInit } from '@angular/core';
import { ChartEditorService } from '../../services';
import {
  ApexOptions
} from "ng-apexcharts";

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { timeHours } from 'd3';

@Component({
  selector: 'app-chart-customizer',
  templateUrl: './chart-customizer.component.html',
  styleUrls: ['./chart-customizer.component.css']
})
export class ChartCustomizerComponent implements OnInit {

  _chartObject
  _chartData : Partial<ApexOptions>

  panelOpenState
  optionsVisible
  
  ChartOptionsForm : FormGroup
  constructor( private chartEditorService : ChartEditorService, private fb : FormBuilder)
  { 
    this.ChartInit();
    this.ChartOptionsForm = fb.group({
      showXAxisLines : false,
      showYAxisLines : false
    })

  }

  ngOnInit(): void {
    
    this.panelOpenState = false
    this.optionsVisible = true
    
    this.chartEditorService.editorData_current.subscribe(chartObject =>{
      if(chartObject)
        {
          this._chartObject = chartObject;
          this._chartData = chartObject.chartData;

          //update form values
          this.ChartOptionsForm.patchValue({
            showXAxisLines : this._chartData.grid.xaxis.lines.show,
            showYAxisLines : this._chartData.grid.yaxis.lines.show
          }, {emitEvent : false});
        
        }
    })
    //subscribe to form value change event
    this.OnFormUpdate()
  }

  OnFormUpdate() : void
  {
    this.ChartOptionsForm.valueChanges.subscribe(formValues => {
      //update chart options
      this.UpdateChartOptions(formValues)

      //emit chart options
      this._chartObject.chartData = this._chartData;
      this.chartEditorService.EditorDataUpdated(this._chartObject);
    })
  }

  UpdateChartOptions(formValues)
  {
    this._chartData.grid.xaxis.lines.show = formValues.showXAxisLines;
    this._chartData.grid.yaxis.lines.show = formValues.showYAxisLines;
  }

  ChartInit()
  {
    this._chartData = {
      chart : {
        type : "bar",
        height : "0"
      },
      grid : {
        xaxis : {
          lines : {
            show : false 
          }
        },
        yaxis : {
          lines : {
            show : false 
          }
        }
      },
      dataLabels : {
        enabled : false
      },
      stroke : {
        show : false, 
        width : 0
      }
    }
  }
}
