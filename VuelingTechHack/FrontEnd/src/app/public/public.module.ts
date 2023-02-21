import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule, SharedModule],
})
export class PublicModule {}
