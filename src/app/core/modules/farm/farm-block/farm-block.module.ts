import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmBlockComponent } from './farm-block.component';
import { ProgressBarModule } from 'src/app/shared/modules/progress-bar/progress-bar.module';

@NgModule({
  declarations: [FarmBlockComponent],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports: [FarmBlockComponent]
})
export class FarmBlockModule { }
