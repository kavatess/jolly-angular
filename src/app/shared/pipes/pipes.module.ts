import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantStatusIconPipe } from './plant-status-icon.pipe';
import { PlantGrowthStrPipe } from './plant-growth-str.pipe';
import { HarvestDaysPipe } from './harvest-days.pipe';

@NgModule({
  declarations: [PlantStatusIconPipe, PlantGrowthStrPipe, HarvestDaysPipe],
  imports: [
    CommonModule
  ],
  exports: [PlantStatusIconPipe, PlantGrowthStrPipe, HarvestDaysPipe]
})
export class PipesModule { }
