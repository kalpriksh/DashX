import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  dashboardList = [{content : "Sales", description : "Description", color : "blue"},{content : "Inventory", description : "Description", color : "blue"}]
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  OpenDashboard(){
    this._router.navigateByUrl('/dashboard/current')
  }

}
