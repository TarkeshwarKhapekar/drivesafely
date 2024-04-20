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
export class LoginService {
  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
    console.log(this._drivingSafetyAccessToken);
  }

  public forgetPassword(userParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    console.log(requestOptions, 'ree');
    return this._http
      .post(`${this._api_url}user/forgotpassword`, userParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public verifyOTP(userParams: any): Observable<any> {
    return this._http
      .post(`${this._api_url}user/verify-otp`, userParams)
      .pipe(catchError(this.error));
  }

  public resetPassword(userParams: any): Observable<any> {
    return this._http
      .post(`${this._api_url}user/update-password`, userParams)
      .pipe(catchError(this.error));
  }

  // Handle Errors
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
