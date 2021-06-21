import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseChart } from "../base";

@Injectable({
  providedIn: 'root'
})
export class ChartEditorService {

  private isEditorOpen = new BehaviorSubject<[boolean,string]>([false, '']);
  isEditorOpen_current = this.isEditorOpen.asObservable();

  private editorData
  editorData_current

  ToggleEditor(isEditorOpen:boolean, chartID : string){
    this.isEditorOpen.next([isEditorOpen, chartID]);
  }

  /**
   * (observed function) contains the entire chart data
   * @param editorData includes the entire chart data 
   */
  EditorDataUpdated(editorData){
    this.editorData.next(editorData);
  }

  /**
   * to generate unique ids for graphs
   * @returns unique id
   */
  UID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  constructor() {
    this.editorData = new BehaviorSubject<any>(null)
    this.editorData_current = this.editorData.asObservable()
  }
}
