import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
<<<<<<< HEAD
import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule, SharedModule],
=======
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';
import {
  ChartComponent,
  EmployeesByFunctionComponent,
  TableComponent,
} from './components';


@NgModule({
  declarations: [
    LoginComponent,
    ChartComponent,
    TableComponent,
    DashboardComponent,
    EmployeesByFunctionComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
  ],
>>>>>>> main
})
export class PublicModule {}
