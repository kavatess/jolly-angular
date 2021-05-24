import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoSettingComponent } from './user-info-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const USER_SETTING_ROUTE: Routes = [
  {
    path: '',
    component: UserInfoSettingComponent,
  },
];

@NgModule({
  declarations: [UserInfoSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(USER_SETTING_ROUTE)
  ]
})
export class UserInfoSettingModule { }
