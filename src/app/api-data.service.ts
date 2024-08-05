import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private apiUrl = 'https://newsapi.org/v2/everything'; 
  private apiKey = '0f4f5a1921174c6d9d9e49d60ea0a65a'; 
  constructor(private http: HttpClient) {}

  getItems(query: string = 'latest'): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('apiKey', this.apiKey);

    return this.http
      .get<any>(this.apiUrl, { params })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
