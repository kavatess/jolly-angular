import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedModalComponent } from './seed-modal.component';
import { SeedModule } from './seed/seed.module';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';

@NgModule({
  declarations: [SeedModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    SeedModule
  ],
  exports: [SeedModalComponent]
})
export class SeedModalModule { }
