"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_reflex_reflex-routing_module_ts"],{

/***/ 147:
/*!*************************************************!*\
  !*** ./src/app/reflex/reflex-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexRoutingModule": () => (/* binding */ ReflexRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reflex_update_reflex_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflex-update/reflex-update.component */ 6417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: "", component: _reflex_update_reflex_update_component__WEBPACK_IMPORTED_MODULE_0__.ReflexUpdateComponent },
    { path: "update-reflex", component: _reflex_update_reflex_update_component__WEBPACK_IMPORTED_MODULE_0__.ReflexUpdateComponent }
];
class ReflexRoutingModule {
}
ReflexRoutingModule.ɵfac = function ReflexRoutingModule_Factory(t) { return new (t || ReflexRoutingModule)(); };
ReflexRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReflexRoutingModule });
ReflexRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReflexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6417:
/*!*****************************************************************!*\
  !*** ./src/app/reflex/reflex-update/reflex-update.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflexUpdateComponent": () => (/* binding */ ReflexUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/judgement.service */ 5654);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);







class ReflexUpdateComponent {
    constructor(_ToastrManager, judgementService, spinner) {
        this._ToastrManager = _ToastrManager;
        this.judgementService = judgementService;
        this.spinner = spinner;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.addReflexForm = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.allowedImageTypes = [];
        this.reflexResultImages = [];
        this.reflexPreviewImages1 = [];
        this.reflexPreviewImages2 = [];
        this.submitted = false;
        this.getReflexDetails = () => {
            this.spinner.show();
            this.judgementService.getReflexDetails().subscribe({
                next: (res) => {
                    if (res && Array.isArray(res.data) && res.data.length > 0) {
                        this.reflexDetails = res.data[0];
                        this.reflexId = this.reflexDetails._id;
                        const reflexscreen1 = this.reflexDetails.reflexscreen1;
                        if (reflexscreen1) {
                            const image1 = `${this.url}Other/${reflexscreen1}`;
                            this.reflexPreviewImages1.push(image1);
                        }
                        const reflexscreen2 = this.reflexDetails.reflexscreen2;
                        if (reflexscreen2) {
                            const image2 = `${this.url}Other/${reflexscreen2}`;
                            this.reflexPreviewImages2.push(image2);
                        }
                    }
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                    this.setData(this.reflexDetails);
                },
                error: (err) => { },
            });
        };
    }
    ngOnInit() {
        this.allowedImageTypes = this.judgementService.allowedImageTypes;
        this.getReflexDetails();
        this.formValidation();
    }
    openImageSelector1() {
        let element = document.getElementsByClassName('file-upload')[0];
        if (element) {
            element.click();
        }
        else {
            this._ToastrManager.errorToastr('Something went wrong!');
        }
    }
    openImageSelector() {
        let element = document.getElementsByClassName('file-upload')[0];
        if (element) {
            element.click();
        }
        else {
            this._ToastrManager.errorToastr('Something went wrong!');
        }
    }
    onFileChanged(event) {
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        if (this.allowedImageTypes.indexOf(file.type) !== -1) {
            this.reflexResultImage1 = file;
            if (event.target.files && file) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.reflexPreviewImages1.push(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            this._ToastrManager.errorToastr('Selected image is not allowed.');
        }
    }
    onFileChange2(event) {
        alert('1');
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        if (this.allowedImageTypes.indexOf(file.type) !== -1) {
            this.reflexResultImage2 = file;
            if (event.target.files && file) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.reflexPreviewImages2.push(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            this._ToastrManager.errorToastr('Selected image is not allowed.');
        }
    }
    removeImages1(index) {
        this.spinner.show();
        const parsedUrl = new URL(index);
        const filename = parsedUrl.pathname.split('/').pop();
        this.id = this.reflexId;
        this.judgementService
            .deleteReflexImage(this.id, filename, 'img1')
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
    formValidation() {
        this.addReflexForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            reflexscreen1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            reflexscreen2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
    }
    onSubmit() {
        this.spinner.show();
        const formData = new FormData();
        formData.append('_id', this.reflexId);
        if (this.reflexResultImage1) {
            formData.append('reflexscreen1', this.reflexResultImage1);
        }
        if (this.reflexResultImage2) {
            formData.append('reflexscreen2', this.reflexResultImage2);
        }
        let data = this.addReflexForm.value;
        data._id = this.reflexId;
        this.judgementService.updateReflex(formData).subscribe({
            next: (res) => {
                if (res.statusCode == 200) {
                    setTimeout(() => {
                        this._ToastrManager.successToastr('Judgement Weightage Score Updated Successfully');
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
ReflexUpdateComponent.ɵfac = function ReflexUpdateComponent_Factory(t) { return new (t || ReflexUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_1__.JudgementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService)); };
ReflexUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReflexUpdateComponent, selectors: [["app-reflex-update"]], decls: 45, vars: 2, consts: [[1, "content", "wh700"], [1, "container-fluid"], [1, "row"], [1, "col-10"], [1, "title_right"], ["type", "button", "value", "Back", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", "btn-pad-top-bot-4", 2, "margin-left", "124%", 3, "click"], [1, "col-12"], [1, "card", "border-0", "shadow"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "fs-20", "fw-bold"], [1, "row", "mt-4"], [1, "col-md-5", "mr-4"], [1, "form-group"], [1, "upload-img", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], [1, "action_btn"], ["type", "file", "accept", "image/*", "name", "reflexscreen1", "id", "reflexscreen1", "formControlName", "reflexscreen1", 1, "btn", "chngPic", "file-upload", 2, "display", "none", 3, "change"], [1, "col-md-6", "image_area"], ["alt", "", "height", "60px", "width", "80px", "id", "reflexPreviewImages1", 1, "preview-img", 3, "src"], ["height", "10px", "id", "re1", 1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "0px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], [1, "col-md-5"], ["type", "file", "accept", "image/*", "name", "reflexscreen2", "id", "reflexscreen2", "formControlName", "reflexscreen2", 1, "btn", "chngPic", "file-upload", 2, "display", "none", 3, "change"], ["alt", "", "height", "60px", "width", "80px", "id", "reflexPreviewImages2", 1, "preview-img", 3, "src"], ["height", "10px", "id", "re2", 1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "0px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], [1, "card-footer", "border-0", "bg-transparent"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "click"]], template: function ReflexUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reflex Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_input_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 6)(11, "div", 7)(12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("formGroup", function ReflexUpdateComponent_Template_form_formGroup_12_listener() { return ctx.addReflexForm; })("ngSubmit", function ReflexUpdateComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "div", 1)(15, "div", 2)(16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_div_click_22_listener() { return ctx.openImageSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Upload Reflex Screen1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ReflexUpdateComponent_Template_input_change_26_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 2)(28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "em", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_em_click_30_listener() { return ctx.removeImages1(ctx.reflexPreviewImages1[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21)(32, "div", 13)(33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_div_click_33_listener() { return ctx.openImageSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Upload Reflex Screen2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ReflexUpdateComponent_Template_input_change_37_listener($event) { return ctx.onFileChange2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 2)(39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "em", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_em_click_41_listener() { return ctx.removeImages2(ctx.reflexPreviewImages2[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 25)(43, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReflexUpdateComponent_Template_button_click_43_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reflexPreviewImages1[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reflexPreviewImages2[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZsZXgtdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_reflex_reflex-routing_module_ts.js.map