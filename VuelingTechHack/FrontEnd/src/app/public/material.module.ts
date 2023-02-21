import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [MatInputModule];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
