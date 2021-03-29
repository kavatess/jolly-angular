import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmPageComponent } from './farm-page.component';
import { PageLayoutModule } from 'src/app/shared/modules/page-layout/page-layout.module';
import { FarmModule } from 'src/app/core/modules/farm/farm.module';
import { SelectModule } from 'src/app/shared/modules/select/select.module';

@NgModule({
  declarations: [FarmPageComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FarmModule,
    SelectModule
  ],
  exports: [FarmPageComponent]
})
export class FarmPageModule { }
