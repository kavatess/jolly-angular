import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussTimelineComponent } from './truss-timeline.component';
import { ProgressBarModule } from 'src/app/shared/components/progress-bar/progress-bar.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [TrussTimelineComponent],
  imports: [CommonModule, ProgressBarModule, PipesModule],
  exports: [TrussTimelineComponent]
})
export class TrussTimelineModule { }
