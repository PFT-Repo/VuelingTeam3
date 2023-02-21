import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '@data/src/lib/models';
import { AuthService } from '@data/src/lib/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginGroup!: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.loginGroup.valid) {
      this.auth
        .signIn(this.loginGroup.value)
        .subscribe((response: LoginResponse) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/public/dashboard']);
        });
    }
  }
}
