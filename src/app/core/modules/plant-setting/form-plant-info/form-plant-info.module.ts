import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlantInfoComponent } from './form-plant-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormPlantInfoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormPlantInfoComponent]
})
export class FormPlantInfoModule { }
