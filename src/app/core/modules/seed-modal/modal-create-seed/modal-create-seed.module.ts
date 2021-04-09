import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCreateSeedComponent } from './modal-create-seed.component';
import { SeedModule } from '../seed/seed.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalCreateSeedComponent],
  imports: [
    CommonModule,
    SeedModule,
    ReactiveFormsModule
  ],
  exports: [ModalCreateSeedComponent]
})
export class ModalCreateSeedModule { }
