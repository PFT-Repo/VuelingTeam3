import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/* Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailError:boolean= false;
  passError:boolean = false;
  valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation format
  valPass = /\w/g;//Alfanumeric from 4 to 8 char
    user ={
      email:'',
      password:''
    }
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passFormControl = new FormControl('',[Validators.required,Validators.pattern(this.valPass)])

  submit(user: any){
      console.log(user);
         
  }
  validate():void{
    if(this.user.email != "" && this.user.password != ""){
      console.log("Email y pass no están vacios")
      if (this.valMail.test(this.user.email) ){
        console.log("pasó el test de mail");
        if (this.valPass.test(this.user.password)) {
           console.log("Pasaron los examenes de formateo en front");
        this.submit(this.user);
        }
      }
    }
    alert('Algo salió mal');
  }

}
