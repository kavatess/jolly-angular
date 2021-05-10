import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussSettingComponent } from './truss-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'src/app/shared/components/collapse/collapse.module';

@NgModule({
  declarations: [TrussSettingComponent],
  imports: [CommonModule, PageLayoutModule, RouterModule, CollapseModule]
})
export class TrussSettingModule { }
