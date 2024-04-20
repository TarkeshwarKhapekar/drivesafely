import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  public _api_url = environment.api_url;
  SharingRolesData = new Subject();

  public defaultSearchList: any = [];

  _drivingSafetyAccessToken: any;

  constructor(public _http: HttpClient) {
    this._drivingSafetyAccessToken = localStorage.getItem(
      '_drivingSafetyAccessToken'
    );
    console.log(
      this._drivingSafetyAccessToken,
      'this._drivingSafetyAccessToken'
    );
  }

  public login(loginParams: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: `${this._drivingSafetyAccessToken}`,
    // });
    // const requestOptions = { headers: headers };
    // console.log(requestOptions, 'requestOptoions');
    return this._http
      .post(`${this._api_url}user/signinUser`, loginParams)
      .pipe(catchError(this.error));
  }

  public setDefaultSearchinDB(postData: any) {
    const headers = new HttpHeaders({
      Authorization: `${this._drivingSafetyAccessToken}`,
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

  setSharingRolesData(data: any) {
    this.SharingRolesData.next(data);
  }

  setSearchList(newModule: any) {
    const existingModuleIndex = this.defaultSearchList.findIndex(
      (module: any) => module.module === newModule.module
    );
    console.log(existingModuleIndex, 'existingModuleIndex');
    if (existingModuleIndex !== -1) {
      // Replace existing module's searchColumns
      this.defaultSearchList[existingModuleIndex].searchColumns =
        newModule.searchColumns;
    } else {
      // Add new module
      this.defaultSearchList.push(newModule);
    }

    // posting new search history to DB
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

  setDefaultSearchList(data: any) {
    this.defaultSearchList = data;
  }

  IsLoggedIn() {
    return localStorage.getItem('_drivingSafetyAccessToken') != null;
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
