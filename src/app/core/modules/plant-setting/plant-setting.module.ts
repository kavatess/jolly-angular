import { NgModule } from '@angular/core';
import { PlantSettingComponent } from './plant-setting.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { FormPlantInfoModule } from './form-plant-info/form-plant-info.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const PLANT_SETTING_ROUTE = [
  {
    path: '',
    component: PlantSettingComponent,
  },
];

@NgModule({
  declarations: [PlantSettingComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FormPlantInfoModule,
    RouterModule.forChild(PLANT_SETTING_ROUTE),
  ]
})
export class PlantSettingModule { }
