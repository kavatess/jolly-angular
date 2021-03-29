import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModalComponent } from './farm-modal.component';

@NgModule({
  declarations: [FarmModalComponent],
  imports: [
    CommonModule
  ],
  exports: [FarmModalComponent]
})
export class FarmModalModule { }
