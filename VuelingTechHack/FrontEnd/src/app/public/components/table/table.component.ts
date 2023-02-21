import { Component } from '@angular/core';
import { TestService } from 'projects/data/src/lib/services';
import { ListOfFLights } from 'src/app/interfaces/listOfFlights.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(
    private testSrv: TestService
  ){

  }

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
  dataSource: ListOfFLights[] = [];

  ngOnInit(): void {
    
    this.testSrv.getListOfFlights().subscribe(res => {
      this.dataSource = res
      console.log(res);
      
    })
    
  }




}
