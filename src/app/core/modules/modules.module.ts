import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModule } from './farm/farm.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FarmModule
  ],
  exports: [FarmModule]
})
export class ModulesModule { }
