
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GridsterModule } from 'angular-gridster2';

//gridster
import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable} from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}


@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
 //gridster properties
 options: GridsterConfig;
 dashboard: Array<GridsterItem>;
  dashboardList = [{content : "Sales", description : "Description", color : "blue"},{content : "Inventory", description : "Description", color : "blue"}]
  constructor(private _router : Router) { }

  ngOnInit() {
    this.options = {
      itemChangeCallback: DashboardContainerComponent.itemChange,
      itemResizeCallback: DashboardContainerComponent.itemResize
    };
  }
//#region gridster static methods 
static itemChange(item, itemComponent) {
  console.info('itemChanged', item, itemComponent);
}

static itemResize(item, itemComponent) {
  console.info('itemResized', item, itemComponent);
}
 //#region gridster methods
 changedOptions(): void {
  if (this.options.api && this.options.api.optionsChanged) {
    this.options.api.optionsChanged();
  }
}

removeItem($event: MouseEvent | TouchEvent, item): void {
  $event.preventDefault();
  $event.stopPropagation();
  this.dashboard.splice(this.dashboard.indexOf(item), 1);
}

addItem(): void {
  this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
}


  OpenDashboard(){
    this._router.navigateByUrl('/dashboard/current')
  }

  SaveDashboardContaine(){
    /**
     * creates dashboard object
     * returns the object to be saved
     */
  }

}
