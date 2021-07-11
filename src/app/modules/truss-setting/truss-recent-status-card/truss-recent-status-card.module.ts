import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussRecentStatusCardComponent } from './truss-recent-status-card.component';
import { TrussTimelineModule } from '../truss-timeline/truss-timeline.module';

@NgModule({
  declarations: [TrussRecentStatusCardComponent],
  imports: [CommonModule, TrussTimelineModule],
  exports: [TrussRecentStatusCardComponent]
})
export class TrussRecentStatusCardModule { }
