import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent, DashboardComponent } from './views';


import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../libraries/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
