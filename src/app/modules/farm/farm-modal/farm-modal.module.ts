import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModalComponent } from './farm-modal.component';
import { ModalPlantingTrussModule } from './modal-planting-truss/modal-planting-truss.module';
import { ModalEmptyTrussModule } from './modal-empty-truss/modal-empty-truss.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

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
