import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussHistoryCollapseComponent } from './truss-history-collapse.component';
import { CollapseModule } from 'src/app/shared/components/collapse/collapse.module';
import { TrussTimelineModule } from '../truss-timeline/truss-timeline.module';

@NgModule({
  declarations: [TrussHistoryCollapseComponent],
  imports: [CommonModule, CollapseModule, TrussTimelineModule],
  exports: [TrussHistoryCollapseComponent]
})
export class TrussHistoryCollapseModule { }
