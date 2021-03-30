import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModalComponent } from './farm-modal.component';
import { PlantingTrussModule } from './planting-truss/planting-truss.module';
import { EmptyTrussModule } from './empty-truss/empty-truss.module';

@NgModule({
  declarations: [FarmModalComponent],
  imports: [
    CommonModule,
    PlantingTrussModule,
    EmptyTrussModule
  ],
  exports: [FarmModalComponent]
})
export class FarmModalModule { }
