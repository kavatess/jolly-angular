import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRevertStatusComponent } from './modal-revert-status.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { TrussTimelineModule } from '../truss-timeline/truss-timeline.module';

@NgModule({
  declarations: [ModalRevertStatusComponent],
  imports: [CommonModule, ModalModule, TrussTimelineModule],
  exports: [ModalRevertStatusComponent]
})
export class ModalRevertStatusModule { }
