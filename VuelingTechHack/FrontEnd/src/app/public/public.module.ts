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
import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  NativeDateAdapter,
} from '@angular/material/core';
import { DataModule } from '@data/src/public-api';

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
    MatNativeDateModule,
    DataModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: NativeDateAdapter },
  ],
})
export class PublicModule {}
