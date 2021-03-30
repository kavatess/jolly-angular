import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantStatusIconPipe } from './plant-status-icon.pipe';
import { PlantGrowthStrPipe } from './plant-growth-str.pipe';

@NgModule({
  declarations: [PlantStatusIconPipe, PlantGrowthStrPipe],
  imports: [
    CommonModule
  ],
  exports: [PlantStatusIconPipe, PlantGrowthStrPipe]
})
export class PipesModule { }
