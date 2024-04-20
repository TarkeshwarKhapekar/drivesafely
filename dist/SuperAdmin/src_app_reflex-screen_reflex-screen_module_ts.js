"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_reflex-screen_reflex-screen_module_ts"],{

/***/ 8696:
/*!******************************************************************!*\
  !*** ./src/app/reflex-screen/reflex-add/reflex-add.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexAddComponent": () => (/* binding */ ReflexAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_service/judgement.service */ 5654);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function ReflexAddComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "reflex.UpdateReflexscreen"));
} }
function ReflexAddComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "reflex.AddReflexscreen"));
} }
function ReflexAddComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "reflex.UploadImages"), "");
} }
function ReflexAddComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "reflex.UploadImage"), "");
} }
function ReflexAddComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.myImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ReflexAddComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "reflex.UploadImages"), "");
} }
function ReflexAddComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "reflex.UploadImage"), "");
} }
function ReflexAddComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.myImage1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ReflexAddComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.selectedLang === "en" ? "Note:" : "\u6CE8\u8A18:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "note.Note"), " ");
} }
function ReflexAddComponent_button_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.addReflexForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "reflex.AddReflexscreen"), " ");
} }
function ReflexAddComponent_button_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "reflex.UpdateReflexscreen"), " ");
} }
class ReflexAddComponent {
    constructor(fb, judgementService, toastrManager, spinner, router, route) {
        this.fb = fb;
        this.judgementService = judgementService;
        this.toastrManager = toastrManager;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.submitted = false;
        this.selectedLang = localStorage.getItem('selectedLang');
        this.onChange = ($event) => {
            const target = $event.target;
            const file = target.files[0];
            const maxSizeInBytes = 10485760; // 10KB
            if (file.size <= maxSizeInBytes) {
                this.converToBase64(file);
            }
            else {
                const errorMessage = this.selectedLang == 'en'
                    ? 'Image size should be less than 10MB.'
                    : '画像サイズは10MB未満である必要があります。';
                this.toastrManager.errorToastr(errorMessage);
            }
        };
        this.onChange1 = ($event) => {
            const target = $event.target;
            const file1 = target.files[0];
            const maxSizeInBytes = 10485760; // 10KB
            if (file1.size <= maxSizeInBytes) {
                this.converToBase641(file1);
            }
            else {
                const errorMessage = this.selectedLang == 'en'
                    ? 'Image size should be less than 10MB.'
                    : '画像サイズは10MB未満である必要があります。';
                this.toastrManager.errorToastr(errorMessage);
            }
        };
        this.getReflexDetails = () => {
            if (this.reflexId) {
                this.spinner.show();
                this.judgementService.getReflexDetailsById(this.reflexId).subscribe({
                    next: (res) => {
                        this.reflexDetails = res.data;
                        this.myImage = this.reflexDetails.map((ele) => {
                            return ele.reflexscreen1;
                        });
                        this.myImage1 = this.reflexDetails.map((ele) => {
                            return ele.reflexscreen2;
                        });
                        setTimeout(() => {
                            this.spinner.hide();
                        }, 500);
                        this.setData(this.reflexDetails);
                    },
                    error: (err) => { },
                });
            }
        };
        this.route.paramMap.subscribe((params) => {
            this.reflexId = params.get('id');
        });
    }
    ngOnInit() {
        this.addReflexForm = this.fb.group({
            reflexscreen1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            reflexscreen2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        this.getReflexDetails();
    }
    onTypeChange(event) {
        const selectedType = event.target.value;
        this.typeChange.emit(selectedType);
    }
    openImageSelector1() {
        const element = document.querySelector('.file-upload1');
        if (element) {
            element.click();
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Something went wrong!'
                : '何か問題が発生しました!';
            this.toastrManager.errorToastr(errorMessage);
        }
    }
    openImageSelector2() {
        const element = document.querySelector('.file-upload2');
        if (element) {
            element.click();
        }
        else {
            const errorMessage = this.selectedLang === 'en'
                ? 'Something went wrong!'
                : '何か問題が発生しました!';
            this.toastrManager.errorToastr(errorMessage);
        }
    }
    converToBase64(file) {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((subscriber) => {
            this.readFile(file, subscriber);
        });
        observable.subscribe((d) => {
            this.myImage = d;
        });
    }
    converToBase641(file1) {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((subscriber) => {
            this.readFile1(file1, subscriber);
        });
        observable.subscribe((d1) => {
            this.myImage1 = d1;
        });
    }
    readFile(file, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = () => {
            subscriber.error();
            subscriber.complete();
        };
    }
    readFile1(file1, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file1);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = () => {
            subscriber.error();
            subscriber.complete();
        };
    }
    removeImages1(index) {
        this.spinner.show();
        this.id = this.reflexId;
        this.judgementService.deleteReflexImage(this.id, index, 'img1').subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        const successMessage = this.selectedLang === 'en'
                            ? 'Image deleted Successfully'
                            : '画像は正常に削除されました';
                        this.toastrManager.successToastr(successMessage);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
    }
    removeImages2(index) {
        this.spinner.show();
        this.id = this.reflexId;
        this.judgementService.deleteReflexImage(this.id, index, 'img2').subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        const successMessage = this.selectedLang === 'en'
                            ? 'Image deleted Successfully'
                            : '画像は正常に削除されました';
                        this.toastrManager.successToastr(successMessage);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
    }
    onSubmit() {
        if (!this.reflexId) {
            if (this.addReflexForm.valid) {
                const jsonData = {
                    reflexscreen1: this.myImage,
                    reflexscreen2: this.myImage1,
                };
                this.judgementService.addReflex(jsonData).subscribe({
                    next: (res) => {
                        if (res.statusCode == 200) {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Reflex Screen Added Successfully'
                                : 'リフレックススクリーンが正常に追加されました';
                            this.toastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/reflex-screen']);
                            this.spinner.hide();
                        }
                    },
                    error: (e) => { },
                });
            }
            else {
                const errorMessage = this.selectedLang === 'en'
                    ? 'Form data is not valid.'
                    : 'フォームデータが無効です。';
                this.toastrManager.errorToastr(errorMessage);
            }
        }
        else {
            this.spinner.show();
            const jsonData = {
                _id: this.reflexId,
                reflexscreen1: this.myImage,
                reflexscreen2: this.myImage1,
            };
            this.judgementService.updateReflex(jsonData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Reflex Screen Updated Successfully'
                                : '反射画面が正常に更新されました';
                            this.toastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/reflex-screen']);
                            this.spinner.hide();
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
    }
    setData(data) {
        this.addReflexForm.patchValue({
            reflexscreen1: data?.reflexscreen1,
            reflexscreen2: data?.reflexscreen2,
        });
    }
    goBack() {
        window.history.back();
    }
    onCancel() {
        this.submitted = false;
        this.addReflexForm.reset();
    }
}
ReflexAddComponent.ɵfac = function ReflexAddComponent_Factory(t) { return new (t || ReflexAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__.JudgementService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ReflexAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReflexAddComponent, selectors: [["app-reflex-add"]], decls: 46, vars: 21, consts: [[1, "content", "wh700"], [1, "container-fluid"], [1, "row"], [1, "col-10"], [4, "ngIf"], [1, "col-2", "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "col-12", "mt-3"], [1, "card", "border-0", "shadow"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-6"], [1, "form-group", "mb-3"], ["for", ""], [1, "upload-img1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], ["class", "action_btn", "style", "cursor: pointer", 4, "ngIf"], ["type", "file", "accept", "image/*", "name", "file1", "id", "file1", "formControlName", "reflexscreen1", 1, "btn", "chngPic", "file-upload1", 2, "display", "none", 3, "change"], ["class", "col-md-6 image_area", "let", "", "i", "index", 4, "ngIf"], [1, "upload-img2", 3, "click"], ["type", "file", "accept", "image/*", "name", "file2", "id", "file2", "formControlName", "reflexscreen2", 1, "btn", "chngPic", "file-upload2", 2, "display", "none", 3, "change"], [1, "pl-4", "mt-3"], ["style", "color: black; padding-left: 12px", 4, "ngIf"], [1, "card-footer", "border-0", "bg-transparent", 2, "margin-left", "1.3%"], ["class", "btn btn-primary graident btn-small custom-button", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "btn btn-primary graident btn-small custom-button", "type", "submit", 4, "ngIf"], [1, "action_btn", 2, "cursor", "pointer"], ["let", "", "i", "index", 1, "col-md-6", "image_area"], ["height", "60px", "width", "80px", 1, "preview-img", 3, "src"], [2, "color", "black", "padding-left", "12px"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button"]], template: function ReflexAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReflexAddComponent_h2_4_Template, 4, 3, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReflexAddComponent_h2_5_Template, 4, 3, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReflexAddComponent_Template_input_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 7)(12, "div", 8)(13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReflexAddComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "div", 1)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReflexAddComponent_Template_div_click_22_listener() { return ctx.openImageSelector1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ReflexAddComponent_span_24_Template, 3, 3, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ReflexAddComponent_span_25_Template, 3, 3, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReflexAddComponent_Template_input_change_26_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ReflexAddComponent_div_28_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12)(30, "div", 13)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReflexAddComponent_Template_div_click_34_listener() { return ctx.openImageSelector2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ReflexAddComponent_span_36_Template, 3, 3, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ReflexAddComponent_span_37_Template, 3, 3, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReflexAddComponent_Template_input_change_38_listener($event) { return ctx.onChange1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ReflexAddComponent_div_40_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ReflexAddComponent_p_42_Template, 5, 4, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ReflexAddComponent_button_44_Template, 3, 4, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ReflexAddComponent_button_45_Template, 3, 3, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, "reflex.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addReflexForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, "reflex.ReflexScreen1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 19, "reflex.ReflexScreen2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myImage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reflexId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reflexId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["button[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmxleC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InJlZmxleC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbixcbi5idXR0b25zLFxuLmJ0bixcbi5tb2RhbC1mb290ZXIgLmJ0bisuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXG4gIG1hcmdpbi1yaWdodDogMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 1939:
/*!**********************************************************************************!*\
  !*** ./src/app/reflex-screen/reflex-screen-list/reflex-screen-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexScreenListComponent": () => (/* binding */ ReflexScreenListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_service/judgement.service */ 5654);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







const _c0 = function (a1) { return ["/DS/reflex-screen/reflex-screen-edit", a1]; };
function ReflexScreenListComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 8)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13)(9, "div", 16)(10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r1.reflexscreen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r1.reflexscreen2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, element_r1._id));
} }
const _c1 = function () { return ["/DS/reflex-screen/reflex-screen-add"]; };
class ReflexScreenListComponent {
    constructor(judgementService, spinner) {
        this.judgementService = judgementService;
        this.spinner = spinner;
        this.getReflexScreenDetails = () => {
            this.spinner.show();
            this.judgementService.getReflexDetails().subscribe({
                next: (res) => {
                    this.reflexDetails = res.data;
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                },
                error: (err) => { },
            });
        };
    }
    ngOnInit() {
        this.getReflexScreenDetails();
    }
    goBack() {
        window.history.back();
    }
}
ReflexScreenListComponent.ɵfac = function ReflexScreenListComponent_Factory(t) { return new (t || ReflexScreenListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__.JudgementService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerService)); };
ReflexScreenListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReflexScreenListComponent, selectors: [["app-reflex-screen-list"]], decls: 39, vars: 21, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", "margin-right", "10px", 3, "routerLink"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [1, "container-fluid"], [1, "col-5", "col-md-4"], [1, "form-group", "mb-3"], [1, "col-2", "col-md-4"], ["class", "container-fluid", 4, "ngFor", "ngForOf"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"], [1, "care-path-right-icon", "mb-3"], ["title", "Edit", 3, "routerLink"], [1, "fa-solid", "fa-pencil"]], template: function ReflexScreenListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReflexScreenListComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "form")(18, "div", 10)(19, "div", 8)(20, "div", 11)(21, "div", 12)(22, "label")(23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "label")(29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13)(33, "div", 12)(34, "label")(35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ReflexScreenListComponent_div_38_Template, 12, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "reflex.ReflexScreen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "reflex.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 12, "reflex.AddReflexscreen"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 14, "reflex.ReflexScreen1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 16, "reflex.ReflexScreen2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 18, "reflex.Action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reflexDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(27, 86, 219);\n  width: 30px;\n  height: 30px;\n  color: white;\n\n  border-radius: 50%;\n}\n\n.care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(37, 96, 235);\n}\n\n@media screen and (max-width: 991px) {\n  .care-path-right-icon[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .pathway-template[_ngcontent-%COMP%] {\n    padding: 30px 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmxleC1zY3JlZW4tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTs7RUFFWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJyZWZsZXgtc2NyZWVuLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJlLXBhdGgtcmlnaHQtaWNvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDg2LCAyMTkpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZS1wYXRoLXJpZ2h0LWljb24gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgOTYsIDIzNSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jYXJlLXBhdGgtcmlnaHQtaWNvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAucGF0aHdheS10ZW1wbGF0ZSB7XG4gICAgcGFkZGluZzogMzBweCA1cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 737:
/*!***************************************************************!*\
  !*** ./src/app/reflex-screen/reflex-screen-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexScreenRoutingModule": () => (/* binding */ ReflexScreenRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reflex_add_reflex_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflex-add/reflex-add.component */ 8696);
