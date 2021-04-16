import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmPageComponent } from './farm-page.component';
import { PageLayoutModule } from 'src/app/shared/modules/page-layout/page-layout.module';
import { SelectModule } from 'src/app/shared/modules/select/select.module';
import { FarmModalModule } from 'src/app/core/modules/farm-modal/farm-modal.module';
import { SeedModalModule } from 'src/app/core/modules/seed-modal/seed-modal.module';
import { FarmModule } from 'src/app/core/modules/farm/farm.module';

@NgModule({
  declarations: [FarmPageComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FarmModule,
    FarmModalModule,
    SeedModalModule,
    SelectModule
  ],
  exports: [FarmPageComponent]
})
export class FarmPageModule { }
