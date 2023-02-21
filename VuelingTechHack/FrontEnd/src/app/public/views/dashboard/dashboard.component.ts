import { Component, OnInit } from '@angular/core';
import { ListOfFlights } from '@data/src/lib/models';
import { DataService } from '@data/src/lib/services';
import { Observable } from 'rxjs';
import { EmployeesByFunctionConfig, FullVsPartConfig } from '../../components';
import { EmployeesByFunctionOperator, FullVsPartOperator } from './operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeesByFunction$!: Observable<EmployeesByFunctionConfig>;
  fullVsPart$!: Observable<FullVsPartConfig>;
  data$!: Observable<ListOfFlights[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getListOfFlights();
    this.employeesByFunction$ = this.data$.pipe(EmployeesByFunctionOperator);
    this.fullVsPart$ = this.data$.pipe(FullVsPartOperator);
  }
}
