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
export class NoticeService {
  allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public noticeList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}notification/get-all-notification?page=${data.page}&count=${data.count}&search=${data.filter}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public noticeView(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}notification/get-notification/${id}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public addNotice(noticeParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}notification/add-notification`,
        noticeParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public editNotice(editNoticeParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}notification/update-notification`,
        editNoticeParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public deleteNotice(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}notification/delete/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteImage(id: any, image: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers, body: { id: id, image: image } };
    return this._http
      .delete(`${this._api_url}image/delete`, requestOptions)
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
