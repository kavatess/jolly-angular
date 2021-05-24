import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoSettingComponent } from './user-info-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserInfoSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UserInfoSettingModule { }
