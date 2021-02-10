import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseChart } from "../base";

@Injectable({
  providedIn: 'root'
})
export class ChartEditorService {

  private isEditorOpen = new BehaviorSubject<[boolean,number]>([false, 0]);
  isEditorOpen_current = this.isEditorOpen.asObservable();

  private editorData
  editorData_current

  ToggleEditor(isEditorOpen:boolean, chartID : number){
    this.isEditorOpen.next([isEditorOpen, chartID]);
  }

  EditorDataUpdated(editorData){
    this.editorData.next(editorData);
  }

  constructor() {
    /*
      for bar chart
      currently default observable value is barChart's default
     */
    this.editorData = new BehaviorSubject<any>(null)
    this.editorData_current = this.editorData.asObservable()
  }
}
