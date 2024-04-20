"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_questionnaire_questionnaire_module_ts"],{

/***/ 2343:
/*!***************************************************!*\
  !*** ./src/app/_service/questionnaire.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireService": () => (/* binding */ QuestionnaireService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class QuestionnaireService {
    constructor(_http) {
        this._http = _http;
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    questionnaireList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}questionnaire/get-all-questions?page=${data.page}&count=${data.count}&search=${data.filter}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    // /api/v1/questionnaire/get-question/{id}
    getQuestion(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}questionnaire/get-question/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    addQuestion(driverParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}questionnaire/add-question`, driverParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    editQuestion(editDriverParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}questionnaire/update-question`, editDriverParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteQuestion(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .delete(`${this._api_url}questionnaire/delete/${id}`, requestOptions)
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
QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) { return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
QuestionnaireService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: QuestionnaireService, factory: QuestionnaireService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9083:
/*!********************************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-add/questionnaire-add.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireAddComponent": () => (/* binding */ QuestionnaireAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_service/questionnaire.service */ 2343);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function QuestionnaireAddComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function QuestionnaireAddComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Update Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function QuestionnaireAddComponent_div_19_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QuestionnaireAddComponent_div_19_select_20_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onChange($event, questionIndex_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Select Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Radio button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Checkboxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function QuestionnaireAddComponent_div_19_select_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 29, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function QuestionnaireAddComponent_div_19_select_21_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.onChange($event, questionIndex_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please Select Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Radio button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Checkboxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx_r9.questionnairedId);
} }
const _c0 = function (a0) { return { active: a0 }; };
function QuestionnaireAddComponent_div_19_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_div_25_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.selectedLng = "en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Eng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_div_25_div_3_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.selectedLng = "ja"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Jap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r21.selectedLng === "en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r21.selectedLng === "ja"));
} }
function QuestionnaireAddComponent_div_19_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 39)(2, "li", 40)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 41)(6, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0\u00A0Score:\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function QuestionnaireAddComponent_div_19_div_25_div_4_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.numericOnly($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_div_25_div_4_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const answerIndex_r27 = restoredCtx.index; const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.removeAnswerSheet(questionIndex_r7, answerIndex_r27)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_div_25_div_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.addAnswerSheet(questionIndex_r7, ctx_r32.questionType)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const answerIndex_r27 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", answerIndex_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Option ", answerIndex_r27 + 1, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r22.selectedLng == "en") && !(ctx_r22.selectedLng == "bo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r22.selectedLng == "ja"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r22.buttonDisable);
} }
function QuestionnaireAddComponent_div_19_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "div", 19)(2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuestionnaireAddComponent_div_19_div_25_div_3_Template, 5, 6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QuestionnaireAddComponent_div_19_div_25_div_4_Template, 17, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.answerAddObj(questionIndex_r7).controls.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.answerAddObj(questionIndex_r7).controls);
} }
function QuestionnaireAddComponent_div_19_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const questionIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.removeQuestion(questionIndex_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuestionnaireAddComponent_div_19_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_a_28_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.addQuestion()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuestionnaireAddComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 9)(2, "div", 18)(3, "div", 2)(4, "div", 9)(5, "div", 19)(6, "ul")(7, "li", 20)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21)(11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.selectLng = "en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Eng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_div_19_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.selectLng = "ja"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Jap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 23)(16, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 20)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Answer Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, QuestionnaireAddComponent_div_19_select_20_Template, 10, 0, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, QuestionnaireAddComponent_div_19_select_21_Template, 10, 1, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span")(23, "br")(24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, QuestionnaireAddComponent_div_19_div_25_Template, 5, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, QuestionnaireAddComponent_div_19_a_27_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, QuestionnaireAddComponent_div_19_a_28_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const isLast_r6 = ctx.last;
    const questionIndex_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", questionIndex_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r2.selectLng === "en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r2.selectLng === "ja"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r2.selectLng !== "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r2.selectLng !== "ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.questionnairedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.questionnairedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.questionType != "range" || (ctx_r2.paragraphquestionType != "short_answer" || ctx_r2.shortAnswerquestionType != "paragraph") && (ctx_r2.OtherquestionType == "option" || ctx_r2.OtherquestionType == "checkboxes" || ctx_r2.OtherquestionType == "dropdown"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.questionObjLength != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isLast_r6 && ctx_r2.questionObjLength < ctx_r2.Qcount - 1);
} }
function QuestionnaireAddComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r3.questionForm.valid);
} }
function QuestionnaireAddComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionnaireAddComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.updateForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r4.questionForm.valid);
} }
const _c1 = function () { return ["/DS/questionnaire"]; };
class QuestionnaireAddComponent {
    constructor(fb, _questionnaireService, _ToastrManager, router, route) {
        this.fb = fb;
        this._questionnaireService = _questionnaireService;
        this._ToastrManager = _ToastrManager;
        this.router = router;
        this.route = route;
        this.questionObjLength = 0;
        this.isSelected = true;
        this.optionDisabled = true;
        this.buttonDisable = false;
        this.Qcount = 1;
        this.selectLng = 'en';
        this.selectedLng = 'en';
    }
    ngOnInit() {
        if (this.router.url.includes('questionnaire-edit')) {
            this.route.paramMap.subscribe((params) => {
                this.questionnairedId = params.get('id');
                this.getQuestion();
            });
        }
        this.questionForm = this.fb.group({
            questionObj: this.fb.array([]),
        });
        const question_creds = this.questionForm.get('questionObj');
        if (this.questionnairedId) {
        }
        else {
            question_creds.push(this.fb.group({
                questionName: '',
                questionNameJA: '',
                ansType: '',
                pfeedback: ['false'],
                title: '',
                precision: '',
                questionnaireSetObj: this.fb.array([]),
                RangequestionnaireSetObj: this.fb.array([]),
                paragraphSetObj: this.fb.array([]),
                shortAnswerSetObj: this.fb.array([]),
            }));
        }
    }
    questionObjArr() {
        return this.questionForm.get('questionObj');
    }
    newQuestionAdd() {
        return this.fb.group({
            questionName: '',
            questionNameJA: '',
            ansType: '',
            precision: '',
            pfeedback: ['false'],
            title: '',
            index: this.questionObjLength,
            questionnaireSetObj: this.fb.array([]),
            RangequestionnaireSetObj: this.fb.array([]),
            paragraphSetObj: this.fb.array([]),
            shortAnswerSetObj: this.fb.array([]),
        });
    }
    addQuestion() {
        this.questionObjLength++;
        this.optionDisabled = false;
        this.buttonDisable = false;
        this.questionObjArr().push(this.newQuestionAdd());
    }
    removeQuestion(questionIndex) {
        this.questionObjLength = this.questionObjLength - 1;
        this.questionObjArr().removeAt(questionIndex);
    }
    answerAddObj(questionIndex) {
        return this.questionObjArr()
            .at(questionIndex)
            .get('questionnaireSetObj');
    }
    addAnswer() {
        return this.fb.group({
            name: [''],
            nameJA: [''],
            scoreVal: ['0'],
            colorCode: ['#007e0c'],
        });
    }
    addAnswerSheet(questionIndex, questionType) {
        if (questionType == 'range') {
            this.buttonDisable = true;
        }
        if (questionType != 'range') {
            this.buttonDisable = false;
            this.answerAddObj(questionIndex).push(this.addAnswer());
        }
    }
    RangeaddAnswer() {
        return this.fb.group({
            range: [''],
            range_risk_min: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            range_risk_max: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            scoreVal: ['0'],
            colorCode: ['#007e0c'],
        }, {});
    }
    RangeanswerAddObj(questionIndex) {
        return this.questionObjArr()
            .at(questionIndex)
            .get('RangequestionnaireSetObj');
    }
    addAnswerSheet2(questionIndex, questionType) { }
    onChange(event, id) {
        this.questionType = event.target.value;
        this.optionDisabled = true;
        localStorage.setItem('RangequestionType', '');
        if (event.target.value == 'range') {
            let questionType = 'range';
            localStorage.setItem('RangequestionType', questionType);
            this.answerAddObj(id).clear();
            this.question_creds = this.questionForm.get('questionObj');
            const RangeanswerAddObj = this.question_creds
                .at(id)
                .get('RangequestionnaireSetObj');
            RangeanswerAddObj.push(this.fb.group({
                range: [''],
                range_risk_min: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
                range_risk_max: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
                scoreVal: ['0'],
                colorCode: ['#007e0c'],
            }, {}));
        }
        else if (event.target.value == 'paragraph') {
            this.RangeanswerAddObj(id).clear();
            this.answerAddObj(id).clear();
            this.buttonDisable = false;
            let OtherquestionType = event.target.value;
            localStorage.setItem('paragraphquestionType', OtherquestionType);
            this.question_creds = this.questionForm.get('questionObj');
            const answer_creds = this.question_creds
                .at(id)
                .get('paragraphSetObj');
            answer_creds.push(this.fb.group({
                name: [''],
                nameJA: [''],
                scoreVal: [''],
                colorCode: ['#007e0c'],
            }));
        }
        else if (event.target.value == 'short_answer') {
            this.RangeanswerAddObj(id).clear();
            this.answerAddObj(id).clear();
            this.buttonDisable = false;
            let OtherquestionType = event.target.value;
            localStorage.setItem('shortAnswerquestionType', OtherquestionType);
            this.question_creds = this.questionForm.get('questionObj');
            const answer_creds = this.question_creds
                .at(id)
                .get('shortAnswerSetObj');
            answer_creds.push(this.fb.group({
                name: [''],
                nameJA: [''],
                scoreVal: [''],
                colorCode: ['#007e0c'],
            }));
        }
        else {
            this.RangeanswerAddObj(id).clear();
            this.answerAddObj(id).clear();
            this.buttonDisable = false;
            let OtherquestionType = event.target.value;
            localStorage.setItem('OtherquestionType', OtherquestionType);
            this.question_creds = this.questionForm.get('questionObj');
            const answer_creds = this.question_creds
                .at(id)
                .get('questionnaireSetObj');
            answer_creds.push(this.fb.group({
                name: [''],
                nameJA: [''],
                scoreVal: [''],
                colorCode: ['#007e0c'],
            }));
        }
        if (localStorage.getItem('RangequestionType') != '' ||
            localStorage.getItem('RangequestionType') != undefined) {
            this.selectQuestion = localStorage.getItem('RangequestionType');
        }
        if (localStorage.getItem('OtherquestionType') != '' ||
            localStorage.getItem('OtherquestionType') != undefined) {
            this.OtherquestionType = localStorage.getItem('OtherquestionType');
        }
    }
    removeAnswerSheet(questionIndex, answerIndex) {
        this.answerAddObj(questionIndex).removeAt(answerIndex);
    }
    numericOnly(event) {
        let patt = new RegExp(/^\d*\.?\d{0,2}$/g);
        let result = patt.test(event.key);
        return result;
    }
    submitForm() {
        let obj1 = {
            questionName: {
                en: this.questionForm.value.questionObj[0].questionName,
                ja: this.questionForm.value.questionObj[0].questionNameJA,
            },
            ansType: this.questionForm.value.questionObj[0].ansType,
        };
        let options = [];
        this.questionForm.value.questionObj[0].questionnaireSetObj.forEach((element) => {
            let ob = {
                name: {
                    en: element.name,
                    ja: element.nameJA,
                },
                scoreVal: Number(element.scoreVal),
            };
            options.push(ob);
        });
        obj1['options'] = options;
        this._questionnaireService.addQuestion(obj1).subscribe((res) => {
            setTimeout(() => {
                this._ToastrManager.successToastr('Successfully');
                this.router.navigate(['/DS/questionnaire']);
            }, 1000);
        }, (error) => {
            this._ToastrManager.errorToastr('Failed');
        });
    }
    updateForm() {
        const udata = {
            _id: this.questionnairedId,
            questionName: {
                en: this.questionForm.value.questionObj[0].questionName,
                ja: this.questionForm.value.questionObj[0].questionNameJA,
            },
            ansType: this.questionForm.value.questionObj[0].ansType,
        };
        let options = [];
        this.questionForm.value.questionObj[0].questionnaireSetObj.forEach((element) => {
            let ob = {
                name: {
                    en: element.name,
                    ja: element.nameJA,
                },
                scoreVal: Number(element.scoreVal),
            };
            options.push(ob);
        });
        udata['options'] = options;
        this._questionnaireService.editQuestion(udata).subscribe((res) => {
            setTimeout(() => {
                this._ToastrManager.successToastr('Successfully');
                this.router.navigate(['/DS/questionnaire']);
            }, 1000);
        }, (error) => {
            this._ToastrManager.errorToastr('Failed');
        });
    }
    getQuestion() {
        this._questionnaireService.getQuestion(this.questionnairedId).subscribe((res) => {
            this.questionData = res.data;
            this.questionType = this.questionData.ansType;
            this.OtherquestionType = this.questionData.ansType;
            const question_creds = this.questionForm.get('questionObj');
            if (this.questionnairedId) {
                setTimeout(() => {
                    question_creds.push(this.fb.group({
                        questionName: this.questionData?.questionName.en,
                        questionNameJA: this.questionData?.questionName.ja,
                        ansType: this.questionData?.ansType,
                        pfeedback: ['false'],
                        title: '',
                        precision: '',
                        questionnaireSetObj: this.fb.array([]),
                        RangequestionnaireSetObj: this.fb.array([]),
                        paragraphSetObj: this.fb.array([]),
                        shortAnswerSetObj: this.fb.array([]),
                    }));
                    if (this.questionData.ansType == 'range') {
                        this.buttonDisable = true;
                    }
                    if (this.questionData.ansType != 'range') {
                        this.buttonDisable = false;
                        for (let i = 0; i < this.questionData.options.length; i++) {
                            this.answerAddObj(0).push(this.fb.group({
                                name: [this.questionData.options[i].name.en],
                                nameJA: [this.questionData.options[i].name.ja],
                                scoreVal: [this.questionData.options[i].scoreVal],
                                colorCode: [this.questionData.options[i].colorCode],
                            }));
                        }
                    }
                }, 100);
            }
        }, (error) => { });
    }
}
QuestionnaireAddComponent.ɵfac = function QuestionnaireAddComponent_Factory(t) { return new (t || QuestionnaireAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
QuestionnaireAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuestionnaireAddComponent, selectors: [["app-questionnaire-add"]], decls: 25, vars: 9, consts: [[1, "content", "px-5", "py-4", 2, "min-height", "548px"], [1, "container-fluid"], [1, "row"], [1, "col-8"], [4, "ngIf"], [1, "title_right"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "col-12"], [1, "card", "border-0", "shadow"], [3, "formGroup"], ["formArrayName", "questionObj"], ["class", "row mt-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6"], [1, "cd-btn"], ["type", "submit", "class", "btn-login btn btn-primary d-inline-block mt-3", 3, "disabled", "click", 4, "ngIf"], [1, "row", "mt-3", 3, "formGroupName"], [1, "qcount-bg"], [1, "d-list", "d-list2"], [2, "width", "60%"], [1, "language-toggle"], [3, "ngClass", "click"], ["type", "text", "placeholder", "Enter question", "formControlName", "questionName", 1, "form-control", 3, "hidden"], ["type", "text", "placeholder", "\u8CEA\u554F\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "formControlName", "questionNameJA", 1, "form-control", 3, "hidden"], ["class", "form-control", "formControlName", "ansType", 3, "change", 4, "ngIf"], ["formArrayName", "questionnaireSetObj", 4, "ngIf"], [1, "col-1"], ["class", "minus-icon-cd", 3, "click", 4, "ngIf"], ["formControlName", "ansType", 1, "form-control", 3, "change"], ["rangevalue1", ""], ["value", ""], ["value", "option"], ["value", "checkboxes"], ["value", "dropdown"], ["rangevalue", ""], ["formArrayName", "questionnaireSetObj"], ["class", "language-toggle", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], [2, "display", "inline"], ["type", "text", "formControlName", "name", "placeholder", "Enter option", 3, "hidden"], ["type", "text", "formControlName", "nameJA", "placeholder", "\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", 3, "hidden"], ["type", "text", "formControlName", "scoreVal", 3, "keypress"], [3, "click"], [1, "fa-solid", "fa-circle-minus"], ["type", "button", 3, "disabled", "click"], [1, "fa-solid", "fa-circle-plus"], [1, "minus-icon-cd", 3, "click"], ["type", "submit", 1, "btn-login", "btn", "btn-primary", "d-inline-block", "mt-3", 3, "disabled", "click"]], template: function QuestionnaireAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, QuestionnaireAddComponent_h2_4_Template, 3, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QuestionnaireAddComponent_h2_5_Template, 3, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "nav")(8, "ol", 6)(9, "li", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Aptitude Questionnaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "div", 9)(16, "div", 10)(17, "form", 11)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, QuestionnaireAddComponent_div_19_Template, 29, 14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, QuestionnaireAddComponent_button_23_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, QuestionnaireAddComponent_button_24_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.questionnairedId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.questionnairedId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" > ", ctx.questionnairedId ? "Update Question" : "Add Question", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.questionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.questionObjArr().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.questionnairedId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.questionnairedId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName], styles: [".active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #0a0a0a;\n  }\n  .inactive[_ngcontent-%COMP%] {\n    background-color: white;\n    color: grey;\n  }\n  .custom-button[_ngcontent-%COMP%] {\n    height: 45px;\n    width: 250px;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: relative;\n    width: 70px;\n    height: 24px;\n    border-radius: 12px;\n    background-color: #ccc;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    height: 100%;\n    line-height: 24px;\n    text-align: center;\n    color: #fff;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  .language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n    background-color: #2196F3;\n  }\n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    border-radius: 12px 0 0 12px;\n  }\n  .language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 12px 12px 0;\n  }\n  label[_ngcontent-%COMP%] {\n    margin-right:  10px; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ubmFpcmUtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBRUE7SUFDRSxtQkFBbUIsRUFBRSwwQ0FBMEM7RUFDakUiLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwYTBhMGE7XG4gIH1cbiAgLmluYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuICAuY3VzdG9tLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuXG4gIC5sYW5ndWFnZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgfVxuICBcbiAgLmxhbmd1YWdlLXRvZ2dsZSBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xuICB9XG4gIFxuICAubGFuZ3VhZ2UtdG9nZ2xlIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogIDEwcHg7IC8qIEFkZGVkIG1hcmdpbiBiZXR3ZWVuIGJ1dHRvbiBhbmQgbGFiZWwgKi9cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 8461:
/*!****************************************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-listing/questionnaire-listing.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireListingComponent": () => (/* binding */ QuestionnaireListingComponent)
/* harmony export */ });
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_service/questionnaire.service */ 2343);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);













function QuestionnaireListingComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr");
} }
function QuestionnaireListingComponent_tr_40_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pathwayL_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", pathwayL_r5.name.en, " -(score:", pathwayL_r5.scoreVal, ") ");
} }
const _c0 = function (a1) { return ["/DS/questionnaire/questionnaire-edit", a1]; };
function QuestionnaireListingComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 23)(6, "div", 24)(7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, QuestionnaireListingComponent_tr_40_li_8_Template, 2, 2, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 19)(13, "ul", 25)(14, "li")(15, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li")(18, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionnaireListingComponent_tr_40_Template_a_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const element_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.delete(element_r3._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r3.questionName.en);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r3.ansType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r3.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 5, element_r3.createdAt, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, element_r3._id));
} }
const _c1 = function () { return ["/DS/questionnaire/questionnaire-add"]; };
const _c2 = function (a0, a1, a3) { return { itemsPerPage: a0, currentPage: a1, id: "second", totalItems: a3 }; };
class QuestionnaireListingComponent {
    constructor(_questionnaireService, _ToastrManager, spinner) {
        this._questionnaireService = _questionnaireService;
        this._ToastrManager = _ToastrManager;
        this.spinner = spinner;
        this.questionnaireList = [];
        this.totaldocs = 10;
        this.page = 1;
        this.count = 10;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.dtOptions = {};
        this.getQuestionnaire(1);
    }
    getQuestionnaire(page) {
        let data = {
            page: page ? page : this.page,
            filter: this.filterTerm ? this.filterTerm : '',
            count: this.count,
        };
        this._questionnaireService.questionnaireList(data).subscribe((res) => {
            this.questionnaireList = res.data.questionnaire;
            this.totaldocs = res.data.total;
            this.page = data.page;
            setTimeout(() => { }, 1000);
        }, (error) => {
            this._ToastrManager.errorToastr('Failed');
        });
    }
    pageChange(page) {
        this.getQuestionnaire(page);
    }
    view(id) { }
    edit(id) { }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this._questionnaireService.deleteQuestion(id).subscribe({
                    next: (res) => {
                        if (res.statusCode === 200) {
                            setTimeout(() => {
                                this._ToastrManager.successToastr(res.message);
                                this.getQuestionnaire();
                                this.spinner.hide();
                            }, 500);
                        }
                    },
                    error: (err) => { },
                });
            }
        });
    }
    viewPathWayList(pathWayId) {
        $('#myDropdown').toggle('show');
    }
}
QuestionnaireListingComponent.ɵfac = function QuestionnaireListingComponent_Factory(t) { return new (t || QuestionnaireListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService)); };
QuestionnaireListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuestionnaireListingComponent, selectors: [["app-questionnaire-listing"]], viewQuery: function QuestionnaireListingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 43, vars: 17, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "clearfix"], [1, "pathway-template"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-9"], [1, "input-group", "add-on", "mb-0"], ["type", "submit", 1, "btn", "btn-default", "srch-icon"], [1, "fa-solid", "fa-magnifying-glass"], ["placeholder", "Search questionnaire", "name", "srch-term", "id", "srch-term", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "input-group-btn"], [1, "col-12", "col-lg-3"], [1, "btn-login", "btn", "btn-primary", "btn-block", "mt-20", 3, "routerLink"], [1, "fa-solid", "fa-circle-plus"], [1, "col-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-sm", "table-striped", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "text-center"], [1, "text-center", 2, "width", "100px"], [4, "ngFor", "ngForOf"], ["id", "second", "previousLabel", "", "nextLabel", "", 3, "pageChange"], [1, "text-left"], [1, "dropdown1"], [1, "care-path-right-icon", "pt-0"], ["title", "Edit", 3, "routerLink"], [1, "fa-solid", "fa-pencil"], ["title", "Delete", 3, "click"], [1, "fa-solid", "fa-trash-can"]], template: function QuestionnaireListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aptitude Questionnaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function QuestionnaireListingComponent_Template_input_ngModelChange_13_listener($event) { return ctx.filterTerm = $event; })("keyup", function QuestionnaireListingComponent_Template_input_keyup_13_listener() { return ctx.getQuestionnaire(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13)(16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Add Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 4)(20, "div", 5)(21, "div", 6)(22, "div", 16)(23, "div", 17)(24, "table", 18)(25, "thead")(26, "tr")(27, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, QuestionnaireListingComponent_tr_38_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, QuestionnaireListingComponent_tr_40_Template, 20, 10, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function QuestionnaireListingComponent_Template_pagination_controls_pageChange_42_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 6, ctx.questionnaireList, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](13, _c2, ctx.count, ctx.page, ctx.totaldocs)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](41, 9, ctx.questionnaireList, ctx.filterTerm));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: [".showing[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    background-color: rgb(27, 86, 219);\n    width: 100%;\n    height:100%;\n    padding: 0.5rem;\n    color: white;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ubmFpcmUtbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InF1ZXN0aW9ubmFpcmUtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLnNob3dpbmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJlLXBhdGgtcmlnaHQtaWNvbiBhe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgODYsIDIxOSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"] });


/***/ }),

