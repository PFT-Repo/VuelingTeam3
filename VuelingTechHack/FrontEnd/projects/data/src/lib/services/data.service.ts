import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataModule } from '../data.module';
import { ListOfFlights } from '../models';

@Injectable({
  providedIn: DataModule,
})
export class DataService {
  constructor(private http: HttpClient) {}

  getListOfFlights(): Observable<ListOfFlights[]> {
    return this.http.get<ListOfFlights[]>(
      `${environment.apiUrl}/vueling/team3/getData`,
    );
  }
}
