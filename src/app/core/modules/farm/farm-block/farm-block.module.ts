import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmBlockComponent } from './farm-block.component';
import { ProgressBarModule } from 'src/app/shared/modules/progress-bar/progress-bar.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [FarmBlockComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    PipesModule
  ],
  exports: [FarmBlockComponent]
})
export class FarmBlockModule { }
