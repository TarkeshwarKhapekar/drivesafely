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
export class JudgementService {
  allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public judgementList(): Observable<any> {
    return this._http
      .get(`${this._api_url}score/get-weightage-score`)
      .pipe(catchError(this.error));
  }

  public finalJudgementList(data: any): Observable<any> {
    return this._http
      .get(
        `${this._api_url}judgement/get-All-config?page=${data.page}&count=${data.count}&search=${data.filter}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`
      )
      .pipe(catchError(this.error));
  }

  public updateScore(editScoreParams: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}score/update-weightage-score`,
        editScoreParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public addConfig(configParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}judgement/add-config`,
        configParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public addReflex(configParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(`${this._api_url}reflex/add-reflex`, configParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public updateConfig(editconfigParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}judgement/update-config`,
        editconfigParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public getconfigDetails(id: any): Observable<any> {
    return this._http
      .get(`${this._api_url}judgement/get-config/${id}`)
      .pipe(catchError(this.error));
  }

  public getReflexDetails(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}reflex/get-reflex?type=all`, requestOptions)
      .pipe(catchError(this.error));
  }

  public getReflexDetailsById(id: any): Observable<any> {
    return this._http
      .get(`${this._api_url}reflex/get-reflex/${id}`)
      .pipe(catchError(this.error));
  }

  public updateReflex(editconfigParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}reflex/update-reflex`,
        editconfigParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public deleteReflexImage(
    id: any,
    image: any,
    identifier: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = {
      headers: headers,
      body: { id: id, image: image, identifier: identifier },
    };
    return this._http
      .delete(`${this._api_url}delete/reflex-image`, requestOptions)
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
