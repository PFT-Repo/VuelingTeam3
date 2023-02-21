import { Component, Input } from '@angular/core';
import { ListOfFlights } from '@data/src/lib/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: ListOfFlights[] = [];

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
}
