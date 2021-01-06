import { BOOL_TYPE, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, MaxLengthValidator,NgForm } from '@angular/forms';
import { ChartOptions } from '../../models/chartOptions';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit{
  
  testChartOptions
  chartOptions_dash: Partial<ChartOptions>;
  $formChanges

  @Input() defaultChartOptions
  @Output() optionChanged = new EventEmitter<any>(); 

  @ViewChild('optionSelectorForm', { static: true }) optionSelectorForm: NgForm;
  
  constructor(private fb: FormBuilder) {
  }

  //listens to the form changeValue event and update the chart options
  updateOptions(testForm){
    // console.log(testForm);
    console.log(this.testChartOptions); 
    this.optionChanged.emit(this.testChartOptions);
  }

  ngOnInit(){
    
    this.testChartOptions = this.defaultChartOptions

    

    this.$formChanges = this.optionSelectorForm.form.valueChanges.subscribe(x => {
      setTimeout(() => {
      })
      console.log(this.testChartOptions);

    })

    
    console.log(this.defaultChartOptions);
  }

}
