import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
emailFormControl: any;
  matcher!: ErrorStateMatcher;

}
