import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { BarChartOptions, BarChart } from '../component-classes' 

@Injectable({
  providedIn: 'root'
})
export class ChartEditorService {

  barchart : BarChart
  private isEditorOpen = new BehaviorSubject<boolean>(false);
  isEditorOpen_current = this.isEditorOpen.asObservable();

  private editorData
  editorData_current

  ToggleEditor(isEditorOpen:boolean){
    this.isEditorOpen.next(isEditorOpen);
  }

  EditorDataUpdated(editorData){
    this.editorData.next(editorData);
  }

  constructor() {
    /*
      for bar chart
      currently default observable value is barChart's default
     */
    this.barchart = new BarChart();
    this.editorData = new BehaviorSubject<Partial<BarChartOptions>>(this.barchart.GetDefaults());
    this.editorData_current = this.editorData.asObservable();

  }
}
