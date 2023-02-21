import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
