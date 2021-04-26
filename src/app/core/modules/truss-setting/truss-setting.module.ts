import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrussSettingComponent } from './truss-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';

@NgModule({
  declarations: [TrussSettingComponent],
  imports: [CommonModule, PageLayoutModule]
})
export class TrussSettingModule { }