/***/ 6005:
/*!***************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireRoutingModule": () => (/* binding */ QuestionnaireRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _questionnaire_listing_questionnaire_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnaire-listing/questionnaire-listing.component */ 8461);
/* harmony import */ var _questionnaire_add_questionnaire_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionnaire-add/questionnaire-add.component */ 9083);
/* harmony import */ var _questionnaire_view_questionnaire_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire-view/questionnaire-view.component */ 3371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: "", component: _questionnaire_listing_questionnaire_listing_component__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireListingComponent },
    { path: 'questionnaire-listing', component: _questionnaire_listing_questionnaire_listing_component__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireListingComponent },
    { path: 'questionnaire-add', component: _questionnaire_add_questionnaire_add_component__WEBPACK_IMPORTED_MODULE_1__.QuestionnaireAddComponent },
    { path: 'questionnaire-edit/:id', component: _questionnaire_add_questionnaire_add_component__WEBPACK_IMPORTED_MODULE_1__.QuestionnaireAddComponent },
    { path: 'questionnaire-view', component: _questionnaire_view_questionnaire_view_component__WEBPACK_IMPORTED_MODULE_2__.QuestionnaireViewComponent }
];
class QuestionnaireRoutingModule {
}
QuestionnaireRoutingModule.ɵfac = function QuestionnaireRoutingModule_Factory(t) { return new (t || QuestionnaireRoutingModule)(); };
QuestionnaireRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: QuestionnaireRoutingModule });
QuestionnaireRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuestionnaireRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 3371:
/*!**********************************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-view/questionnaire-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireViewComponent": () => (/* binding */ QuestionnaireViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class QuestionnaireViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuestionnaireViewComponent.ɵfac = function QuestionnaireViewComponent_Factory(t) { return new (t || QuestionnaireViewComponent)(); };
QuestionnaireViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionnaireViewComponent, selectors: [["app-questionnaire-view"]], decls: 2, vars: 0, template: function QuestionnaireViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questionnaire-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbm5haXJlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5449:
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireModule": () => (/* binding */ QuestionnaireModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnaire-routing.module */ 6005);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _questionnaire_listing_questionnaire_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire-listing/questionnaire-listing.component */ 8461);
/* harmony import */ var _questionnaire_add_questionnaire_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionnaire-add/questionnaire-add.component */ 9083);
/* harmony import */ var _questionnaire_view_questionnaire_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire-view/questionnaire-view.component */ 3371);
/* harmony import */ var _service_questionnaire_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/questionnaire.service */ 2343);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);











class QuestionnaireModule {
}
QuestionnaireModule.ɵfac = function QuestionnaireModule_Factory(t) { return new (t || QuestionnaireModule)(); };
QuestionnaireModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: QuestionnaireModule });
QuestionnaireModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_service_questionnaire_service__WEBPACK_IMPORTED_MODULE_5__.QuestionnaireService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](QuestionnaireModule, { declarations: [_questionnaire_listing_questionnaire_listing_component__WEBPACK_IMPORTED_MODULE_2__.QuestionnaireListingComponent,
        _questionnaire_add_questionnaire_add_component__WEBPACK_IMPORTED_MODULE_3__.QuestionnaireAddComponent,
        _questionnaire_view_questionnaire_view_component__WEBPACK_IMPORTED_MODULE_4__.QuestionnaireViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_questionnaire_questionnaire_module_ts.js.map