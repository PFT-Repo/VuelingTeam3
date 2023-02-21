import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListOfFLights } from '../interfaces/lilstOfFlight.interface';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  
  constructor(
    private http: HttpClient
  ) { }


  getListOfFlights(){
    return this.http.get<ListOfFLights>('')
  }

}
