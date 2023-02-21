import { Component } from '@angular/core';
import { EmployeesByFunctionConfig } from '../../components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  employeesByFunction: EmployeesByFunctionConfig = {
    title: 'Empleados por función',
    labels: ['Jardinera', 'Equipaje', 'Coordinación'],
    data: [12, 25, 2],
    datasetLabel: 'Total de Empleados',
  };
}
