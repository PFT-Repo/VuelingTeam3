import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { TableComponent } from './components/table/table.component';
import { LoginComponent, DashboardComponent } from './views';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [LoginComponent, DashboardComponent, TableComponent],
  exports: [ TableComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule],
})
export class PublicModule {}
