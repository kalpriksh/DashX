import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './pages/dashboard/pages/dashboard-container/dashboard-container.component';
import { ChartsContainerComponent } from './pages/dashboard/components/charts-container/charts-container.component';


const routes: Routes = [
  {path: 'dashboard/all', component : DashboardContainerComponent},
  {path: 'dashboard/current', component : ChartsContainerComponent},
  {
    path: "",
    redirectTo: '/dashboard/all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardContainerComponent, ChartsContainerComponent]