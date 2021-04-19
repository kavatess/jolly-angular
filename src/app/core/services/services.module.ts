import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestService } from './http-request.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class ServicesModule { }
