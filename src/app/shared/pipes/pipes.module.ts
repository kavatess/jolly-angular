import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantStatusIconPipe } from './plant-status-icon.pipe';
import { PlantGrowthStrPipe } from './plant-growth-str.pipe';
import { HarvestDaysPipe } from './harvest-days.pipe';
import { GetCollectionPipe } from './get-collection.pipe';

@NgModule({
  declarations: [PlantStatusIconPipe, PlantGrowthStrPipe, HarvestDaysPipe, GetCollectionPipe],
  imports: [
    CommonModule
  ],
  exports: [PlantStatusIconPipe, PlantGrowthStrPipe, HarvestDaysPipe, GetCollectionPipe]
})
export class PipesModule { }
