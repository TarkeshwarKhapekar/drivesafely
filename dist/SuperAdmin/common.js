"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["common"],{

/***/ 3478:
/*!*********************************************!*\
  !*** ./src/app/_service/content.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentService": () => (/* binding */ ContentService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ContentService {
    constructor(_http) {
        this._http = _http;
        this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        this.allowedVideoTypes = ['video/mp4'];
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    contentList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}content/get-all-content?page=${data.page}&count=${data.count}&search=${data.filter}&show=alltypes&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    contentView(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}content/get-content/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    addContent(contentParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}content/add-content`, contentParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    editContent(editContentParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}content/update-content`, editContentParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteContent(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .delete(`${this._api_url}content/delete/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteContentImage(id, image) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers, body: { id: id, image: image } };
        return this._http
            .delete(`${this._api_url}delete/content-image`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteContentVideo(id, video, videoID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = {
            headers: headers,
            body: { id: id, video: video, videoID: videoID },
        };
        return this._http
            .delete(`${this._api_url}delete/content-video`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    // Handle Errors
    error(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
ContentService.ɵfac = function ContentService_Factory(t) { return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ContentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1757:
/*!********************************************!*\
  !*** ./src/app/_service/driver.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverService": () => (/* binding */ DriverService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class DriverService {
    constructor(_http) {
        this._http = _http;
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this.defaultSearchList = [];
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    setDefaultSearchinDB(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        this._http
            .post(`${this._api_url}user/update-profile`, postData, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error))
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                }
            },
            error: (e) => { },
        });
    }
    driverList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}user/get-all-user?page=${data.page}&count=${data.count}&search=${data.filter}&roles=${data.roles}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    driverView(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}user/get-profile/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    addDriver(driverParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        console.log(requestOptions);
        return this._http
            .post(`${this._api_url}user/register`, driverParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    // /api/v1/user/import/users
    importDriver(driverParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}user/import/users`, driverParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    editDriver(editDriverParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}user/update-profile`, editDriverParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteDriver(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .delete(`${this._api_url}user/delete/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    diagnosticList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}diagnostic/get-diagnostic/${data.id}?type=${data?.type}&_id=${data._id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    allDiagnosticList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}diagnostic/get-all-diagnostic?id=${data.driver_id}&page=${data.page}&count=${data.count}&search=${data.filter}&createdAt=${data.createdAt}&sortBy=${data.sortColumn}&language=${data.language}&sortDirection=${data.sortDirection}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    setHtoken(token) {
        this._drivingSafetyAccessToken = token;
    }
    setSearchList(newModule) {
        const existingModuleIndex = this.defaultSearchList.findIndex((module) => module.module === newModule.module);
        if (existingModuleIndex !== -1) {
            // Replace existing module's searchColumns
            this.defaultSearchList[existingModuleIndex].searchColumns =
                newModule.searchColumns;
        }
        else {
            // Add new module
            this.defaultSearchList.push(newModule);
        }
        let postDt = {
            _id: localStorage.getItem('_id'),
            defaultSearch: this.defaultSearchList,
        };
        this.setDefaultSearchinDB(postDt);
    }
    getSearchList(moduleName) {
        if (this.defaultSearchList.length > 0) {
        }
        else {
            let dt = localStorage.getItem('defaultSearchList');
            this.defaultSearchList = dt !== null ? JSON.parse(dt) : [];
        }
        const module = this.defaultSearchList.find((module) => module.module === moduleName);
        return module ? module.searchColumns : [];
    }
    // Handle Errors
    error(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DriverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5654:
/*!***********************************************!*\
  !*** ./src/app/_service/judgement.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgementService": () => (/* binding */ JudgementService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class JudgementService {
    constructor(_http) {
        this._http = _http;
        this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    judgementList() {
        return this._http
            .get(`${this._api_url}score/get-weightage-score`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    finalJudgementList(data) {
        return this._http
            .get(`${this._api_url}judgement/get-All-config?page=${data.page}&count=${data.count}&search=${data.filter}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    updateScore(editScoreParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}score/update-weightage-score`, editScoreParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    addConfig(configParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}judgement/add-config`, configParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    addReflex(configParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}reflex/add-reflex`, configParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    updateConfig(editconfigParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}judgement/update-config`, editconfigParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    getconfigDetails(id) {
        return this._http
            .get(`${this._api_url}judgement/get-config/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    getReflexDetails() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}reflex/get-reflex?type=all`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    getReflexDetailsById(id) {
        return this._http
            .get(`${this._api_url}reflex/get-reflex/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    updateReflex(editconfigParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}reflex/update-reflex`, editconfigParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    deleteReflexImage(id, image, identifier) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = {
            headers: headers,
            body: { id: id, image: image, identifier: identifier },
        };
        return this._http
            .delete(`${this._api_url}delete/reflex-image`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.error));
    }
    error(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
JudgementService.ɵfac = function JudgementService_Factory(t) { return new (t || JudgementService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
JudgementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JudgementService, factory: JudgementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map