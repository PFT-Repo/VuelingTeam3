import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { MaterialModule } from '../libraries/material.module';

@NgModule({
  declarations: [NavbarComponent, NavbarAdminComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, NavbarAdminComponent],
})
export class SharedModule {}
