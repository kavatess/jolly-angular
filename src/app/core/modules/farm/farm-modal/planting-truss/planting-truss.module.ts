import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantingTrussComponent } from './planting-truss.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ProgressBarModule } from 'src/app/shared/modules/progress-bar/progress-bar.module';

@NgModule({
  declarations: [PlantingTrussComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    PipesModule,
  ],
  exports: [PlantingTrussComponent]
})
export class PlantingTrussModule { }
