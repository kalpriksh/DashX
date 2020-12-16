import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.css']
})
export class OptionSelectorComponent implements OnInit{

  myForm : FormGroup
  constructor(private fb : FormBuilder){

  }
  ngOnInit(){
    this.myForm = this.fb.group({
      firstName : '',
      comment : ''
    })
    // this.myForm.valueChanges.subscribe(console.log) // subscribe to change event
  }
}
