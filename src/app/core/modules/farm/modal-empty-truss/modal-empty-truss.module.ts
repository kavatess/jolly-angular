import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEmptyTrussComponent } from './modal-empty-truss.component';

@NgModule({
  declarations: [ModalEmptyTrussComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalEmptyTrussComponent]
})
export class ModalEmptyTrussModule { }
