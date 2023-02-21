import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const MATERIAL_MODULES = [MatInputModule,MatButtonModule,MatExpansionModule,MatIconModule,MatTableModule];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
