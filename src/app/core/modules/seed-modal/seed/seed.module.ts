import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedComponent } from './seed.component';

@NgModule({
  declarations: [SeedComponent],
  imports: [
    CommonModule
  ],
  exports: [SeedComponent]
})
export class SeedModule { }
