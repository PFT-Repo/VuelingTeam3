import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PublicModule } from '../public/public.module';
import { MaterialModule } from '../public/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    PublicModule,
    MaterialModule,
    SharedModule,
  ],
})
export class PrivateModule {}
