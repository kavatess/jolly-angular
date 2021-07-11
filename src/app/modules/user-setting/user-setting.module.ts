import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingComponent } from './user-setting.component';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';

const USER_SETTING_ROUTE: Routes = [
  {
    path: '',
    component: UserSettingComponent,
  }
];

@NgModule({
  declarations: [UserSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    NavBarModule,
    FormModule,
    RouterModule.forChild(USER_SETTING_ROUTE)
  ]
})
export class UserSettingModule { }
