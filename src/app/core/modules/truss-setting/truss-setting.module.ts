import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussSettingComponent } from './truss-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule } from '@angular/router';
import { TrussRecentStatusCardModule } from './truss-recent-status-card/truss-recent-status-card.module';
import { TrussHistoryListModule } from './truss-history-list/truss-history-list.module';
import { ModalTrussSettingModule } from './modal-truss-setting/modal-truss-setting.module';

@NgModule({
  declarations: [TrussSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule,
    TrussRecentStatusCardModule,
    TrussHistoryListModule,
    ModalTrussSettingModule
  ]
})
export class TrussSettingModule { }
