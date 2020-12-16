import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit{
  
  chartOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  isGridControl = new FormControl(false);
  gridXAxisControl = new FormControl(false);
  gridYAxisControl = new FormControl(false);
  labelControl = new FormControl(false);
   

  @Output() optionChanged = new EventEmitter<any>(); 

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {

    this.chartOptions = this.fb.group({
      XGrid : this.gridXAxisControl,
      YGrid : this.gridYAxisControl,
      labels : this.labelControl
    });

    this.chartOptions.valueChanges.subscribe(()=>{
      this.optionChanged.emit(this.chartOptions.value);
    })
  }

}
