import { Component } from '@angular/core';
import { AuthService } from '@data/src/lib/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  get isLoggedIn(): boolean {
    return this.auth.loggedIn();
  }

  constructor(private auth: AuthService) {}
}
