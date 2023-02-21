import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import {MatInputModule} from '@angular/material/input'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule,MatInputModule,MatButtonModule, MatTableModule],
})
export class PublicModule {}
