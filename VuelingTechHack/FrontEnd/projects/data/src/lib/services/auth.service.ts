import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataModule } from '../data.module';
import { environment } from 'src/environments/environment';
import { LoginResponse, User } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: DataModule,
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/register`, user);
  }

  signIn(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/api/auth/login`,
      user,
    );
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/public/login']);
  }
}
