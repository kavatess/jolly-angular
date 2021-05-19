import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm.component';
import { FarmBlockModule } from './farm-block/farm-block.module';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { FarmModalModule } from './farm-modal/farm-modal.module';
import { SeedModalModule } from './seed-modal/seed-modal.module';

@NgModule({
  declarations: [FarmComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FarmBlockModule,
    FarmModalModule,
    SeedModalModule,
    SelectModule
  ]
})
export class FarmModule { }
