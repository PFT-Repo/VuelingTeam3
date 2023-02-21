import { Component } from '@angular/core';
import { TestService } from 'projects/data/src/lib/services';
import { ListFlights, ListOfFLights } from 'src/app/interfaces/listOfFlights.interface';

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
export class TableComponent {
  constructor(private testSrv: TestService) {}

  displayedColumns: string[] = [
    'dt_flight',
    'cd_flight_number',
    'cd_airport_dep',
    'cd_airport_arr',
    'handling_function',
    'ts_operation_start',
    'ts_operation_end',
    'required_employees',
  ];

  dataSource: ListFlights[] = [];

  ngOnInit(): void {
    this.testSrv.getListOfFlights().subscribe((res) => {
      this.dataSource = res;
      console.log(res);
    });
  }
  
}
