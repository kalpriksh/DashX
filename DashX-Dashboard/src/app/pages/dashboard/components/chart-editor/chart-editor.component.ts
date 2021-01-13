import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-editor',
  templateUrl: './chart-editor.component.html',
  styleUrls: ['./chart-editor.component.css']
})
export class ChartEditorComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
