import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './modules/header/header.module';
import { SelectModule } from './modules/select/select.module';
import { ProgressBarModule } from './modules/progress-bar/progress-bar.module';
import { PageLayoutModule } from './modules/page-layout/page-layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    PageLayoutModule,
    SelectModule,
    ProgressBarModule,
  ]
})
export class SharedModule { }
