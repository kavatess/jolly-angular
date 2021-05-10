import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussSettingComponent } from './truss-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule } from '@angular/router';
import { TrussHistoryCollapseModule } from './truss-history-collapse/truss-history-collapse.module';

@NgModule({
  declarations: [TrussSettingComponent],
  imports: [CommonModule, PageLayoutModule, RouterModule, TrussHistoryCollapseModule]
})
export class TrussSettingModule { }
