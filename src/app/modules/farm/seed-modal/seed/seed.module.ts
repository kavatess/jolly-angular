import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedComponent } from './seed.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [SeedComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [SeedComponent]
})
export class SeedModule { }
