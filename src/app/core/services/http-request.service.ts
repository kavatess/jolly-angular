import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }
  getDataRequest(url: string, sentJSON: any = ""): Observable<any> {
    return this.http.post(url, sentJSON).pipe(shareReplay());
  }
  accessDataRequest(url: string, sentJSON: any): void {
    this.getDataRequest(url, sentJSON).subscribe(_response => {
      location.reload();
    });
  }
}