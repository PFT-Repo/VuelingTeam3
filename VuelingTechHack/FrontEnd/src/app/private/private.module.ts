import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
=======
import { PublicModule } from "../public/public.module";
import { MaterialModule } from '../public/material.module';
>>>>>>> main

@NgModule({
    declarations: [
        DashboardComponent
    ],
<<<<<<< HEAD
    imports: [CommonModule, PrivateRoutingModule, SharedModule]
=======
    imports: [CommonModule, PrivateRoutingModule, PublicModule,MaterialModule]
>>>>>>> main
})
export class PrivateModule {}
