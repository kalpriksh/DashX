import { Component, OnInit } from '@angular/core';
import { ChartEditorService } from '../../services'
import {trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.css'],
  animations: [
    trigger('chartEditorAnimate', [
      state('show', style({
        opacity : 1,
        visibility : 'visible',
        display : 'block'
      })),
      state('hide', style({
        opacity : 0,
        visibility : 'hidden',
        display:'none'
      })),
      transition('show<=>hide', [
        style({ display: 'block' }), 
        animate('200ms ease')
      ])
    ])
  ]
})
export class ChartEditorComponent implements OnInit {
  
  editorState : [boolean, string];
  isEditorOpen
  
  get stateName() : string {
    return this.isEditorOpen ? 'show':'hide';
  }

  constructor(private chartEditorService : ChartEditorService) { }

  ngOnInit(): void {

    //subscripton to chartEditor service
      this.chartEditorService.isEditorOpen_current.subscribe(_editorState => {
      this.editorState = _editorState
      this.isEditorOpen = _editorState[0]
    })
  }

  closeEditor()
  {
    this.isEditorOpen = !this.isEditorOpen
    //TODO handle chartID in case when editor is close via close button
    this.chartEditorService.ToggleEditor(this.isEditorOpen, "-999")
  }

}
