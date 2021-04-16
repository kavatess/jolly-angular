import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmBlockModule } from './farm-block/farm-block.module';

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule,
    FarmBlockModule
  ],
  exports: [FarmComponent]
})
export class FarmModule { }
