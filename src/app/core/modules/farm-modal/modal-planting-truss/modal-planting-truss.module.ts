import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPlantingTrussComponent } from './modal-planting-truss.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ProgressBarModule } from 'src/app/shared/modules/progress-bar/progress-bar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalPlantingTrussComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    ProgressBarModule
  ],
  exports: [ModalPlantingTrussComponent]
})
export class ModalPlantingTrussModule { }
