import { Component, OnInit } from '@angular/core';
import { ListOfFlights } from '@data/src/lib/models';
import { DataService } from '@data/src/lib/services';
import { Observable } from 'rxjs';
import { EmployeesByFunctionConfig } from '../../components';
import { EmployeesByFunctionOperator } from './operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeesByFunction$!: Observable<EmployeesByFunctionConfig>;
  data$!: Observable<ListOfFlights[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getListOfFlights();
    this.employeesByFunction$ = this.data$.pipe(EmployeesByFunctionOperator);
  }
}
