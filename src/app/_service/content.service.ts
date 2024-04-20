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
export class ContentService {
  allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  allowedVideoTypes = ['video/mp4'];

  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public contentList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}content/get-all-content?page=${data.page}&count=${data.count}&search=${data.filter}&show=alltypes&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public contentView(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}content/get-content/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public addContent(contentParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}content/add-content`,
        contentParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public editContent(editContentParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}content/update-content`,
        editContentParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public deleteContent(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}content/delete/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteContentImage(id: any, image: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers, body: { id: id, image: image } };
    return this._http
      .delete(`${this._api_url}delete/content-image`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteContentVideo(
    id: any,
    video: any,
    videoID: any
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = {
      headers: headers,
      body: { id: id, video: video, videoID: videoID },
    };
    return this._http
      .delete(`${this._api_url}delete/content-video`, requestOptions)
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
