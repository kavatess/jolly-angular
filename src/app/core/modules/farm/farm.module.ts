import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmBlockModule } from './farm-block/farm-block.module';
import { ModalPlantingTrussModule } from './modal-planting-truss/modal-planting-truss.module';
import { ModalEmptyTrussModule } from './modal-empty-truss/modal-empty-truss.module';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { SeedModalModule } from '../seed-modal/seed-modal.module';

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule,
    FarmBlockModule,
    ModalModule,
    ModalPlantingTrussModule,
    ModalEmptyTrussModule,
    SeedModalModule
  ],
  exports: [FarmComponent]
})
export class FarmModule { }