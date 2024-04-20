import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;
  _id: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
    this._id = localStorage.getItem('_id');
  }

  public policyView(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}policy/get-All-Policy`)
      .pipe(catchError(this.error));
  }

  public updatePolicy(editProfileParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}policy/update-policy`,
        editProfileParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