/* harmony import */ var _reflex_screen_list_reflex_screen_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflex-screen-list/reflex-screen-list.component */ 1939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _reflex_screen_list_reflex_screen_list_component__WEBPACK_IMPORTED_MODULE_1__.ReflexScreenListComponent },
    { path: 'reflex-screen', component: _reflex_screen_list_reflex_screen_list_component__WEBPACK_IMPORTED_MODULE_1__.ReflexScreenListComponent },
    { path: 'reflex-screen-add', component: _reflex_add_reflex_add_component__WEBPACK_IMPORTED_MODULE_0__.ReflexAddComponent },
    { path: 'reflex-screen-edit/:id', component: _reflex_add_reflex_add_component__WEBPACK_IMPORTED_MODULE_0__.ReflexAddComponent },
];
class ReflexScreenRoutingModule {
}
ReflexScreenRoutingModule.ɵfac = function ReflexScreenRoutingModule_Factory(t) { return new (t || ReflexScreenRoutingModule)(); };
ReflexScreenRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReflexScreenRoutingModule });
ReflexScreenRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReflexScreenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6233:
/*!*******************************************************!*\
  !*** ./src/app/reflex-screen/reflex-screen.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexScreenModule": () => (/* binding */ ReflexScreenModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _reflex_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflex-screen-routing.module */ 737);
