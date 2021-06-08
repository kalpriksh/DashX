import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { CreateDashboardComponent } from '../../components/create-dashboard/create-dashboard.component';



@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
  dashboardList = [{content : "Dashboard 1", color : "blue"},{content : "Dashboard 2", color : "blue"}]
  constructor(private _router : Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OpenDashboard(){
    this._router.navigateByUrl('/dashboard/current')
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateDashboardComponent), dialogConfig;
  }
}
