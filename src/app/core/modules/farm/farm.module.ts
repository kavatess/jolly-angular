import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmBlockModule } from './farm-block/farm-block.module';
import { FarmModalModule } from './farm-modal/farm-modal.module';

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule,
    FarmBlockModule,
    FarmModalModule
  ],
  exports: [FarmComponent]
})
export class FarmModule { }