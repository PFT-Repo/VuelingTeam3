import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChartComponent,
  ChartFilterComponent,
  EmployeesByFunctionComponent,
  TableComponent,
} from './components';



@NgModule({
  declarations: [ ChartComponent,
    TableComponent, EmployeesByFunctionComponent,
    ChartFilterComponent,],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
