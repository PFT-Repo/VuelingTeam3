import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { MaterialModule } from '../libraries/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, NavbarAdminComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, NavbarAdminComponent],
})
export class SharedModule {}
