import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { CircleLoadingModule } from '../circle-loading/circle-loading.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, CircleLoadingModule, NavigationModule],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
