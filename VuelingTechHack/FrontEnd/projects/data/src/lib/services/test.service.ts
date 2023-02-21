import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ListFlights } from 'src/app/interfaces/listOfFlights.interface';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(
    private http: HttpClient
  ) {}

  getListOfFlights(){
    return this.http.get<ListFlights[]>(environment.apiUrl)
  }

  
}
