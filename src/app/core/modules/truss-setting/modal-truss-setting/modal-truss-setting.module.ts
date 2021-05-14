import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTrussSettingComponent } from './modal-truss-setting.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { TrussTimelineModule } from '../truss-timeline/truss-timeline.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalTrussSettingComponent],
  imports: [CommonModule, ModalModule, TrussTimelineModule, ReactiveFormsModule],
  exports: [ModalTrussSettingComponent]
})
export class ModalTrussSettingModule { }
