import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoSettingComponent } from './user-info-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';

@NgModule({
  declarations: [UserInfoSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule
  ]
})
export class UserInfoSettingModule { }
