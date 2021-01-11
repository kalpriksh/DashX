import { Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, MaxLengthValidator,NgForm } from '@angular/forms';
import { InputForOptionSelector } from '../../models/chartOptions';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit{
  
  ChartOptions : InputForOptionSelector = {
    chart : {
      height : 0
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

    stroke : {
      show : false,
      width : 0
    },

    dataLabels : {
      enabled : false
    }

  }
  
  optionsVisible : boolean
  $formChanges

  @Input() defaultChartOptions
  @Output() optionChanged = new EventEmitter<any>(); 
  @Output() toggleOptions = new EventEmitter<any>();

  @ViewChild('optionSelectorForm', { static: true }) optionSelectorForm: NgForm;
  
  
  // constructor
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(){

    this.optionsVisible = true

    //initialize options
    this.InitDefaults();

    //subscribe to form value change event
    this.$formChanges = this.optionSelectorForm.form.valueChanges.subscribe(this.UpdateOptions);1
    }

  //#region component methods
  
  InitDefaults(){
    this.ChartOptions.chart.height = this.defaultChartOptions.chart.height != null ? this.defaultChartOptions.chart.height : 0;
    this.ChartOptions.grid.xaxis.lines.show = this.defaultChartOptions.grid.xaxis.lines.show != null ? this.defaultChartOptions.grid.xaxis.lines.show : false;
    this.ChartOptions.grid.yaxis.lines.show = this.defaultChartOptions.grid.yaxis.lines.show != null ? this.defaultChartOptions.grid.yaxis.lines.show : false;
    this.ChartOptions.stroke.show = this.defaultChartOptions.stroke.show != null ? this.defaultChartOptions.stroke.show : false; 
    this.ChartOptions.stroke.width = this.defaultChartOptions.stroke.width != null ? this.defaultChartOptions.stroke.width : 0;
    this.ChartOptions.dataLabels.enabled = this.defaultChartOptions.dataLabels.enabled != null ? this.defaultChartOptions.dataLabels.enabled : false;
  }

  //listens to the form changeValue event and update the chart options
  UpdateOptions(){
    this.optionChanged.emit(this.ChartOptions);
  }
  
  //function to emit event to hide or show Options
  ToggleOptions(clickEvent){
    this.optionsVisible = !(this.optionsVisible)
    this.toggleOptions.emit(clickEvent);
  }

  //#endregion

}
