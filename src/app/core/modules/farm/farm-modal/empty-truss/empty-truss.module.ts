import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyTrussComponent } from './empty-truss.component';

@NgModule({
  declarations: [EmptyTrussComponent],
  imports: [
    CommonModule
  ],
  exports: [EmptyTrussComponent]
})
export class EmptyTrussModule { }
