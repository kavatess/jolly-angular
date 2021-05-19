import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLoadingComponent } from './circle-loading.component';

@NgModule({
  declarations: [CircleLoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleLoadingComponent]
})
export class CircleLoadingModule { }
