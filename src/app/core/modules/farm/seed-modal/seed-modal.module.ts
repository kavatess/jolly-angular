import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedModalComponent } from './seed-modal.component';
import { ModalCreateSeedModule } from './modal-create-seed/modal-create-seed.module';
import { ModalSeedManagementModule } from './modal-seed-management/modal-seed-management.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

@NgModule({
  declarations: [SeedModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    ModalCreateSeedModule,
    ModalSeedManagementModule
  ],
  exports: [SeedModalComponent]
})
export class SeedModalModule { }
