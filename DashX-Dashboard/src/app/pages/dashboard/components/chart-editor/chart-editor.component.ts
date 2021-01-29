import { Component, OnInit } from '@angular/core';
import { ChartEditorService } from '../../services'

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.css']
})
export class ChartEditorComponent implements OnInit {
  
  isEditorOpen : boolean;

  //data which can be modified by the user
  EditorData

  constructor(private data : ChartEditorService) { }

  ngOnInit(): void {
    // subscripton to chartEditor service
    this.data.isEditorOpen_current.subscribe(isOpen => this.isEditorOpen = isOpen )
    this.data.editorData_current.subscribe( chartData => this.EditorData = chartData )

    //sharing data with child components i.e chart-setup | option-editor
  }

}
