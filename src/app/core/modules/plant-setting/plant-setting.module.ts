import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantSettingComponent } from './plant-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { FormPlantInfoModule } from './form-plant-info/form-plant-info.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlantSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FormPlantInfoModule,
    RouterModule
  ]
})
export class PlantSettingModule { }
