"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_notice_notice_module_ts"],{

/***/ 2186:
/*!********************************************!*\
  !*** ./src/app/_service/notice.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeService": () => (/* binding */ NoticeService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class NoticeService {
    constructor(_http) {
        this._http = _http;
        this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
    }
    noticeList(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}notification/get-all-notification?page=${data.page}&count=${data.count}&search=${data.filter}&scolumns=${data.scolumns}&sortBy=${data.sortColumn}&sortDirection=${data.sortDirection}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    noticeView(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .get(`${this._api_url}notification/get-notification/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    addNotice(noticeParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}notification/add-notification`, noticeParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    editNotice(editNoticeParams) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .post(`${this._api_url}notification/update-notification`, editNoticeParams, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteNotice(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers };
        return this._http
            .delete(`${this._api_url}notification/delete/${id}`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    deleteImage(id, image) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${this._drivingSafetyAccessToken}`,
        });
        const requestOptions = { headers: headers, body: { id: id, image: image } };
        return this._http
            .delete(`${this._api_url}image/delete`, requestOptions)
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
NoticeService.ɵfac = function NoticeService_Factory(t) { return new (t || NoticeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NoticeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NoticeService, factory: NoticeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7094:
/*!***********************************************************!*\
  !*** ./src/app/notice/notice-add/notice-add.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeAddComponent": () => (/* binding */ NoticeAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/notice.service */ 2186);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function NoticeAddComponent_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.EditNotification"));
} }
function NoticeAddComponent_b_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.AddNotification"));
} }
function NoticeAddComponent_span_37_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.Typeisrequired!"), " ");
} }
function NoticeAddComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NoticeAddComponent_span_37_label_1_Template, 3, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.addNoticeForm.get("type").hasError("required"));
} }
function NoticeAddComponent_span_53_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.Titleisrequired!"), " ");
} }
function NoticeAddComponent_span_53_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.Titleisrequired!"), " ");
} }
function NoticeAddComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NoticeAddComponent_span_53_label_1_Template, 3, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NoticeAddComponent_span_53_label_2_Template, 3, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedLng === "en" && ctx_r3.addNoticeForm.get("title").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedLng === "ja" && ctx_r3.addNoticeForm.get("titleJa").hasError("required"));
} }
function NoticeAddComponent_span_70_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.Descriptionisrequired!"), " ");
} }
function NoticeAddComponent_span_70_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "notice.Descriptionisrequired!"), " ");
} }
function NoticeAddComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NoticeAddComponent_span_70_label_1_Template, 3, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NoticeAddComponent_span_70_label_2_Template, 3, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.selectLng === "en" && ctx_r4.addNoticeForm.get("message").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.selectLng === "ja" && ctx_r4.addNoticeForm.get("messageJa").hasError("required"));
} }
function NoticeAddComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_div_85_Template_em_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const previewImage_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.removeImages(previewImage_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const previewImage_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", previewImage_r13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NoticeAddComponent_button_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "notice.Update"), " ");
} }
function NoticeAddComponent_button_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "notice.AddNotification"), " ");
} }
const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function (a0) { return { "form-submitted": a0 }; };
class NoticeAddComponent {
    constructor(fb, noticeService, _ToastrManager, spinner, router, route) {
        this.fb = fb;
        this.noticeService = noticeService;
        this._ToastrManager = _ToastrManager;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.addNoticeForm = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.submitted = false;
        this.allowedImageTypes = [];
        this.noticeImages = [];
        this.noticePreviewImages = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.selectedLang = 'ja';
        this.getNoticeDetails = () => {
            if (this.noticeId) {
                this.spinner.show();
                this.noticeService.noticeView(this.noticeId).subscribe({
                    next: (res) => {
                        this.noticeDetails = res.data[0];
                        this.noticeDetails.image.forEach((element) => {
                            const path = `${this.url}/${this.noticeDetails?.type}/${element}`;
                            this.noticePreviewImages.push(path);
                        });
                        setTimeout(() => {
                            this.spinner.hide();
                        }, 500);
                        this.setData(this.noticeDetails);
                    },
                    error: (err) => { },
                });
            }
        };
        this.route.paramMap.subscribe((params) => {
            this.noticeId = params.get('id');
        });
    }
    onTypeChange(event) {
        const selectedType = event.target.value;
        this.typeChange.emit(selectedType);
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        if (this.selectedLang === 'en') {
            this.selectedLng = 'en';
            this.selectLng = 'en';
        }
        else {
            this.selectedLng = 'ja';
            this.selectLng = 'ja';
        }
        this.allowedImageTypes = this.noticeService.allowedImageTypes;
        this.formValidation();
        this.getNoticeDetails();
    }
    formValidation() {
        this.addNoticeForm = this.fb.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            titleJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            messageJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            image: [''],
        });
        this.originalFormValue = this.addNoticeForm.value;
        this.addNoticeForm.valueChanges.subscribe(() => {
            this.submitted = false;
        });
    }
    openImageSelector() {
        let element = document.getElementsByClassName('file-upload')[0];
        if (element) {
            element.click();
        }
        else {
            const errorMessage = this.selectedLang == 'en'
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
        const maxSizeInBytes = 10485760; // 10KB
        if (this.allowedImageTypes.indexOf(file.type) !== -1) {
            if (file.size <= maxSizeInBytes) {
                this.noticeImages.push(file);
                if (event.target.files && file) {
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.noticePreviewImages.push(event.target.result);
                    };
                    reader.readAsDataURL(file);
                }
                else {
                    const errorMessage = this.selectedLang == 'en'
                        ? 'Selected image is not allowed.'
                        : '選択した画像は許可されていません。!';
                    this._ToastrManager.errorToastr(errorMessage);
                }
            }
            else {
                const errorMessage = this.selectedLang == 'en'
                    ? 'Image size should be less than 10MB.'
                    : '画像サイズは10MB未満である必要があります。';
                this._ToastrManager.errorToastr(errorMessage);
            }
        }
        else {
            const errorMessage = this.selectedLang == 'en'
                ? 'Selected image is not allowed.'
                : '選択した画像は許可されていません。!';
            this._ToastrManager.errorToastr(errorMessage);
        }
    }
    removeImages(index) {
        this.spinner.show();
        const filename = index.substring(index.lastIndexOf('/') + 1);
        this.id = this.noticeId;
        this.noticeService.deleteImage(this.id, filename).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        const successMessage = this.selectedLang == 'en'
                            ? 'Image deleted Successfully'
                            : '画像は正常に削除されました';
                        this._ToastrManager.successToastr(successMessage);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
        this.noticePreviewImages.splice(index, 1);
        this.noticeImages.splice(index, 1);
    }
    get f() {
        return this.addNoticeForm.controls;
    }
    onSubmit() {
        const formValues = this.addNoticeForm.value;
        const formData = new FormData();
        formData.append('type', formValues.type);
        formData.append('title', formValues.title);
        formData.append('titleJa', formValues.titleJa);
        formData.append('message', formValues.message);
        formData.append('messageJa', formValues.messageJa);
        for (var i = 0; i < this.noticeImages.length; i++) {
            formData.append('image', this.noticeImages[i]);
        }
        if (!this.noticeId) {
            this.noticeService.addNotice(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang == 'en'
                                ? 'Notification Added Successfully'
                                : '通知が正常に追加されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/notice']);
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
        else {
            formValues.id = this.noticeId;
            formData.append('id', formValues.id);
            this.noticeService.editNotice(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang == 'en'
                                ? 'Notification Updated Successfully'
                                : '通知が正常に更新されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/notice']);
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
    }
    setData(data) {
        this.addNoticeForm.patchValue({
            type: data?.type,
            title: data?.title.en,
            titleJa: data?.title.ja,
            message: data?.message.en,
            messageJa: data?.message.ja,
            image: data?.image,
        });
    }
    goBack() {
        window.history.back();
    }
    onCancel() {
        this.submitted = false;
        this.addNoticeForm.reset();
    }
    isSubmitDisabled() {
        return this.addNoticeForm.pristine || this.addNoticeForm.invalid;
    }
}
NoticeAddComponent.ɵfac = function NoticeAddComponent_Factory(t) { return new (t || NoticeAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_1__.NoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
NoticeAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoticeAddComponent, selectors: [["app-notice-add"]], decls: 98, vars: 80, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [4, "ngIf"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "fs-20", "fw-bold"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-12"], [1, "form-group", "mb-3"], [1, "label"], ["name", "type", "formControlName", "type", 1, "form-control", 3, "change"], ["selected", "selected", "value", ""], ["value", "Notice from SDNC"], ["value", "Transportation related information"], ["value", "Notice regarding the application"], [1, "language-toggle"], [3, "ngClass", "click"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder", "ngClass", "hidden"], ["type", "text", "formControlName", "titleJa", 1, "form-control", 3, "placeholder", "hidden"], ["type", "text", "formControlName", "message", 1, "form-control", 3, "placeholder", "ngClass", "hidden"], ["type", "text", "formControlName", "messageJa", 1, "form-control", 3, "placeholder", "hidden"], ["for", ""], [1, "upload-img", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], [1, "action_btn", 2, "cursor", "pointer"], ["type", "file", "accept", "image/*", "name", "file", "id", "file", "formControlName", "image", 1, "btn", "chngPic", "file-upload", 2, "display", "none", 3, "change"], ["class", "col-md-6 image_area", 4, "ngFor", "ngForOf"], [1, "pl-3", "mt-3"], [2, "color", "black"], [1, "card-footer", "footer-btn-block", "border-0", "bg-transparent", 2, "margin-left", "-0.5%"], ["class", "btn btn-primary graident btn-small custom-button", "type", "submit", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-small", "custom-button", "mt-2", "mt-sm-0", "ml-sm-2", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "col-md-6", "image_area"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"], ["height", "10px", 1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "0px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "disabled"]], template: function NoticeAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NoticeAddComponent_b_4_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NoticeAddComponent_b_5_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_input_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NoticeAddComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NoticeAddComponent_Template_select_change_24_listener($event) { return ctx.onTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NoticeAddComponent_span_37_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 13)(39, "div", 14)(40, "div", 15)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 22)(45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_span_click_45_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_span_click_47_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, NoticeAddComponent_span_53_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 11)(55, "div", 13)(56, "div", 14)(57, "div", 15)(58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22)(62, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_span_click_62_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_span_click_64_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, NoticeAddComponent_span_70_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 11)(72, "div", 13)(73, "div", 14)(74, "div", 15)(75, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_div_click_78_listener() { return ctx.openImageSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NoticeAddComponent_Template_input_change_83_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, NoticeAddComponent_div_85_Template, 3, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 34)(87, "p", 35)(88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, NoticeAddComponent_button_93_Template, 3, 4, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, NoticeAddComponent_button_94_Template, 3, 4, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeAddComponent_Template_button_click_95_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noticeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.noticeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 36, "notice.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addNoticeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 38, "notice.Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 40, "notice.SelectType"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 42, "notice.NoticefromSDNC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 44, "notice.transportationRelatedInformation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 46, "notice.noticeRegardingTheSDNCApplication"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.type.errors && (ctx.f.type.dirty || ctx.f.type.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 48, "notice.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](68, _c0, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](70, _c0, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 50, "notice.EnterTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](72, _c1, ctx.submitted))("hidden", ctx.selectedLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 52, "notice.EnterTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.title.errors && (ctx.f.title.dirty || ctx.f.title.touched) || ctx.f.titleJa.errors && (ctx.f.titleJa.dirty || ctx.f.titleJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 54, "notice.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](74, _c0, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](76, _c0, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 56, "notice.EnterDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](78, _c1, ctx.submitted))("hidden", ctx.selectLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 58, "notice.EnterDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.message.errors && (ctx.f.message.dirty || ctx.f.message.touched) || ctx.f.messageJa.errors && (ctx.f.messageJa.dirty || ctx.f.messageJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](77, 60, "notice.Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 62, "notice.UploadImages"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.noticePreviewImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLang === "en" ? "Note:" : "\u6CE8\u8A18:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](91, 64, "note.note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noticeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.noticeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 66, "notice.Cancel"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #0a0a0a;\n}\n.inactive[_ngcontent-%COMP%] {\n  background-color: white;\n  color: grey;\n}\n.custom-button[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 250px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  width: 70px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: #ccc;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 12px;\n}\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 12px 0;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.label[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n.image_area[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n.preview-img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7Ozs7RUFJRSxrQkFBa0I7O0VBRWxCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6Im5vdGljZS1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzBhMGEwYTtcbn1cbi5pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JleTtcbn1cbi5jdXN0b20tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG5idXR0b24sXG4uYnV0dG9ucyxcbi5idG4sXG4ubW9kYWwtZm9vdGVyIC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uaW1hZ2VfYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG5cbi5wcmV2aWV3LWltZyB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 3458:
/*!*******************************************************************!*\
  !*** ./src/app/notice/notice-listing/notice-listing.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeListingComponent": () => (/* binding */ NoticeListingComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_service/function.service */ 7719);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_service/notice.service */ 2186);
/* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_service/user-auth.service */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



















function NoticeListingComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr");
} }
const _c0 = function (a1) { return ["/DS/notice/notice-view", a1]; };
const _c1 = function (a1) { return ["/DS/notice/notice-edit", a1]; };
function NoticeListingComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 39)(11, "ul", 40)(12, "li")(13, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li")(16, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li")(19, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_tr_71_Template_a_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const element_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.noticeDelete(element_r13._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.getType(element_r13.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r13.title[ctx_r9.selectedLang]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r13.message[ctx_r9.selectedLang], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 6, element_r13.createdAt, "yyyy/MM/dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, element_r13._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c1, element_r13._id));
} }
function NoticeListingComponent_p_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "common.NoResultsFound"), " ");
} }
function NoticeListingComponent_div_74_div_5_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_div_74_div_5_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_div_74_div_5_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_div_74_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NoticeListingComponent_div_74_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NoticeListingComponent_div_74_div_5_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.count = $event); })("ngModelChange", function NoticeListingComponent_div_74_div_5_Template_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.getNoticeList(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NoticeListingComponent_div_74_div_5_option_5_Template, 2, 0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NoticeListingComponent_div_74_div_5_option_6_Template, 2, 0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NoticeListingComponent_div_74_div_5_option_7_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NoticeListingComponent_div_74_div_5_option_8_Template, 2, 0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, "notice.NumberofEntries"), " :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r16.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.totaldocs >= 40);
} }
function NoticeListingComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 48)(2, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function NoticeListingComponent_div_74_Template_pagination_controls_pageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.pageChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NoticeListingComponent_div_74_div_5_Template, 9, 8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "notice.Previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "notice.Next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.totaldocs > 10);
} }
const _c2 = function () { return ["/DS/notice/notice-add"]; };
const _c3 = function (a0, a1, a3) { return { itemsPerPage: a0, currentPage: a1, id: "second", totalItems: a3 }; };
class NoticeListingComponent {
    constructor(_FunctionService, spinner, _ToastrManager, route, noticeService, _userAuthService) {
        this._FunctionService = _FunctionService;
        this.spinner = spinner;
        this._ToastrManager = _ToastrManager;
        this.route = route;
        this.noticeService = noticeService;
        this._userAuthService = _userAuthService;
        this.noticeList = [];
        this.notice_id = '';
        this.totaldocs = 10;
        this.page = 1;
        this.count = 10;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        // Define a property to hold the current sorting parameters
        this.sortColumn = '';
        this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
        //datatable
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.selectedLang = 'en';
        this.getNoticeList = (page) => {
            let data = {
                page: page ? page : this.page,
                filter: this.filterTerm ? this.filterTerm : '',
                count: this.count,
                scolumns: '',
                sortColumn: this.sortColumn,
                sortDirection: this.sortDirection == 'asc' ? 1 : -1,
            };
            this._userAuthService.getSearchList('notice').forEach((element) => {
                data.scolumns =
                    data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
            });
            this.noticeService.noticeList(data).subscribe({
                next: (res) => {
                    this.noticeList = res.data.notifications;
                    this.totaldocs = res.data.total;
                    this.page = data.page;
                    this.totaldocs = res.data.total;
                    setTimeout(() => { }, 500);
                },
                error: (err) => { },
            });
        };
        this.isAscending = false;
        this.isAscending1 = false;
        this.isAscending2 = false;
        this.isAscending3 = false;
        this.route.paramMap.subscribe((params) => {
            this.notice_id = params.get('id');
        });
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        this.dtOptions = {};
        this._FunctionService.loadScript('clinic_page.js');
        this.getNoticeList(1);
        this.dropdownList = [
            { id: 'type', itemName: this.selectedLang == 'en' ? 'Type' : 'タイプ' },
            {
                id: this.selectedLang == 'en' ? 'title.en' : 'title.ja',
                itemName: this.selectedLang == 'en' ? 'Title' : 'タイトル',
            },
            {
                id: this.selectedLang == 'en' ? 'message.en' : 'message.ja',
                itemName: this.selectedLang == 'en' ? 'Description' : '説明',
            },
        ];
        this.selectedItems = this._userAuthService.getSearchList('notice');
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
        this.getNoticeList(page);
    }
    noticeDelete(noticeId) {
        const cancelButtonText = this.selectedLang == 'en' ? 'Cancel' : 'キャンセル';
        const confirmButtonText = this.selectedLang == 'en' ? 'Yes' : 'はい';
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                this.noticeService.deleteNotice(noticeId).subscribe({
                    next: (res) => {
                        if (res.statusCode === 200) {
                            this.deleteNotice = res.data;
                            setTimeout(() => {
                                const successMessage = this.selectedLang === 'en'
                                    ? 'Notification Removed Successfully.'
                                    : '通知が正常に削除されました。';
                                this._ToastrManager.successToastr(successMessage);
                                this.getNoticeList(this.page);
                                this.spinner.hide();
                            }, 500);
                        }
                    },
                    error: (err) => { },
                });
            }
        });
    }
    goBack() {
        window.history.back();
    }
    sort(column) {
        if (this.sortColumn === column) {
            this.sortDirection =
                this.sortDirection === _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc
                    ? _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.desc
                    : _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
        }
        else {
            this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
            this.sortColumn = column;
        }
        this.getNoticeList();
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
    onItemSelect(item) {
        this._userAuthService.setSearchList({
            module: 'notice',
            searchColumns: this.selectedItems,
        });
    }
    OnItemDeSelect(item) {
        this._userAuthService.setSearchList({
            module: 'notice',
            searchColumns: this.selectedItems,
        });
    }
    onSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'notice',
            searchColumns: this.selectedItems,
        });
    }
    onDeSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'notice',
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
    getType(type) {
        if (this.selectedLang === 'en') {
            if (type == 'Notice from SDNC')
                return type;
            if (type == 'Transportation related information')
                return type;
            if (type == 'Notice regarding the application')
                return type;
            if (type == 'SDNCからのお知らせ')
                return 'Notice from SDNC';
            if (type == '交通関連情報')
                return 'Transportation related information';
            if (type == '応募に関するお知らせ')
                return 'Notice regarding the application';
        }
        else {
            if (type == 'Notice from SDNC')
                return 'SDNCからのお知らせ';
            if (type == 'Transportation related information')
                return '交通関連情報';
            if (type == 'Notice regarding the application')
                return '応募に関するお知らせ';
            if (type == 'SDNCからのお知らせ')
                return type;
            if (type == '交通関連情報')
                return type;
            if (type == '応募に関するお知らせ')
                return type;
        }
    }
}
NoticeListingComponent.ɵfac = function NoticeListingComponent_Factory(t) { return new (t || NoticeListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_3__.NoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__.UserAuthService)); };
NoticeListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NoticeListingComponent, selectors: [["app-notice-listing"]], viewQuery: function NoticeListingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 75, vars: 57, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "container"], [1, "main-sorting-header"], [1, "sorting-block"], [1, "select-block"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "search-block"], [1, "input-group", "add-on", "mb-0"], ["type", "submit", 1, "btn", "btn-default", "srch-icon"], [1, "fa-solid", "fa-magnifying-glass"], ["name", "srch-term", "id", "srch-term", "type", "text", "autocomplete", "off", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], [1, "input-group-btn"], [1, "sorting-button"], [1, "btn-login", "btn", "btn-primary", "btn-block", "btn-pad-top-bot-4", 3, "routerLink"], [1, "fa-solid", "fa-circle-plus"], [1, "row"], [1, "col-12", "col-lg-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-sm", "table-striped", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "text-center", "sortable", 3, "click"], [1, "sort-cell-wrapper", "d-flex"], [1, "sort-cell", "d-inline-flex", "flex-column", "justify-content-center"], ["class", "up", 4, "ngIf"], ["class", "down", 4, "ngIf"], [1, "text-center", 2, "width", "160px"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "up"], ["src", "../../../assets/img/arrow_drop_up.svg", "alt", "arrow-up", 1, "img-fluid"], [1, "down"], ["src", "../../../assets/img/arrow_drop_down.svg", "alt", "arrow-down", 1, "img-fluid"], [2, "width", "400px"], [1, "text-center", 2, "width", "150px"], [1, "care-path-right-icon", "pt-0"], ["title", "View", 3, "routerLink"], [1, "fa-solid", "fa-eye"], ["title", "Edit", 3, "routerLink"], [1, "fa-solid", "fa-pencil"], ["title", "Delete", 3, "click"], [1, "fa-solid", "fa-trash-can"], [1, "text-center"], [1, "col-sm-6", "text-left"], ["id", "second", 3, "previousLabel", "nextLabel", "pageChange"], ["class", "col-sm-6 text-right", 4, "ngIf"], [1, "col-sm-6", "text-right"], ["for", "entries"], ["id", "entries", 3, "ngModel", "ngModelChange"], ["value", "10", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "30", 4, "ngIf"], ["value", "40", 4, "ngIf"], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"]], template: function NoticeListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "angular2-multiselect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NoticeListingComponent_Template_angular2_multiselect_ngModelChange_16_listener($event) { return ctx.selectedItems = $event; })("onSelect", function NoticeListingComponent_Template_angular2_multiselect_onSelect_16_listener($event) { return ctx.onItemSelect($event); })("onDeSelect", function NoticeListingComponent_Template_angular2_multiselect_onDeSelect_16_listener($event) { return ctx.OnItemDeSelect($event); })("onSelectAll", function NoticeListingComponent_Template_angular2_multiselect_onSelectAll_16_listener($event) { return ctx.onSelectAll($event); })("onDeSelectAll", function NoticeListingComponent_Template_angular2_multiselect_onDeSelectAll_16_listener($event) { return ctx.onDeSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NoticeListingComponent_Template_input_ngModelChange_21_listener($event) { return ctx.filterTerm = $event; })("keyup", function NoticeListingComponent_Template_input_keyup_21_listener() { return ctx.getNoticeList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18)(25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 6)(30, "div", 7)(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "table", 24)(35, "thead")(36, "tr")(37, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_Template_th_click_37_listener() { ctx.toggleSortDirection(); return ctx.sort("type"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, NoticeListingComponent_span_42_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, NoticeListingComponent_span_43_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_Template_th_click_44_listener() { ctx.toggleSortDirection1(); return ctx.sort("title.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, NoticeListingComponent_span_49_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, NoticeListingComponent_span_50_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_Template_th_click_51_listener() { ctx.toggleSortDirection2(); return ctx.sort("message.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, NoticeListingComponent_span_56_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, NoticeListingComponent_span_57_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NoticeListingComponent_Template_th_click_58_listener() { ctx.toggleSortDirection3(); return ctx.sort("createdAt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, NoticeListingComponent_span_63_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, NoticeListingComponent_span_64_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, NoticeListingComponent_tr_69_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](70, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, NoticeListingComponent_tr_71_Template, 21, 13, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](72, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, NoticeListingComponent_p_73_Template, 3, 3, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, NoticeListingComponent_div_74_Template, 6, 7, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 28, "notice.NotificationManagement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 30, "notice.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.dropdownList)("ngModel", ctx.selectedItems)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 32, "notice.Searchnotification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](52, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 34, "notice.AddNotification"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 36, "notice.Type"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 38, "notice.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 40, "notice.Description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 42, "notice.Date"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](67, 44, "notice.Action"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](70, 46, ctx.noticeList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](53, _c3, ctx.count, ctx.page, ctx.totaldocs)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](72, 49, ctx.noticeList, ctx.filterTerm));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totaldocs == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totaldocs > 10);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginationControlsComponent, angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.AngularMultiSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(27, 86, 219);\n  width: 30px;\n  height: 30px;\n  color: white;\n\n  border-radius: 50%;\n}\n\n.care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(37, 96, 235);\n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  min-height: 37px;\n\n  margin-right: 0px;\n}\n\n[_nghost-%COMP%]     .ngx-pagination {\n  margin-left: -47px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZOztFQUVaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTs7OztFQUlFLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub3RpY2UtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmUtcGF0aC1yaWdodC1pY29uIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgODYsIDIxOSk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jYXJlLXBhdGgtcmlnaHQtaWNvbiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCA5NiwgMjM1KTtcbn1cblxuYnV0dG9uLFxuLmJ1dHRvbnMsXG4uYnRuLFxuLm1vZGFsLWZvb3RlciAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgbWluLWhlaWdodDogMzdweDtcblxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNDdweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 4529:
/*!*************************************************!*\
  !*** ./src/app/notice/notice-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeRoutingModule": () => (/* binding */ NoticeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notice_listing_notice_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-listing/notice-listing.component */ 3458);
/* harmony import */ var _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-add/notice-add.component */ 7094);
/* harmony import */ var _notice_view_notice_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice-view/notice-view.component */ 4434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: "", component: _notice_listing_notice_listing_component__WEBPACK_IMPORTED_MODULE_0__.NoticeListingComponent },
    { path: 'notice-listing', component: _notice_listing_notice_listing_component__WEBPACK_IMPORTED_MODULE_0__.NoticeListingComponent },
    { path: 'notice-add', component: _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_1__.NoticeAddComponent },
    { path: 'notice-view/:id', component: _notice_view_notice_view_component__WEBPACK_IMPORTED_MODULE_2__.NoticeViewComponent },
    { path: 'notice-edit/:id', component: _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_1__.NoticeAddComponent }
];
class NoticeRoutingModule {
}
NoticeRoutingModule.ɵfac = function NoticeRoutingModule_Factory(t) { return new (t || NoticeRoutingModule)(); };
NoticeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NoticeRoutingModule });
NoticeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NoticeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4434:
/*!*************************************************************!*\
  !*** ./src/app/notice/notice-view/notice-view.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeViewComponent": () => (/* binding */ NoticeViewComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/notice.service */ 2186);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function NoticeViewComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const previewImage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", previewImage_r1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", previewImage_r1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { active: a0 }; };
class NoticeViewComponent {
    constructor(noticeService, spinner, route) {
        this.noticeService = noticeService;
        this.spinner = spinner;
        this.route = route;
        this.notice_id = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.noticePreviewImages = [];
        this.selectedLang = 'ja';
        this.sliderData = [];
        this.getNoticeView = () => {
            this.spinner.show();
            this.noticeService.noticeView(this.notice_id).subscribe({
                next: (res) => {
                    this.noticeDetails = res.data[0];
                    this.image = res.data[0].image;
                    let index = 0;
                    this.image.forEach((element) => {
                        const path = `${this.url}/${this.noticeDetails?.type}/${element}`;
                        this.noticePreviewImages.push(path);
                        this.sliderData.push({ index: index, src: path });
                        index = index + 1;
                    });
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                },
                error: (err) => { },
            });
        };
        this.route.paramMap.subscribe((params) => {
            this.notice_id = params.get('id');
        });
    }
    ngOnInit() {
        this.getNoticeView();
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
    getType(str) {
        let translatedString = str;
        if (this.selectedLang == 'ja') {
            if (str === 'Notice from SDNC')
                return 'SDNCからのお知らせ';
            if (str === 'Transportation related information')
                return '交通関連情報';
            if (str === 'Notice regarding the application')
                return 'アプリケーションに関するお知らせ';
            if (str === 'Weather')
                return '天気';
            if (str === 'Road Construction')
                return '道路工事';
            if (str === 'Other')
                return '他の';
        }
        else {
        }
        return translatedString;
    }
}
NoticeViewComponent.ɵfac = function NoticeViewComponent_Factory(t) { return new (t || NoticeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_notice_service__WEBPACK_IMPORTED_MODULE_1__.NoticeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
NoticeViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoticeViewComponent, selectors: [["app-notice-view"]], decls: 64, vars: 34, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "col-12", "col-md-6", "col-lg-12"], [1, "form-group", "mb-3"], [1, "label"], [1, "language-toggle"], [3, "ngClass", "click"], ["class", "col-md-6 image_area", 4, "ngFor", "ngForOf"], [1, "col-md-6", "image_area"], ["target", "_blank", 3, "href"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"]], template: function NoticeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeViewComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "form")(15, "div", 9)(16, "div", 7)(17, "div", 10)(18, "div", 11)(19, "label", 12)(20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 7)(26, "div", 10)(27, "div", 11)(28, "label", 12)(29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeViewComponent_Template_span_click_33_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeViewComponent_Template_span_click_35_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 9)(40, "div", 7)(41, "div", 10)(42, "div", 11)(43, "label", 12)(44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 13)(48, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeViewComponent_Template_span_click_48_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NoticeViewComponent_Template_span_click_50_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 9)(55, "div", 7)(56, "div", 10)(57, "div", 11)(58, "label", 12)(59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, NoticeViewComponent_div_63_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, "notice.Notificationdetail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 16, "notice.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 18, "notice.Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getType(ctx.noticeDetails == null ? null : ctx.noticeDetails.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 20, "notice.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c0, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectLng === "en" ? ctx.noticeDetails == null ? null : ctx.noticeDetails.title.en : ctx.noticeDetails == null ? null : ctx.noticeDetails.title.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 22, "notice.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c0, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c0, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedLng === "en" ? ctx.noticeDetails == null ? null : ctx.noticeDetails.message.en : ctx.noticeDetails == null ? null : ctx.noticeDetails.message.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 24, "notice.UploadedImages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.noticePreviewImages);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".language-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  width: 70px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: #ccc;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 12px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 12px 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px; \n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n\n.label[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\n\n.image_area[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n.preview-img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsMENBQTBDO0FBQ2hFOztBQUVBOzs7O0VBSUUsa0JBQWtCOztFQUVsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6Im5vdGljZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3Bhbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW46bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGRlZCBtYXJnaW4gYmV0d2VlbiBidXR0b24gYW5kIGxhYmVsICovXG59XG5cbmJ1dHRvbixcbi5idXR0b25zLFxuLmJ0bixcbi5tb2RhbC1mb290ZXIgLmJ0biArIC5idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG5cbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG4uaW1hZ2VfYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4ucHJldmlldy1pbWcge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9516:
/*!*****************************************!*\
  !*** ./src/app/notice/notice.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeModule": () => (/* binding */ NoticeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _notice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-routing.module */ 4529);
/* harmony import */ var _notice_listing_notice_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-listing/notice-listing.component */ 3458);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-add/notice-add.component */ 7094);
/* harmony import */ var _notice_view_notice_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-view/notice-view.component */ 4434);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);












class NoticeModule {
}
NoticeModule.ɵfac = function NoticeModule_Factory(t) { return new (t || NoticeModule)(); };
NoticeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NoticeModule });
NoticeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _notice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NoticeModule, { declarations: [_notice_listing_notice_listing_component__WEBPACK_IMPORTED_MODULE_1__.NoticeListingComponent,
        _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_3__.NoticeAddComponent,
        _notice_view_notice_view_component__WEBPACK_IMPORTED_MODULE_4__.NoticeViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _notice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_notice_notice_module_ts.js.map