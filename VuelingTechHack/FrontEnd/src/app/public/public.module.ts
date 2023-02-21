import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './views/login/login.component';
import { TableComponent } from './components/table/table.component';
import {MatInputModule} from '@angular/material/input'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [LoginComponent, DashboardComponent,TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule,MatInputModule,MatButtonModule],
})
export class PublicModule {}
