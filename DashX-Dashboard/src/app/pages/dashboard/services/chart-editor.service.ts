import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ChartEditorService {
  private isEditorOpen = new BehaviorSubject<boolean>(false);
  isEditorOpen_current = this.isEditorOpen.asObservable();

  ToggleEditor(isEditorOpen:boolean){
    this.isEditorOpen.next(isEditorOpen);
  }

  constructor() { }
}
