import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussHistoryListComponent } from './truss-history-list.component';
import { CollapseModule } from 'src/app/shared/components/collapse/collapse.module';
import { TrussTimelineModule } from '../truss-timeline/truss-timeline.module';

@NgModule({
  declarations: [TrussHistoryListComponent],
  imports: [CommonModule, CollapseModule, TrussTimelineModule],
  exports: [TrussHistoryListComponent]
})
export class TrussHistoryListModule { }
