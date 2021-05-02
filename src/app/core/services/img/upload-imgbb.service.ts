import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { UPLOAD_IMGBB_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UploadImgbbService {
  constructor(private createHttpService: HttpRequestService) { }

  uploadImgBB(imgBase64: any): Observable<any> {
    return this.createHttpService.createPostRequest(UPLOAD_IMGBB_REQUEST + '/key=0b35c230744092aeca3d33aed9adf555', imgBase64)
  }
}
