import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
