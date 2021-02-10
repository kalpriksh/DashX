import { Component, OnInit } from '@angular/core';
import { ChartEditorService } from '../../services'

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.css']
})
export class ChartEditorComponent implements OnInit {
  
  editorState : [boolean, number];
  isEditorOpen

  constructor(private data : ChartEditorService) { }

  ngOnInit(): void {

    //subscripton to chartEditor service
     this.data.isEditorOpen_current.subscribe(_editorState => {
      this.editorState = _editorState
      this.isEditorOpen = _editorState[0]
    })

  }

}
