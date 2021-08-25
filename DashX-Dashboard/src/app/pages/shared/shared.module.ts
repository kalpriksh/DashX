import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routingComponents } from "../../app-routing.module";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [SidenavComponent,HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DashboardModule
  ],
  exports: [
    SidenavComponent,
    HeaderComponent  
  ]
})
export class SharedModule { }
