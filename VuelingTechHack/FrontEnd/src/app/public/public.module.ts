import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent, DashboardComponent } from './views';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [CommonModule, PublicRoutingModule, MatInputModule],
})
export class PublicModule {}
