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
export class CorporateService {
  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public corporateList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}corporate/get-all-corporate?page=${data.page}&count=${data.count}&search=${data.filter}&scolumns=${data.scolumns}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public corporateUserView(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}user/get-profile/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public corporateView(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}corporate/get-corporate/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public addCorporate(corporateParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}corporate/add-corporate`,
        corporateParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public addCorporateUser(corporateParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(`${this._api_url}user/register`, corporateParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public editCorporate(editCorporateParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}corporate/update-corporate`,
        editCorporateParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public editCorporateUser(editCorporateParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}user/update-profile`,
        editCorporateParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public deleteCorporate(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}corporate/delete/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteCorporateUser(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}user/delete/${id}`, requestOptions)
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
