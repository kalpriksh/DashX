
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
import { Dashboard, DashboardObject } from '../../models';
import { ChartEditorService, DashboardService } from '../../services';
import { AppConfig } from '../../services/app-config.service';
import { AddDashboardComponent } from '../add-dashboard/add-dashboard.component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

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
  _dashboard : DashboardObject ;
  title: string;
  description: string;
  deleteDashboard: any;
 // dashboardList: Dashboard;

  dashboardList = []
  


  constructor(private editorData : ChartEditorService, private _router : Router, private dashboardService: DashboardService, public dialog: MatDialog ) { 
   
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
DeleteDashboard(dashboardId){
this.dashboardList = this.dashboardList.filter(dashboard => dashboard.id != dashboardId);
}

openDeleteDialog(dashboardId): void {
  const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
  });
  dialogRef.afterClosed().subscribe(result => {
 if(result)
{
  this.DeleteDashboard(dashboardId)
}
});
}


addItem(): void {
  this.dashboard.push({x: 0, y: 0, cols: 3, rows: 3});
}
openCreateDashboardDialog(): void {

}
OpenDashboard(){
  this._router.navigateByUrl('/dashboard/current')
}
AddDashboard(result)
{
  result.id = this.editorData.UID();
  result.color = "blue"
  result.position = {
    rows : 3,
    cols : 3,
    x : 0,
    y : 0
  }
  this.dashboardList.push(result);
  this.title = this.description = null;
}


OpenAddDashboardDialog(dashboardId): void {

    const dialogRef = this.dialog.open(AddDashboardComponent, {
      data: {title: this.title, description: this.description}
    })
  
    ;
    
    dialogRef.afterClosed().subscribe(result => {
    
      if(result)
      {
        if(dashboardId != null)
        {
          this.dashboardList.find(item => item.id === dashboardId && (item.title = result.title || item.title, item.description = result.description || item.description, true));
        }
        else{ 
      this.title = result.title;
      this.description = result.description;
      this.AddDashboard(result);
      }
    }
    });
  }

}

