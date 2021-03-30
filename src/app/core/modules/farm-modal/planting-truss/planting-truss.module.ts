import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantingTrussComponent } from './planting-truss.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ProgressBarModule } from 'src/app/shared/modules/progress-bar/progress-bar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlantingTrussComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [PlantingTrussComponent]
})
export class PlantingTrussModule { }
