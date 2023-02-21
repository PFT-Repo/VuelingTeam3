import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginResponse } from '@data/src/lib/models';
import { AuthService } from '@data/src/lib/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailError: boolean = false;
  passError: boolean = false;
  valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation format
  valPass = /\w/g; //Alfanumeric from 4 to 8 char
  user = {
    email: '',
    password: '',
  };
  activatedRoute: ActivatedRoute | null | undefined;
  constructor(private auth:AuthService,private rou:Router){}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.valPass),
  ]);

  submit(user: { email: string; password: string; }) {
    

    
    this.auth.signIn(user).subscribe(
      res => {
        let y:string | any= Object.values(res);
        localStorage.setItem('token', y);
        try {
          alert( this.rou.navigate(['public/','dashboard'], {relativeTo: this.activatedRoute}).catch((err)=> alert(err))
          )
        } catch (error) {
          
        }
      },err=>console.log(err)
    )
  }
  validate(): void {
    let email = <HTMLInputElement> document.getElementById('email');
    let password = <HTMLInputElement> document.getElementById('password');
    if (email.value != '' && password.value != '') {
      console.log('Email y pass no están vacios');
      if (this.valMail.test(email.value)) {
        console.log('pasó el test de mail');
        if (this.valPass.test(password.value)) {
          console.log('Pasaron los examenes de formateo en front');
          let user = {
            email:email.value,
            password:password.value
          }
          this.submit(user);
        }
      }
    }
    else{
      alert('Algo salió mal');
    }
  }
}
