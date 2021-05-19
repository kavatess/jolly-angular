import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestService } from './http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadImgbbService } from './img/upload-imgbb.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpRequestService, UploadImgbbService]
})
export class ServicesModule { }
