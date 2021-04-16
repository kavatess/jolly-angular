import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModalComponent } from './farm-modal.component';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { ModalPlantingTrussModule } from './modal-planting-truss/modal-planting-truss.module';
import { ModalEmptyTrussModule } from './modal-empty-truss/modal-empty-truss.module';

@NgModule({
  declarations: [FarmModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    ModalPlantingTrussModule,
    ModalEmptyTrussModule
  ],
  exports: [FarmModalComponent]
})
export class FarmModalModule { }
