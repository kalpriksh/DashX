import { Component, OnInit } from '@angular/core';
import { ChartEditorService } from '../../services'

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.css']
})
export class ChartEditorComponent implements OnInit {
  
  panelOpenState = false;
  isEditorOpen : boolean;

  constructor(private data : ChartEditorService) { }

  ngOnInit(): void {
    this.data.isEditorOpen_current.subscribe(isOpen => this.isEditorOpen = isOpen )
  }

}
