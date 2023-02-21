import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './views/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { TableComponent } from './components/table/table.component'

@NgModule({
  declarations: [
    LoginComponent,
    TableComponent
  ],
  imports: [CommonModule, PublicRoutingModule,MatInputModule],
})
export class PublicModule {}
