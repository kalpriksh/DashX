import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  dashboardList = [{content : "Dashboard 1", color : "blue"},{content : "Dashboard 2", color : "blue"}]
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  OpenDashboard(){
    this._router.navigateByUrl('/dashboard/current')
  }

}
