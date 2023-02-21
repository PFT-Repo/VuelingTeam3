import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './views/login/login.component';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, PublicRoutingModule,MatInputModule],
})
export class PublicModule {}
