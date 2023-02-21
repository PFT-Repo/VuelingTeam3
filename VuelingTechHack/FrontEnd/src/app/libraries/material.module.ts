import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


const MATERIAL_MODULES = [MatTableModule];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
