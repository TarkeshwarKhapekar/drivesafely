"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_qol-configuration_qol-configuration_module_ts"],{

/***/ 3318:
/*!************************************************!*\
  !*** ./src/app/_service/qol-result.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QolResultService": () => (/* binding */ QolResultService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class QolResultService {
    constructor(_http) {
        this._http = _http;
        this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        this.allowedVideoTypes = ['video/mp4'];
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    addQol(qolParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}qol/add-config`, qolParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    qolList(data) {
        return this._http
            .get(`${this._api_url}qol/get-All-Config?page=${data.page}&count=${data.count}&search=${data.filter}&show=alltypes&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    qolView(id) {
        return this._http
            .get(`${this._api_url}qol/get-config/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    editQol(editQolParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}qol/update-config`, editQolParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteQol(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .delete(`${this._api_url}qol/delete/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteQolImage(id, image) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers, body: { id: id, image: image } };
        return this._http
            .delete(`${this._api_url}/delete/qol-image`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteQolVideo(id, video, videoID) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = {
            headers: headers,
            body: { id: id, video: video, videoID: videoID },
        };
        return this._http
            .delete(`${this._api_url}delete/qol-video`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
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
QolResultService.ɵfac = function QolResultService_Factory(t) { return new (t || QolResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
QolResultService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: QolResultService, factory: QolResultService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3654:
/*!****************************************************************!*\
  !*** ./src/app/qol-configuration/add-qol/add-qol.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddQolComponent": () => (/* binding */ AddQolComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/qol-result.service */ 3318);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function AddQolComponent_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.EditQol"));
} }
function AddQolComponent_b_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.AddQol"));
} }
function AddQolComponent_span_24_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Min.valueisrequired!"), " ");
} }
function AddQolComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddQolComponent_span_24_label_1_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.addQolForm.get("min_value").hasError("required"));
} }
function AddQolComponent_span_32_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Max.valueisrequired!"), " ");
} }
function AddQolComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddQolComponent_span_32_label_1_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.addQolForm.get("max_value").hasError("required"));
} }
function AddQolComponent_span_47_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Levelisrequired!"), " ");
} }
function AddQolComponent_span_47_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Levelisrequired!"), " ");
} }
function AddQolComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddQolComponent_span_47_label_1_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddQolComponent_span_47_label_2_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.selectedLng == "en" && ctx_r4.addQolForm.get("level").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.selectedLng == "ja" && ctx_r4.addQolForm.get("levelJa").hasError("required"));
} }
function AddQolComponent_span_65_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Descriptionisrequired!"), " ");
} }
function AddQolComponent_span_65_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.Descriptionisrequired!"), " ");
} }
function AddQolComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddQolComponent_span_65_label_1_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddQolComponent_span_65_label_2_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.selectLng == "en" && ctx_r5.addQolForm.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.selectLng == "ja" && ctx_r5.addQolForm.get("descriptionJa").hasError("required"));
} }
function AddQolComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.UploadVideos"), "");
} }
function AddQolComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.UploadVideo"), "");
} }
function AddQolComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "source", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "em", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_div_76_Template_em_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const videoPreview_r18 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.removeVideo(videoPreview_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const videoPreview_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", videoPreview_r18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "qol.Yourbrowserdoesnotsupportthevideotag."), " ");
} }
function AddQolComponent_div_90_span_7_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "qol.vibrationTimeValidation"), " ");
} }
function AddQolComponent_div_90_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddQolComponent_div_90_span_7_label_1_Template, 3, 3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.addQolForm.get("vibrationTime").hasError("required") || ctx_r22.addQolForm.get("vibrationTime").hasError("min") || ctx_r22.addQolForm.get("vibrationTime").hasError("max"));
} }
function AddQolComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 15)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddQolComponent_div_90_span_7_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "qol.VibrationTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, "qol.EnterVibrationTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.submitted || ctx_r9.f.vibrationTime.errors && (ctx_r9.f.vibrationTime.dirty || ctx_r9.f.vibrationTime.touched));
} }
function AddQolComponent_button_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "qol.Update"), " ");
} }
function AddQolComponent_button_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r11.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "qol.AddQol"), " ");
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
const _c1 = function (a0) { return { active: a0 }; };
class AddQolComponent {
    constructor(fb, _ToastrManager, qolResultService, spinner, router, route) {
        this.fb = fb;
        this._ToastrManager = _ToastrManager;
        this.qolResultService = qolResultService;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.video_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.video_url;
        this.addQolForm = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.allowedImageTypes = [];
        this.allowedVideoTypes = [];
        this.qolResultImages = [];
        this.qolResultVideos = [];
        this.qolPreviewImages = [];
        this.qolPreviewVideos = [];
        this.submitted = false;
        this.selectedLang = localStorage.getItem('selectedLang');
        this.getQolDetails = () => {
            if (this.qolId) {
                this.spinner.show();
                this.qolResultService.qolView(this.qolId).subscribe({
                    next: (res) => {
                        this.qolDetails = res.data[0];
                        if (this.qolDetails.led === true) {
                            this.isChecked = true;
                        }
                        if (this.qolDetails.vibrations === true) {
                            this.isCheckedd = true;
                        }
                        this.qolDetails.images.forEach((element) => {
                            const path = `${this.url}/Other/${element}`;
                            this.qolPreviewImages.push(path);
                        });
                        this.qolDetails.videos.forEach((element) => {
                            const vpath = `${this.video_url}/Other/${element.videoURL}`;
                            this.qolPreviewVideos.push(vpath);
                        });
                        setTimeout(() => {
                            this.spinner.hide();
                        }, 500);
                        this.setData(this.qolDetails);
                    },
                    error: (err) => { },
                });
            }
        };
        this.route.paramMap.subscribe((params) => {
            this.qolId = params.get('id');
        });
    }
    onTypeChange(event) {
        this.selectedType = event.target.value;
        this.typeChange.emit(this.selectedType);
    }
    ngOnInit() {
        this.allowedImageTypes = this.qolResultService.allowedImageTypes;
        this.allowedVideoTypes = this.qolResultService.allowedVideoTypes;
        this.formValidation();
        this.selectedLang = localStorage.getItem('selectedLang');
        if (this.selectedLang === 'en') {
            this.selectedLng = 'en';
            this.selectLng = 'en';
        }
        else {
            this.selectedLng = 'ja';
            this.selectLng = 'ja';
        }
    }
    formValidation() {
        this.addQolForm = this.fb.group({
            min_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            max_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            levelJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            descriptionJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            images: [''],
            videos: [''],
            led: [false],
            vibrations: [false],
            colorCode: [''],
            vibrationTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.getQolDetails();
    }
    openImageSelector() {
        let element = document.getElementsByClassName('file-upload')[0];
        if (element) {
            element.click();
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Something went wrong!'
                : '何か問題が発生しました!';
            this._ToastrManager.errorToastr(errorMessage);
        }
    }
    onFileChanged(event) {
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        if (this.allowedImageTypes.indexOf(file.type) !== -1) {
            this.qolResultImages.push(file);
            if (event.target.files && file) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.qolPreviewImages.push(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Selected image is not allowed.'
                : '選択した画像は許可されていません。';
            this._ToastrManager.errorToastr(errorMessage);
        }
    }
    removeImages(index) {
        this.spinner.show();
        const filename = index.substring(index.lastIndexOf('/') + 1);
        this.id = this.qolId;
        this.qolResultService.deleteQolImage(this.id, filename).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        const successMessage = this.selectedLang === 'en'
                            ? 'Image deleted Successfully'
                            : '画像は正常に削除されました';
                        this._ToastrManager.successToastr(successMessage);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
        this.qolPreviewImages.splice(index, 1);
        this.qolResultImages.splice(index, 1);
    }
    openVideoSelector() {
        let element = document.getElementsByClassName('video-upload')[0];
        if (element) {
            element.click();
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Something went wrong!'
                : '何か問題が発生しました!';
            this._ToastrManager.errorToastr(errorMessage);
        }
    }
    onVideoSelectorChange(event) {
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        this.qolResultVideos = [];
        this.qolPreviewVideos = [];
        if (this.allowedVideoTypes.indexOf(file.type) !== -1) {
            this.qolResultVideos.push(file);
            if (event.target.files && file) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.qolPreviewVideos.push(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Selected Video is not allowed.'
                : '選択したビデオは許可されていません。';
            this._ToastrManager.errorToastr(errorMessage);
        }
    }
    removeVideo(index) {
        this.spinner.show();
        const filename = index.substring(index.lastIndexOf('/') + 1);
        let videoID;
        this.qolDetails.videos.forEach((element) => {
            if (element.videoURL == filename) {
                videoID = element._id;
            }
        });
        this.id = this.qolId;
        this.qolResultService.deleteQolVideo(this.id, filename, videoID).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        const successMessage = this.selectedLang === 'en'
                            ? 'Video deleted Successfully'
                            : 'ビデオは正常に削除されました';
                        this._ToastrManager.successToastr(successMessage);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
        this.qolResultVideos.splice(index, 1);
        this.qolPreviewVideos.splice(index, 1);
    }
    get f() {
        return this.addQolForm.controls;
    }
    onSubmit() {
        const data = this.addQolForm.value;
        const formData = new FormData();
        formData.append('min_value', data.min_value);
        formData.append('max_value', data.max_value);
        formData.append('level', data.level);
        formData.append('levelJa', data.levelJa);
        formData.append('description', data.description);
        formData.append('descriptionJa', data.descriptionJa);
        formData.append('led', data.led);
        formData.append('vibrations', data.vibrations);
        formData.append('colorCode', data.colorCode);
        formData.append('vibrationTime', data.vibrationTime);
        for (var i = 0; i < this.qolResultImages.length; i++) {
            formData.append('images', this.qolResultImages[i]);
        }
        for (var i = 0; i < this.qolResultVideos.length; i++) {
            formData.append('videos', this.qolResultVideos[i]);
        }
        if (!this.qolId) {
            this.qolResultService.addQol(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Content Added Successfully'
                                : 'コンテンツが正常に追加されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/qol']);
                        }, 1000);
                    }
                },
                error: (error) => { },
            });
        }
        else {
            data.id = this.qolId;
            formData.append('id', data.id);
            this.qolResultService.editQol(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Stress Updated Successfully'
                                : 'ストレスが正常に更新されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/qol']);
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
    }
    setData(data) {
        this.addQolForm.patchValue({
            colorCode: data?.colorCode,
            min_value: data?.min_value,
            max_value: data?.max_value,
            level: data?.level.en,
            levelJa: data?.level.ja,
            description: data?.description.en,
            descriptionJa: data?.description.ja,
            led: data.led,
            vibrations: data.vibrations,
            vibrationTime: data.vibrationTime,
        });
        if (data.images) {
            this.addQolForm.get('images').setValue(data.images);
        }
        if (data.videos) {
            this.addQolForm.get('videos').setValue(data.videos);
        }
    }
    goBack() {
        window.history.back();
    }
    onCancel() {
        this.submitted = false;
        this.addQolForm.reset();
    }
    isSubmitDisabled() {
        return this.addQolForm.pristine || this.addQolForm.invalid;
    }
}
AddQolComponent.ɵfac = function AddQolComponent_Factory(t) { return new (t || AddQolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_1__.QolResultService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
AddQolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddQolComponent, selectors: [["app-add-qol"]], decls: 108, vars: 85, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [4, "ngIf"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "container-fluid"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "10", "formControlName", "min_value", 1, "form-control", "mt-2", 3, "placeholder", "ngClass"], ["type", "text", "formControlName", "max_value", 1, "form-control", "mt-2", 3, "placeholder"], [1, "language-toggle"], [3, "ngClass", "click"], ["type", "text", "formControlName", "level", 1, "form-control", "mt-2", 3, "placeholder", "hidden"], ["type", "text", "formControlName", "levelJa", 1, "form-control", "mt-2", 3, "placeholder", "hidden"], [1, "col-12", "col-md-6", "col-lg-12"], ["type", "text", "formControlName", "description", 1, "form-control", "mt-2", 3, "placeholder", "ngClass", "hidden"], ["type", "text", "formControlName", "descriptionJa", 1, "form-control", "mt-2", 3, "placeholder", "hidden"], [1, "col-md-5", "mb-3"], [1, "form-group"], [1, "upload-img", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], ["class", "action_btn", "style", "cursor: pointer", 4, "ngIf"], ["type", "file", "accept", "video/*", "name", "file", "id", "file", "formControlName", "videos", 1, "btn", "chngPic", "video-upload", 2, "display", "none", 3, "change"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-5"], ["type", "checkbox", "formControlName", "vibrations", 1, "mr-2", 3, "checked", "ngModel", "ngModelChange"], ["type", "checkbox", "formControlName", "led", 1, "mr-2", 3, "checked"], ["class", "col-md-4", 4, "ngIf"], ["type", "color", "placeholder", "EnterColorCode", "formControlName", "colorCode", 1, "form-control"], [1, "pl-4", "mt-3"], [2, "color", "black", "padding-left", "12px"], [1, "card-footer", "footer-btn-block", "border-0", "bg-transparent", 2, "margin-left", "1.5%"], ["class", "btn btn-primary graident btn-small custom-button", "type", "submit", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-small", "custom-button", "mt-2", "mt-sm-0", "ml-sm-2", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "action_btn", 2, "cursor", "pointer"], [1, "col-md-6"], ["preload", "metadata", "height", "100px", "width", "100px", 1, "preview-video"], ["type", "video/mp4", 3, "src"], [1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "18px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], [1, "col-md-4"], ["type", "number", "formControlName", "vibrationTime", "min", "1", "max", "60", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "disabled"]], template: function AddQolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AddQolComponent_b_4_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddQolComponent_b_5_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_input_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddQolComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddQolComponent_span_24_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddQolComponent_span_32_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14)(34, "div", 15)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18)(39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_span_click_39_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_span_click_41_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AddQolComponent_span_47_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 12)(49, "div", 13)(50, "div", 22)(51, "div", 15)(52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 18)(56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_span_click_56_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_span_click_58_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, AddQolComponent_span_65_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 12)(67, "div", 13)(68, "div", 25)(69, "div", 26)(70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_div_click_70_listener() { return ctx.openVideoSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, AddQolComponent_span_72_Template, 3, 3, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, AddQolComponent_span_73_Template, 3, 3, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddQolComponent_Template_input_change_74_listener($event) { return ctx.onVideoSelectorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AddQolComponent_div_76_Template, 6, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 32)(79, "div", 15)(80, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddQolComponent_Template_input_ngModelChange_80_listener($event) { return ctx.isCheckedd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 32)(85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, AddQolComponent_div_90_Template, 8, 7, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 32)(92, "div", 15)(93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 37)(97, "p", 38)(98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, AddQolComponent_button_103_Template, 3, 4, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, AddQolComponent_button_104_Template, 3, 4, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQolComponent_Template_button_click_105_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 43, "qol.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addQolForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 45, "qol.MinimumValue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 47, "qol.EnterMinimumValue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](73, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.min_value.errors && (ctx.f.min_value.dirty || ctx.f.min_value.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 49, "qol.MaximumValue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 51, "qol.EnterMaximumValue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.max_value.errors && (ctx.f.max_value.dirty || ctx.f.max_value.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 53, "qol.Level"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](75, _c1, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](77, _c1, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 55, "qol.EnterLevel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 57, "qol.EnterLevel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.level.errors && (ctx.f.level.dirty || ctx.f.level.touched) || ctx.f.levelJa.errors && (ctx.f.levelJa.dirty || ctx.f.levelJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 59, "qol.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](79, _c1, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](81, _c1, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 61, "qol.EnterDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](83, _c0, ctx.submitted))("hidden", ctx.selectLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 63, "qol.EnterDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.description.errors && (ctx.f.description.dirty || ctx.f.description.touched) || ctx.f.descriptionJa.errors && (ctx.f.descriptionJa.dirty || ctx.f.descriptionJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.qolPreviewVideos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isCheckedd)("ngModel", ctx.isCheckedd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](83, 65, "qol.Vibrations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](89, 67, "qol.LEDLighting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCheckedd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLang === "en" ? "Color code" : "\u30AB\u30E9\u30FC\u30B3\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedLang === "en" ? "Note:" : "\u6CE8\u8A18:", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](101, 69, "note.note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.qolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](107, 71, "qol.Cancel"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".language-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: relative;\n    width: 70px;\n    height: 24px;\n    border-radius: 12px;\n    background-color: #ccc;\n    overflow: hidden;\n    margin-bottom: -4px;\n  }\n  \n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    height: 100%;\n    line-height: 24px;\n    text-align: center;\n    color: #fff;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  \n  .language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n    background-color: #2196F3;\n  }\n  \n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    border-radius: 12px 0 0 12px;\n  }\n  \n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 12px 12px 0;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    margin-right:  10px; \n  }\n  \n  .image_area[_ngcontent-%COMP%]{\n    padding-top: 0.5rem;\n  }\n  \n  .preview-img[_ngcontent-%COMP%]{\n    height: 65px;\n    width: 100px;\n  }\n  \n  button[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n  \n  .footer-btn-block[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSwwQ0FBMEM7RUFDakU7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBOzs7O0VBSUEsa0JBQWtCOztFQUVsQixpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFkZC1xb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xuICB9XG4gIFxuICAubGFuZ3VhZ2UtdG9nZ2xlIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogIDEwcHg7IC8qIEFkZGVkIG1hcmdpbiBiZXR3ZWVuIGJ1dHRvbiBhbmQgbGFiZWwgKi9cbiAgfVxuICBcbiAgLmltYWdlX2FyZWF7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltZ3tcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgYnV0dG9uLFxuLmJ1dHRvbnMsXG4uYnRuLFxuLm1vZGFsLWZvb3RlciAuYnRuKy5idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG5cbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5mb290ZXItYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });


/***/ }),

/***/ 837:
/*!***********************************************************************!*\
  !*** ./src/app/qol-configuration/qol-configuration-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QolRoutingModule": () => (/* binding */ QolRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _qol_listing_qol_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qol-listing/qol-listing.component */ 1228);
/* harmony import */ var _add_qol_add_qol_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-qol/add-qol.component */ 3654);
/* harmony import */ var _qol_view_qol_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qol-view/qol-view.component */ 6481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: "", component: _qol_listing_qol_listing_component__WEBPACK_IMPORTED_MODULE_0__.QolListingComponent },
    { path: 'qol-listing', component: _qol_listing_qol_listing_component__WEBPACK_IMPORTED_MODULE_0__.QolListingComponent },
    { path: 'qol-add', component: _add_qol_add_qol_component__WEBPACK_IMPORTED_MODULE_1__.AddQolComponent },
    { path: 'qol-view/:id', component: _qol_view_qol_view_component__WEBPACK_IMPORTED_MODULE_2__.QolViewComponent },
    { path: 'qol-edit/:id', component: _add_qol_add_qol_component__WEBPACK_IMPORTED_MODULE_1__.AddQolComponent },
];
class QolRoutingModule {
}
QolRoutingModule.ɵfac = function QolRoutingModule_Factory(t) { return new (t || QolRoutingModule)(); };
QolRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: QolRoutingModule });
QolRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QolRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 6907:
/*!***************************************************************!*\
  !*** ./src/app/qol-configuration/qol-configuration.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QolConfigurationModule": () => (/* binding */ QolConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _add_qol_add_qol_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-qol/add-qol.component */ 3654);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _qol_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qol-configuration-routing.module */ 837);
/* harmony import */ var _qol_listing_qol_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qol-listing/qol-listing.component */ 1228);
/* harmony import */ var _qol_view_qol_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qol-view/qol-view.component */ 6481);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);












class QolConfigurationModule {
}
QolConfigurationModule.ɵfac = function QolConfigurationModule_Factory(t) { return new (t || QolConfigurationModule)(); };
QolConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: QolConfigurationModule });
QolConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _qol_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__.QolRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](QolConfigurationModule, { declarations: [_add_qol_add_qol_component__WEBPACK_IMPORTED_MODULE_0__.AddQolComponent,
        _qol_listing_qol_listing_component__WEBPACK_IMPORTED_MODULE_4__.QolListingComponent,
        _qol_view_qol_view_component__WEBPACK_IMPORTED_MODULE_5__.QolViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _qol_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__.QolRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] }); })();


/***/ }),

/***/ 1228:
/*!************************************************************************!*\
  !*** ./src/app/qol-configuration/qol-listing/qol-listing.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QolListingComponent": () => (/* binding */ QolListingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_service/qol-result.service */ 3318);
/* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_service/user-auth.service */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);

















function QolListingComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr");
} }
const _c0 = function (a1) { return ["/DS/qol/qol-view", a1]; };
const _c1 = function (a1) { return ["/DS/qol/qol-edit", a1]; };
function QolListingComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 30)(10, "ul", 38)(11, "li")(12, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_tr_71_Template_a_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const element_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.qolDelete(element_r13._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r13.level[ctx_r9.selectedLang], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r13.description[ctx_r9.selectedLang], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r13.min_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r13.max_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, element_r13._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, element_r13._id));
} }
function QolListingComponent_p_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "common.NoResultsFound"), " ");
} }
function QolListingComponent_div_74_div_5_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_div_74_div_5_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_div_74_div_5_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_div_74_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QolListingComponent_div_74_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QolListingComponent_div_74_div_5_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.count = $event); })("ngModelChange", function QolListingComponent_div_74_div_5_Template_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.getQolList(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, QolListingComponent_div_74_div_5_option_5_Template, 2, 0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QolListingComponent_div_74_div_5_option_6_Template, 2, 0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, QolListingComponent_div_74_div_5_option_7_Template, 2, 0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QolListingComponent_div_74_div_5_option_8_Template, 2, 0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "qol.NumberofEntries"), " :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r16.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 40);
} }
function QolListingComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "div", 45)(2, "pagination-controls", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function QolListingComponent_div_74_Template_pagination_controls_pageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.pageChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, QolListingComponent_div_74_div_5_Template, 9, 8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "notice.Previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "notice.Next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.totaldocs > 10);
} }
const _c2 = function () { return ["/DS/qol/qol-add"]; };
const _c3 = function (a0, a1, a3) { return { itemsPerPage: a0, currentPage: a1, id: "second", totalItems: a3 }; };
class QolListingComponent {
    constructor(spinner, _ToastrManager, qolResultService, _userAuthService) {
        this.spinner = spinner;
        this._ToastrManager = _ToastrManager;
        this.qolResultService = qolResultService;
        this._userAuthService = _userAuthService;
        this.qolResultList = [];
        this.totaldocs = 10;
        this.page = 1;
        this.count = 10;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.sortColumn = '';
        this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.selectedLang = 'en';
        this.getQolList = (page) => {
            let data = {
                page: page ? page : this.page,
                filter: this.filterTerm ? this.filterTerm : '',
                count: this.count,
                scolumns: '',
                sortColumn: this.sortColumn,
                sortDirection: this.sortDirection == 'asc' ? 1 : -1,
            };
            this._userAuthService.getSearchList('qol').forEach((element) => {
                data.scolumns =
                    data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
            });
            this.qolResultService.qolList(data).subscribe({
                next: (res) => {
                    this.qolResultList = res.data.data;
                    this.totaldocs = res.data.total;
                    this.page = data.page;
                    setTimeout(() => { }, 500);
                },
                error: (err) => { },
            });
        };
        this.isAscending = false;
        this.isAscending1 = false;
        this.isAscending2 = false;
        this.isAscending3 = false;
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        this.dtOptions = {};
        this.getQolList();
        this.dropdownList = [
            {
                id: this.selectedLang == 'en' ? 'level.en' : 'level.ja',
                itemName: this.selectedLang == 'en' ? 'Level' : 'レベル',
            },
            {
                id: this.selectedLang == 'en' ? 'description.en' : 'description.ja',
                itemName: this.selectedLang == 'en' ? 'Description' : '説明',
            },
            {
                id: 'min_value',
                itemName: this.selectedLang == 'en' ? 'Min. Value' : '最小値',
            },
            {
                id: 'max_value',
                itemName: this.selectedLang == 'en' ? 'Max. Value' : '最大値',
            },
        ];
        // this.selectedItems = [];
        this.selectedItems = this._userAuthService.getSearchList('qol');
        this.dropdownSettings = {
            singleSelection: false,
            text: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
            selectAllText: this.selectedLang == 'en' ? 'Select All' : 'すべて選択',
            unSelectAllText: this.selectedLang == 'en' ? 'UnSelect All' : 'すべて選択を解除',
            enableSearchFilter: true,
            classes: 'myclass custom-class multiselect-dropdown-blc',
        };
    }
    pageChange(page) {
        this.getQolList(page);
    }
    qolDelete(qolId) {
        const cancelButtonText = this.selectedLang == 'en' ? 'Cancel' : 'キャンセル';
        const confirmButtonText = this.selectedLang == 'en' ? 'Yes' : 'はい';
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: this.selectedLang == 'en' ? 'Are you sure?' : '本気ですか？',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.qolResultService.deleteQol(qolId).subscribe({
                    next: (res) => {
                        if (res.statusCode === 200) {
                            this.deleteQol = res.data;
                            setTimeout(() => {
                                const successMessage = this.selectedLang === 'en'
                                    ? 'Qol removed Successfully'
                                    : 'Qol が正常に削除されました';
                                this._ToastrManager.successToastr(successMessage);
                                this.getQolList(this.page);
                                this.spinner.hide();
                            }, 500);
                        }
                    },
                    error: (err) => { },
                });
            }
        });
    }
    sort(column) {
        if (this.sortColumn === column) {
            this.sortDirection =
                this.sortDirection === _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc
                    ? _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.desc
                    : _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc;
        }
        else {
            this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc;
            this.sortColumn = column;
        }
        this.qolResultList.sort((a, b) => {
            const aValue = this.getPropertyByPath(a, this.sortColumn);
            const bValue = this.getPropertyByPath(b, this.sortColumn);
            if (aValue < bValue)
                return this.sortDirection === _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc ? -1 : 1;
            if (aValue > bValue)
                return this.sortDirection === _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.SortDirection.asc ? 1 : -1;
            return 0;
        });
    }
    getPropertyByPath(obj, path) {
        const properties = path.split('.');
        let value = obj;
        for (const prop of properties) {
            value = value[prop];
            if (value === undefined) {
                break;
            }
        }
        return value;
    }
    goBack() {
        window.history.back();
    }
    onItemSelect(item) {
        this._userAuthService.setSearchList({
            module: 'qol',
            searchColumns: this.selectedItems,
        });
    }
    OnItemDeSelect(item) {
        this._userAuthService.setSearchList({
            module: 'qol',
            searchColumns: this.selectedItems,
        });
    }
    onSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'qol',
            searchColumns: this.selectedItems,
        });
    }
    onDeSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'qol',
            searchColumns: this.selectedItems,
        });
    }
    toggleSortDirection() {
        this.isAscending = !this.isAscending;
    }
    toggleSortDirection1() {
        this.isAscending1 = !this.isAscending1;
    }
    toggleSortDirection2() {
        this.isAscending2 = !this.isAscending2;
    }
    toggleSortDirection3() {
        this.isAscending3 = !this.isAscending3;
    }
}
QolListingComponent.ɵfac = function QolListingComponent_Factory(t) { return new (t || QolListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_2__.QolResultService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_3__.UserAuthService)); };
QolListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QolListingComponent, selectors: [["app-qol-listing"]], viewQuery: function QolListingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 75, vars: 55, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "container"], [1, "main-sorting-header"], [1, "sorting-block"], [1, "select-block"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "search-block"], [1, "input-group", "add-on", "mb-0"], ["type", "submit", 1, "btn", "btn-default", "srch-icon"], [1, "fa-solid", "fa-magnifying-glass"], ["name", "srch-term", "id", "srch-term", "type", "text", "autocomplete", "off", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], [1, "input-group-btn"], [1, "sorting-button"], [1, "btn-login", "btn", "btn-primary", "btn-block", "btn-pad-top-bot-4", 3, "routerLink"], [1, "fa-solid", "fa-circle-plus"], [1, "row"], [1, "col-12", "col-lg-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-sm", "table-striped", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%"], [1, "text-center", 3, "click"], [1, "sort-cell-wrapper", "d-flex"], [1, "sort-cell", "d-inline-flex", "flex-column", "justify-content-center"], ["class", "up", 4, "ngIf"], ["class", "down", 4, "ngIf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "up"], ["src", "../../../assets/img/arrow_drop_up.svg", "alt", "arrow-up", 1, "img-fluid"], [1, "down"], ["src", "../../../assets/img/arrow_drop_down.svg", "alt", "arrow-down", 1, "img-fluid"], [1, "care-path-right-icon", "pt-0"], ["title", "View", 3, "routerLink"], [1, "fa-solid", "fa-eye"], ["title", "Edit", 3, "routerLink"], [1, "fa-solid", "fa-pencil"], ["title", "Delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "col-sm-6", "text-left"], ["id", "second", 3, "previousLabel", "nextLabel", "pageChange"], ["class", "col-sm-6 text-right", 4, "ngIf"], [1, "col-sm-6", "text-right"], ["for", "entries"], ["id", "entries", 3, "ngModel", "ngModelChange"], ["value", "10", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "30", 4, "ngIf"], ["value", "40", 4, "ngIf"], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"]], template: function QolListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "angular2-multiselect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QolListingComponent_Template_angular2_multiselect_ngModelChange_16_listener($event) { return ctx.selectedItems = $event; })("onSelect", function QolListingComponent_Template_angular2_multiselect_onSelect_16_listener($event) { return ctx.onItemSelect($event); })("onDeSelect", function QolListingComponent_Template_angular2_multiselect_onDeSelect_16_listener($event) { return ctx.OnItemDeSelect($event); })("onSelectAll", function QolListingComponent_Template_angular2_multiselect_onSelectAll_16_listener($event) { return ctx.onSelectAll($event); })("onDeSelectAll", function QolListingComponent_Template_angular2_multiselect_onDeSelectAll_16_listener($event) { return ctx.onDeSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function QolListingComponent_Template_input_ngModelChange_21_listener($event) { return ctx.filterTerm = $event; })("keyup", function QolListingComponent_Template_input_keyup_21_listener() { return ctx.getQolList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18)(25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 6)(30, "div", 7)(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "table", 24)(35, "thead")(36, "tr")(37, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_Template_th_click_37_listener() { ctx.toggleSortDirection(); return ctx.sort("level.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, QolListingComponent_span_42_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, QolListingComponent_span_43_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_Template_th_click_44_listener() { ctx.toggleSortDirection1(); return ctx.sort("description.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, QolListingComponent_span_49_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, QolListingComponent_span_50_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_Template_th_click_51_listener() { ctx.toggleSortDirection2(); return ctx.sort("min_value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, QolListingComponent_span_56_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, QolListingComponent_span_57_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QolListingComponent_Template_th_click_58_listener() { ctx.toggleSortDirection3(); return ctx.sort("max_value"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, QolListingComponent_span_63_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, QolListingComponent_span_64_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, QolListingComponent_tr_69_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, QolListingComponent_tr_71_Template, 20, 10, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](72, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, QolListingComponent_p_73_Template, 3, 3, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, QolListingComponent_div_74_Template, 6, 7, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 26, "qol.QolConfigurationManagement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 28, "qol.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.dropdownList)("ngModel", ctx.selectedItems)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 30, "qol.SearchDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](50, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 32, "qol.AddQol"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 34, "qol.Level"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 36, "qol.Description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 38, "qol.Min.Value"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAscending2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAscending2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 40, "qol.Max.Value"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAscending3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAscending3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 42, "qol.Action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](70, 44, ctx.qolResultList, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](51, _c3, ctx.count, ctx.page, ctx.totaldocs)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](72, 47, ctx.qolResultList, ctx.filterTerm));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totaldocs == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totaldocs > 10);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginationControlsComponent, angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__.AngularMultiSelect, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(27, 86, 219);\n  width: 30px;\n  height: 30px;\n  color: white;\n\n  border-radius: 50%;\n  \n}\n\n.care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(37, 96, 235);\n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  min-height: 37px;\n  margin-right: 0px;\n}\n\n[_nghost-%COMP%]     .ngx-pagination {\n  margin-left: -47px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFvbC1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZOztFQUVaLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJxb2wtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmUtcGF0aC1yaWdodC1pY29uIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgODYsIDIxOSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cbn1cblxuLmNhcmUtcGF0aC1yaWdodC1pY29uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDk2LCAyMzUpO1xufVxuXG5idXR0b24sXG4uYnV0dG9ucyxcbi5idG4sXG4ubW9kYWwtZm9vdGVyIC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtaW4taGVpZ2h0OiAzN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNDdweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 6481:
/*!******************************************************************!*\
  !*** ./src/app/qol-configuration/qol-view/qol-view.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QolViewComponent": () => (/* binding */ QolViewComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/qol-result.service */ 3318);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function QolViewComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "video", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "source", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const videoPreview_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", videoPreview_r2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", videoPreview_r2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "qol.Yourbrowserdoesnotsupportthevideotag."), " ");
} }
function QolViewComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 13)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "qol.VibrationTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.qolDetails.vibrationTime, " ");
} }
const _c0 = function (a0) { return { active: a0 }; };
class QolViewComponent {
    constructor(qolResultService, spinner, route) {
        this.qolResultService = qolResultService;
        this.spinner = spinner;
        this.route = route;
        this.qol_id = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.video_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.video_url;
        this.qolPreviewVideos = [];
        this.qolPreviewImages = [];
        this.selectedLang = localStorage.getItem('selectedLang');
        this.getQolView = () => {
            this.spinner.show();
            this.qolResultService.qolView(this.qol_id).subscribe({
                next: (res) => {
                    this.qolDetails = res.data[0];
                    this.image = res.data[0].images;
                    this.video = res.data[0].videos;
                    this.qolDetails.images.forEach((element) => {
                        const path = `${this.url}/Other/${element}`;
                        this.qolPreviewImages.push(path);
                    });
                    this.qolDetails.videos.forEach((element) => {
                        const videoPath = `${this.video_url}/Other/${element.videoURL}`;
                        this.qolPreviewVideos.push(videoPath);
                    });
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                },
                error: (err) => { },
            });
        };
        this.route.paramMap.subscribe((params) => {
            this.qol_id = params.get('id');
        });
    }
    ngOnInit() {
        this.getQolView();
        this.selectedLang = localStorage.getItem('selectedLang');
        if (this.selectedLang === 'en') {
            this.selectedLng = 'en';
            this.selectLng = 'en';
        }
        else {
            this.selectedLng = 'ja';
            this.selectLng = 'ja';
        }
    }
    goBack() {
        window.history.back();
    }
}
QolViewComponent.ɵfac = function QolViewComponent_Factory(t) { return new (t || QolViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_qol_result_service__WEBPACK_IMPORTED_MODULE_1__.QolResultService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
QolViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QolViewComponent, selectors: [["app-qol-view"]], decls: 88, vars: 51, consts: [[1, "wh700"], [1, "content"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "form-group", "mb-3"], [1, "label"], [1, "language-toggle"], [3, "ngClass", "click"], [1, "col-12", "col-md-6", "col-lg-12"], [1, "col-12", "col-md-6", "col-lg-6"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "mr-2", 3, "checked", "disabled"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-5"], ["type", "color", "placeholder", "EnterColorCode", 1, "form-control", 3, "value"], [1, "col-md-12"], ["target", "_blank", 3, "href"], ["preload", "metadata", "height", "100px", "width", "100px", 1, "preview-video"], ["type", "video/mp4", 3, "src"], [1, "col-md-4"]], template: function QolViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h2")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QolViewComponent_Template_input_click_9_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 15)(38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QolViewComponent_Template_span_click_38_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QolViewComponent_Template_span_click_40_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div")(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10)(46, "div", 11)(47, "div", 17)(48, "div", 13)(49, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 15)(53, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QolViewComponent_Template_span_click_53_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QolViewComponent_Template_span_click_55_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 10)(60, "div", 11)(61, "div", 18)(62, "div", 13)(63, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, QolViewComponent_div_67_Template, 6, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 10)(69, "div", 11)(70, "div", 18)(71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 18)(77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, QolViewComponent_div_82_Template, 6, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 22)(84, "div", 13)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 25, "qol.QolDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 27, "qol.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 29, "qol.Min.Value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.qolDetails == null ? null : ctx.qolDetails.min_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 31, "qol.Max.Value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.qolDetails == null ? null : ctx.qolDetails.max_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 33, "qol.Level"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](45, _c0, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectLng === "en" ? ctx.qolDetails == null ? null : ctx.qolDetails.level.en : ctx.qolDetails == null ? null : ctx.qolDetails.level.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 35, "qol.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](47, _c0, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](49, _c0, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedLng === "en" ? ctx.qolDetails == null ? null : ctx.qolDetails.description.en : ctx.qolDetails == null ? null : ctx.qolDetails.description.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 37, "qol.UploadedVideos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.qolPreviewVideos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.qolDetails == null ? null : ctx.qolDetails.vibrations)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 39, "qol.Vibrations"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.qolDetails == null ? null : ctx.qolDetails.led)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 41, "qol.LEDLighting"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.qolDetails == null ? null : ctx.qolDetails.vibrations) == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLang === "en" ? "Color code" : "\u30AB\u30E9\u30FC\u30B3\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.qolDetails.colorCode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".language-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  width: 70px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: #ccc;\n  overflow: hidden;\n  margin-bottom: -1rem;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 12px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 12px 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px; \n}\n\n.image_area[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n.preview-img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100px;\n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n\n.label[_ngcontent-%COMP%]{\n  padding-bottom: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFvbC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsMENBQTBDO0FBQ2hFOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InFvbC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWRkZWQgbWFyZ2luIGJldHdlZW4gYnV0dG9uIGFuZCBsYWJlbCAqL1xufVxuXG4uaW1hZ2VfYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4ucHJldmlldy1pbWcge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuYnV0dG9uLFxuLmJ1dHRvbnMsXG4uYnRuLFxuLm1vZGFsLWZvb3RlciAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcblxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmxhYmVse1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_qol-configuration_qol-configuration_module_ts.js.map