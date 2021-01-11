import { Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, MaxLengthValidator,NgForm } from '@angular/forms';
import { ChartOptions } from '../../models/chartOptions';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit{
  
  ChartOptions
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
    this.ChartOptions = this.defaultChartOptions
    this.optionsVisible = true

    this.$formChanges = this.optionSelectorForm.form.valueChanges.subscribe(this.UpdateOptions);
    }

  //#region component methods

  //listens to the form changeValue event and update the chart options
  UpdateOptions(){
    this.optionChanged.emit(this.ChartOptions);
  }
  
  // function to emit event to hide or show Options
  ToggleOptions(clickEvent){
    this.optionsVisible = !(this.optionsVisible)
    this.toggleOptions.emit(clickEvent);
  }

  //#endregion

}
