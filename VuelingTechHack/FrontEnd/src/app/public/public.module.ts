import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';
import {
  ChartComponent,
  ChartFilterComponent,
  EmployeesByFunctionComponent,
  TableComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ChartComponent,
    TableComponent,
    DashboardComponent,
    EmployeesByFunctionComponent,
    ChartFilterComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
