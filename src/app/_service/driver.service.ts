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
export class DriverService {
  public _api_url = environment.api_url;
  _drivingSafetyAccessToken: any;
  public defaultSearchList: any = [];

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
  }

  public setDefaultSearchinDB(postData: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    this._http
      .post(`${this._api_url}user/update-profile`, postData, requestOptions)
      .pipe(catchError(this.error))
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
          }
        },
        error: (e) => {},
      });
  }
  public driverList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}user/get-all-user?page=${data.page}&count=${data.count}&search=${data.filter}&roles=${data.roles}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public driverView(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(`${this._api_url}user/get-profile/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public addDriver(driverParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    console.log(requestOptions);
    return this._http
      .post(`${this._api_url}user/register`, driverParams, requestOptions)
      .pipe(catchError(this.error));
  }

  // /api/v1/user/import/users

  public importDriver(driverParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(`${this._api_url}user/import/users`, driverParams, requestOptions)
      .pipe(catchError(this.error));
  }

  public editDriver(editDriverParams: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .post(
        `${this._api_url}user/update-profile`,
        editDriverParams,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public deleteDriver(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .delete(`${this._api_url}user/delete/${id}`, requestOptions)
      .pipe(catchError(this.error));
  }

  public diagnosticList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}diagnostic/get-diagnostic/${data.id}?type=${data?.type}&_id=${data._id}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  public allDiagnosticList(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
    });
    const requestOptions = { headers: headers };
    return this._http
      .get(
        `${this._api_url}diagnostic/get-all-diagnostic?id=${data.driver_id}&page=${data.page}&count=${data.count}&search=${data.filter}&createdAt=${data.createdAt}&sortBy=${data.sortColumn}&language=${data.language}&sortDirection=${data.sortDirection}`,
        requestOptions
      )
      .pipe(catchError(this.error));
  }

  setHtoken(token: string) {
    this._drivingSafetyAccessToken = token;
  }

  setSearchList(newModule: any) {
    const existingModuleIndex = this.defaultSearchList.findIndex(
      (module: any) => module.module === newModule.module
    );
    if (existingModuleIndex !== -1) {
      // Replace existing module's searchColumns
      this.defaultSearchList[existingModuleIndex].searchColumns =
        newModule.searchColumns;
    } else {
      // Add new module
      this.defaultSearchList.push(newModule);
    }

    let postDt = {
      _id: localStorage.getItem('_id'),
      defaultSearch: this.defaultSearchList,
    };
    this.setDefaultSearchinDB(postDt);
  }

  getSearchList(moduleName: string) {
    if (this.defaultSearchList.length > 0) {
    } else {
      let dt = localStorage.getItem('defaultSearchList');
      this.defaultSearchList = dt !== null ? JSON.parse(dt) : [];
    }

    const module = this.defaultSearchList.find(
      (module: any) => module.module === moduleName
    );
    return module ? module.searchColumns : [];
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
