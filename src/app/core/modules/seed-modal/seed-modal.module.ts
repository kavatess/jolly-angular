import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedModalComponent } from './seed-modal.component';
import { ModalComponent } from 'src/app/shared/modules/modal/modal.component';

@NgModule({
  declarations: [SeedModalComponent],
  imports: [
    CommonModule,
    ModalComponent
  ],
  exports: [SeedModalComponent]
})
export class SeedModalModule { }
