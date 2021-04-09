import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSeedManagementComponent } from './modal-seed-management.component';
import { SeedModule } from '../seed/seed.module';

@NgModule({
  declarations: [ModalSeedManagementComponent],
  imports: [
    CommonModule,
    SeedModule
  ],
  exports: [ModalSeedManagementComponent]
})
export class ModalSeedManagementModule { }
