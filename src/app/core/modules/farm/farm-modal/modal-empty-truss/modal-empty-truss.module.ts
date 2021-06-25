import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEmptyTrussComponent } from './modal-empty-truss.component';
import { ModalSeedManagementModule } from '../../seed-modal/modal-seed-management/modal-seed-management.module';

@NgModule({
  declarations: [ModalEmptyTrussComponent],
  imports: [
    CommonModule,
    ModalSeedManagementModule
  ],
  exports: [ModalEmptyTrussComponent]
})
export class ModalEmptyTrussModule { }
