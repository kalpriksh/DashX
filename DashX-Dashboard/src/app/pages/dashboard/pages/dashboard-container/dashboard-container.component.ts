
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GridsterModule } from 'angular-gridster2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  description: string;
}
//gridster
import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable} from 'angular-gridster2';
import { Dashboard } from '../../models';
import { DashboardService } from '../../services';
import { AppConfig } from '../../services/app-config.service';
import { AddDashboardComponent } from '../../components/add-dashboard/add-dashboard.component';

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
  _dashboard : Dashboard ;
  title: string;
  description: string;

  dashboardList = [
    {
      content : "Sales",
      description : "Description",
      color : "blue",
      position : {
        rows : 3,
        cols : 3,
        x : 0,
        y : 0
      }
    }
  ]


  constructor(private _router : Router, private dashboardService: DashboardService, public dialog: MatDialog) { 

    this._dashboard = dashboardService.loadDashboardData();
    //toggle demo charts
    if(AppConfig.settings.variables.demoChartVisible)
    {
      this._dashboard.charts = [];
    }
    
  }
  
  ngOnInit() {

   //#region gridster init
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 10,
      maxCols: 25,
      minRows: 8,
      maxRows: 25,
      maxItemCols: 500,
      minItemCols: 1,
      maxItemRows: 500,
      minItemRows: 1,
      maxItemArea: 200,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 50,
      fixedRowHeight: 50,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: false, east: false, south: false, west: false},
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
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
openCreateDashboardDialog(): void {

}
  SaveDashboardContaine(){
    /**
     * creates dashboard object
     * returns the object to be saved
     */
  }


  openDialog(): void {
    
    console.log('Hi');
    const dialogRef = this.dialog.open(AddDashboardComponent, {
      width: '250px',
      data: {title: this.title, description: this.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.title = result.title;
      this.description = result.description;
    });
  }

}

