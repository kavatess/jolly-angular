import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadImgbbService {
  private readonly apiKey = 'def6c5f52c26a5100f511d5163f6f7e5';

  constructor(private readonly http: HttpClient) {}

  uploadImgBB(imgFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imgFile);
    return this.http
      .post(environment.imgBBApiUrl, formData, { params: { key: this.apiKey } })
      .pipe(map((_response) => _response['data']['url']));
  }
}
