import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyPlantComponent } from './modify-plant.component';
import { FormPlantInfoModule } from '../form-plant-info/form-plant-info.module';

@NgModule({
  declarations: [ModifyPlantComponent],
  imports: [CommonModule, FormPlantInfoModule],
  exports: [ModifyPlantComponent]
})
export class ModifyPlantModule { }
