import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [CommonModule, PrivateRoutingModule, SharedModule]
})
export class PrivateModule {}
