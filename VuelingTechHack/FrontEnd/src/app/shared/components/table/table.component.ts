import { Component, OnInit } from '@angular/core';
import { ListOfFlights } from '@data/src/lib/models';
import { DataService } from 'projects/data/src/lib/services';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private testSrv: DataService) {}

  displayedColumns: string[] = [
    'day',
    'hour',
    'handlingFunction',
    'fullTimeEmployers',
    'partTimeEmployeers',
    'totalEmployers',
    'fullTimeEmployersCost',
    'partTimeEmployeersCost',
    'totalCost',
  ];
  dataSource: ListOfFlights[] = [];

  ngOnInit(): void {
    this.testSrv.getListOfFlights().subscribe((res) => {
      this.dataSource = res;
      console.log(res);
    });
  }
}
