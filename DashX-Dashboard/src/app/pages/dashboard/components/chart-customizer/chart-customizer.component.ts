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
      showYAxisLines : false,
      chartHeight : 0,
      showDataLabels : false,
      showStroke : false,
      strokeWidth: 0
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
          this.ChartOptionsForm.patchValue(
            this.CreateChartOptionsFormObject(this._chartObject.chartType), {emitEvent : false});
        }
    })
    //subscribe to form value change event
    this.OnFormUpdate()
  }

  CreateChartOptionsFormObject(chartType)
  {
    if(chartType.toLowerCase() == 'bar')
    {
        return {
        showXAxisLines : this._chartData.grid.xaxis.lines.show,
        showYAxisLines : this._chartData.grid.yaxis.lines.show,
        chartHeight : this._chartData.chart.height,
        showDataLabels : this._chartData.dataLabels.enabled,
        showStroke : this._chartData.stroke.show ?? false,
        strokeWidth : this._chartData.stroke.width ?? 0
      }}
      else
      if(chartType.toLowerCase() == 'line')
      {
          return {
          chartHeight : this._chartData.chart.height,
          showDataLabels : this._chartData.dataLabels.enabled,
          showStroke : this._chartData.stroke.show ?? false,
          strokeWidth : this._chartData.stroke.width ?? 0
        }
    }
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
    //grid
   
    this._chartData.grid.xaxis.lines.show = formValues.showXAxisLines;
    this._chartData.grid.yaxis.lines.show = formValues.showYAxisLines;

    //stroke
    this._chartData.stroke.show = formValues.showStroke;
    this._chartData.stroke.width = formValues.strokeWidth;
    
    this._chartData.chart.height = formValues.chartHeight;
    this._chartData.dataLabels.enabled = formValues.showDataLabels;

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
