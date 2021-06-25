import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderModule } from '../header/header.module';
import { CircleLoadingModule } from '../circle-loading/circle-loading.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CircleLoadingModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
