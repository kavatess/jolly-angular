import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { CircleLoadingModule } from '../circle-loading/circle-loading.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    CircleLoadingModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
