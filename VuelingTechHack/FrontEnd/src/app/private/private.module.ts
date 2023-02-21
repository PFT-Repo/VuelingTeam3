import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PublicModule } from "../public/public.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [CommonModule, PrivateRoutingModule, PublicModule]
})
export class PrivateModule {}
