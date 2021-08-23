import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dashboard',
  templateUrl: './create-dashboard.component.html',
  styleUrls: ['./create-dashboard.component.css']
})
export class CreateDashboardComponent implements OnInit {

  dashboardList = [{title : "Sales", description : "Description", color : "blue"}]
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  OpenDashboard(){
    this._router.navigateByUrl('/dashboard/current')
  }
}
