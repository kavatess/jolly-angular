import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedModalComponent } from './seed-modal.component';
import { SeedModule } from './seed/seed.module';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { ModalCreateSeedModule } from './modal-create-seed/modal-create-seed.module';
import { ModalSeedManagementModule } from './modal-seed-management/modal-seed-management.module';

@NgModule({
  declarations: [SeedModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    SeedModule,
    ModalCreateSeedModule,
    ModalSeedManagementModule
  ],
  exports: [SeedModalComponent]
})
export class SeedModalModule { }
