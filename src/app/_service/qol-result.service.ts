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
export class QolResultService {
  allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  allowedVideoTypes = ['video/mp4'];

  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public addQol(qolParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(`${this._api_url}qol/add-config`, qolParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public qolList(data: any): Observable<any> {
    return this._http
      .get(
        `${this._api_url}qol/get-All-Config?page=${data.page}&count=${data.count}&search=${data.filter}&show=alltypes&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`
      )
      .pipe(catchError(this.error));
  }

  public qolView(id: any): Observable<any> {
    return this._http
      .get(`${this._api_url}qol/get-config/${id}`)
      .pipe(catchError(this.error));
  }

  public editQol(editQolParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(`${this._api_url}qol/update-config`, editQolParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteQol(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}qol/delete/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteQolImage(id: any, image: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers, body: { id: id, image: image } };
    return this._http
      .delete(`${this._api_url}/delete/qol-image`, requestOptions)
      .pipe(catchError(this.error));
  }

  public deleteQolVideo(id: any, video: any, videoID: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = {
      headers: headers,
      body: { id: id, video: video, videoID: videoID },
    };
    return this._http
      .delete(`${this._api_url}delete/qol-video`, requestOptions)
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
