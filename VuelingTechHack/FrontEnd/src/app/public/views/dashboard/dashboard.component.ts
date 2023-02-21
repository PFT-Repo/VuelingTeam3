import { Component, OnInit } from '@angular/core';
import { ListOfFlights } from '@data/src/lib/models';
import { DataService } from '@data/src/lib/services';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { EmployeesByFunctionConfig } from '../../components';
import { EmployeesByFunctionOperator } from './operators';
import { ActivatedRoute } from '@angular/router';
=======
import { EmployeesByFunctionConfig, FullVsPartConfig } from '../../components';
import { EmployeesByFunctionOperator, FullVsPartOperator } from './operators';
>>>>>>> main

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeesByFunction$!: Observable<EmployeesByFunctionConfig>;
  fullVsPart$!: Observable<FullVsPartConfig>;
  data$!: Observable<ListOfFlights[]>;

  constructor(private dataService: DataService, private arou: ActivatedRoute) {
   console.log(this.arou.url);
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getListOfFlights();
    this.employeesByFunction$ = this.data$.pipe(EmployeesByFunctionOperator);
    this.fullVsPart$ = this.data$.pipe(FullVsPartOperator);
  }
}
