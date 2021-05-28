import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmTrussComponent } from './farm-truss.component';
import { ProgressBarModule } from 'src/app/shared/components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [FarmTrussComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [FarmTrussComponent]
})
export class FarmTrussModule { }
