import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPlantingTrussComponent } from './modal-planting-truss.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'src/app/shared/components/progress-bar/progress-bar.module';

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
