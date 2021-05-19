import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, PageLayoutModule, RouterModule]
})
export class SettingModule { }