/* harmony import */ var _reflex_reflex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflex/reflex.component */ 1210);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reflex_add_reflex_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reflex-add/reflex-add.component */ 8696);
/* harmony import */ var _reflex_screen_list_reflex_screen_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reflex-screen-list/reflex-screen-list.component */ 1939);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class ReflexScreenModule {
}
ReflexScreenModule.ɵfac = function ReflexScreenModule_Factory(t) { return new (t || ReflexScreenModule)(); };
ReflexScreenModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ReflexScreenModule });
ReflexScreenModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _reflex_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReflexScreenRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReflexScreenModule, { declarations: [_reflex_reflex_component__WEBPACK_IMPORTED_MODULE_1__.ReflexComponent,
        _reflex_add_reflex_add_component__WEBPACK_IMPORTED_MODULE_2__.ReflexAddComponent,
        _reflex_screen_list_reflex_screen_list_component__WEBPACK_IMPORTED_MODULE_3__.ReflexScreenListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _reflex_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReflexScreenRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 1210:
/*!**********************************************************!*\
  !*** ./src/app/reflex-screen/reflex/reflex.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexComponent": () => (/* binding */ ReflexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/judgement.service */ 5654);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);












function ReflexComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_div_27_Template_em_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const element_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.removeImages1(element_r2.reflexscreen1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r2.reflexscreen1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ReflexComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_div_38_Template_em_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const element_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.removeImages2(element_r5.reflexscreen2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r5.reflexscreen2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["reflex-screen/add"]; };
class ReflexComponent {
    constructor(fb, judgementService, _ToastrManager, spinner, router) {
        this.fb = fb;
        this.judgementService = judgementService;
        this._ToastrManager = _ToastrManager;
        this.spinner = spinner;
        this.router = router;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.addReflexForm = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.submitted = false;
        this.allowedImageTypes = [];
        this.reflexResultImage1 = [];
        this.reflexResultImage2 = [];
        this.reflexPreviewImages1 = [];
        this.reflexPreviewImages2 = [];
        this.selectedLng = 'en';
        this.selectLng = 'en';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.onChange = ($event) => {
            const target = $event.target;
            const file = target.files[0];
            this.converToBase64(file);
        };
        this.onChange1 = ($event) => {
            const target = $event.target;
            const file1 = target.files[0];
            this.converToBase641(file1);
        };
        this.getReflexScreenDetails = () => {
            this.spinner.show();
            this.judgementService.getReflexDetails().subscribe({
                next: (res) => {
                    this.reflexDetails = res.data;
                    this.reflexId = this.reflexDetails._id;
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                    this.setData(this.reflexDetails);
                },
                error: (err) => { },
            });
        };
    }
    onTypeChange(event) {
        const selectedType = event.target.value;
        this.typeChange.emit(selectedType);
    }
    ngOnInit() {
        this.allowedImageTypes = this.judgementService.allowedImageTypes;
        this.getReflexScreenDetails();
        this.addReflexForm = this.fb.group({
            reflexscreen1: [''],
            reflexscreen2: [''],
        });
    }
    openImageSelector1() {
        let element = document.getElementsByClassName('file-upload1')[0];
        if (element) {
            element.click();
        }
        else {
            this._ToastrManager.errorToastr('Something went wrong!');
        }
    }
    openImageSelector2() {
        let element = document.getElementsByClassName('file-upload2')[0];
        if (element) {
            element.click();
        }
        else {
            this._ToastrManager.errorToastr('Something went wrong!');
        }
    }
    converToBase64(file) {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((subscriber) => {
            this.readFile(file, subscriber);
        });
        observable.subscribe((d) => {
            this.addReflexForm.controls['reflexscreen1'] = d;
            this.myImage = this.addReflexForm.controls['reflexscreen1'];
        });
    }
    converToBase641(file1) {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((subscriber) => {
            this.readFile1(file1, subscriber);
        });
        observable.subscribe((d1) => {
            this.addReflexForm.controls['reflexscreen2'] = d1;
            this.myImage1 = this.addReflexForm.controls['reflexscreen2'];
        });
    }
    readFile(file, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = () => {
            subscriber.error();
            subscriber.complete();
        };
    }
    readFile1(file1, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file1);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = () => {
            subscriber.error();
            subscriber.complete();
        };
    }
    removeImages1(index) {
        this.spinner.show();
        this.id = this.reflexId;
        this.judgementService.deleteReflexImage(this.id, index, 'img1').subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        this._ToastrManager.successToastr('Image deleted Successfully');
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
    }
    removeImages2(index) {
        this.spinner.show();
        const parsedUrl = new URL(index);
        const filename1 = parsedUrl.pathname.split('/').pop();
        this.id = this.reflexId;
        this.judgementService
            .deleteReflexImage(this.id, filename1, 'img2')
            .subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        this._ToastrManager.successToastr('Image deleted Successfully');
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
    }
    onSubmit() {
        this.spinner.show();
        const jsonData = {
            _id: this.reflexId,
            reflexscreen1: this.myImage,
            reflexscreen2: this.myImage1,
        };
        this.judgementService.updateReflex(jsonData).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        this._ToastrManager.successToastr('Judgement Weightage Score Updated Successfully');
                        this.router.navigate(['/DS/reflex-screen']);
                        this.spinner.hide();
                    }, 1000);
                }
            },
            error: (e) => { },
        });
    }
    setData(data) {
        this.addReflexForm.patchValue({
            reflexscreen1: data?.reflexscreen1,
            reflexscreen2: data?.reflexscreen2,
        });
    }
    goBack() {
        window.history.back();
    }
}
ReflexComponent.ɵfac = function ReflexComponent_Factory(t) { return new (t || ReflexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_1__.JudgementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ReflexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReflexComponent, selectors: [["app-reflex"]], decls: 42, vars: 5, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "click"], [1, "btn", "btn-primary", "graident", "btn-small", 3, "routerLink"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-6"], [1, "form-group", "mb-3"], ["for", ""], [1, "upload-img1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], [1, "action_btn"], ["type", "file", "accept", "image/*", "name", "file1", "id", "file1", "formControlName", "reflexscreen1", 1, "btn", "chngPic", "file-upload1", 2, "display", "none", 3, "change"], ["class", "col-md-6 image_area", "let", "", "i", "index", 4, "ngFor", "ngForOf"], [1, "upload-img2", 3, "click"], ["type", "file", "accept", "image/*", "name", "file2", "id", "file2", "formControlName", "reflexscreen2", 1, "btn", "chngPic", "file-upload2", 2, "display", "none", 3, "change"], ["class", "col-md-6 image_area", 4, "ngFor", "ngForOf"], [1, "card-footer", "border-0", "bg-transparent", 2, "margin-left", "-0.8%"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "click"], ["let", "", "i", "index", 1, "col-md-6", "image_area"], ["height", "60px", "width", "80px", 1, "preview-img", 3, "src"], ["height", "10px", 1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "0px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], [1, "col-md-6", "image_area"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"]], template: function ReflexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Reflex Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_Template_input_click_6_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Add Reflex");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ReflexComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Reflex Screen 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_Template_div_click_21_listener() { return ctx.openImageSelector1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Upload Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ReflexComponent_Template_input_change_25_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ReflexComponent_div_27_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Reflex Screen 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_Template_div_click_32_listener() { return ctx.openImageSelector2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Upload Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ReflexComponent_Template_input_change_36_listener($event) { return ctx.onChange1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ReflexComponent_div_38_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 24)(40, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexComponent_Template_button_click_40_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addReflexForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reflexDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reflexDetails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZsZXguY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_reflex-screen_reflex-screen_module_ts.js.map