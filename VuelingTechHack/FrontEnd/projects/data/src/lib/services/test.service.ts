import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListOfFLights } from 'src/app/interfaces/listOfFlights.interface';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(
    private http: HttpClient
  ) {}

  getListOfFlights(){
    return this.http.get<ListOfFLights>('')
  }

  
}
