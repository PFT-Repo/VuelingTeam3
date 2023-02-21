import { Component } from '@angular/core';
import { TestService } from 'projects/data/src/lib/services';
import { ListOfFLights } from 'src/app/interfaces/listOfFlights.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  dataSource: ListOfFLights[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(
    private testSrv: TestService
  ){

  }

  ngOnInit(): void {
    
    this.testSrv.getListOfFlights().subscribe(res => {
      this.dataSource = res
    })
    
  }




}
