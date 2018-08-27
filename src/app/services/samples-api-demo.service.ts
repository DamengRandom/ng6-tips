import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplesApiDemoService {
  sampleUrl = `https://jsonplaceholder.typicode.com/photos`;
  constructor(private http: HttpClient) { }

  getSamples(): Observable<any> {
    return this.http.get(this.sampleUrl)
            .pipe(
              retry(3),
              catchError(this.errorHandler)
            );
  }

  private errorHandler(error: HttpErrorResponse) {
    // if (error.error instanceof ErrorEvent) {
    //   return throwError(`Client Error: ${error.error.message}`);
    // } else {
    //   console.log(error);
    //   return throwError(`Server Error ${error.status}: ${error.statusText}`);
    // }
    return throwError('Something went wrong, please try it again later ..');
  }
}
