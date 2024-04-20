"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_judgement_judgement_module_ts"],{

/***/ 1969:
/*!*******************************************************!*\
  !*** ./src/app/judgement/judgement-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgementRoutingModule": () => (/* binding */ JudgementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _judgment_weightage_judgment_weightage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judgment-weightage/judgment-weightage.component */ 7620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: "", component: _judgment_weightage_judgment_weightage_component__WEBPACK_IMPORTED_MODULE_0__.JudgmentWeightageComponent },
    { path: 'judgement-weightage', component: _judgment_weightage_judgment_weightage_component__WEBPACK_IMPORTED_MODULE_0__.JudgmentWeightageComponent },
];
class JudgementRoutingModule {
}
JudgementRoutingModule.ɵfac = function JudgementRoutingModule_Factory(t) { return new (t || JudgementRoutingModule)(); };
JudgementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JudgementRoutingModule });
JudgementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JudgementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9760:
/*!***********************************************!*\
  !*** ./src/app/judgement/judgement.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgementModule": () => (/* binding */ JudgementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judgement-routing.module */ 1969);
/* harmony import */ var _judgment_weightage_judgment_weightage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./judgment-weightage/judgment-weightage.component */ 7620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class JudgementModule {
}
JudgementModule.ɵfac = function JudgementModule_Factory(t) { return new (t || JudgementModule)(); };
JudgementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JudgementModule });
JudgementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__.JudgementRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JudgementModule, { declarations: [_judgment_weightage_judgment_weightage_component__WEBPACK_IMPORTED_MODULE_1__.JudgmentWeightageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__.JudgementRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ }),

/***/ 7620:
/*!******************************************************************************!*\
  !*** ./src/app/judgement/judgment-weightage/judgment-weightage.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgmentWeightageComponent": () => (/* binding */ JudgmentWeightageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_service/judgement.service */ 5654);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









class JudgmentWeightageComponent {
    constructor(fb, _ToastrManager, judmentService, spinner, router, translateService) {
        this.fb = fb;
        this._ToastrManager = _ToastrManager;
        this.judmentService = judmentService;
        this.spinner = spinner;
        this.router = router;
        this.translateService = translateService;
        this.addScoreForm = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup;
        this.selectedLang = localStorage.getItem('selectedLang');
        this.getQolDetails = () => {
            this.spinner.show();
            this.judmentService.judgementList().subscribe({
                next: (res) => {
                    this.scoreData = res.data[0];
                    this.weightageId = res.data[0]._id;
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                    this.setData(this.scoreData);
                },
                error: (err) => { },
            });
        };
    }
    ngOnInit() {
        this.getQolDetails();
        this.formValidation();
        // alert( this.translateService.instant('FinalJudgementThreshold.Level'));
    }
    formValidation() {
        this.addScoreForm = this.fb.group({
            sleepScore: [''],
            exerciseScore: [''],
            stressScore: [''],
            reflexScore: [''],
        });
    }
    get f() {
        return this.addScoreForm.controls;
    }
    onSubmit() {
        this.spinner.show();
        if (this.weightageId) {
            let data = this.addScoreForm.value;
            const totalScore = data.sleepScore +
                data.exerciseScore +
                data.stressScore +
                data.reflexScore;
            if (totalScore !== 100) {
                this.spinner.hide();
                const errorMessage = this.selectedLang === 'en'
                    ? 'Total score must be exactly 100'
                    : '合計スコアはちょうど 100 でなければなりません';
                this._ToastrManager.errorToastr(errorMessage);
                return;
            }
            data._id = this.weightageId;
            this.judmentService.updateScore(data).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Judgement Weightage Score Updated Successfully'
                                : '判定加重スコアが正常に更新されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/judgement-weightage']);
                            this.spinner.hide();
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
    }
    setData(data) {
        this.addScoreForm.patchValue({
            sleepScore: data?.sleepScore,
            exerciseScore: data?.exerciseScore,
            stressScore: data?.stressScore,
            reflexScore: data?.reflexScore,
        });
    }
    goBack() {
        window.history.back();
    }
}
JudgmentWeightageComponent.ɵfac = function JudgmentWeightageComponent_Factory(t) { return new (t || JudgmentWeightageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_judgement_service__WEBPACK_IMPORTED_MODULE_0__.JudgementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
JudgmentWeightageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JudgmentWeightageComponent, selectors: [["app-judgment-weightage"]], decls: 47, vars: 23, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-4"], [1, "col-12", "col-md-6", "col-lg-5"], [1, "form-group"], [1, "label"], ["type", "number", "placeholder", "Enter Sleep Score", "maxlength", "10", "formControlName", "sleepScore", 1, "form-control"], [1, "col-12", "col-md-6", "col-lg-2"], ["type", "number", "placeholder", "Enter Exercise Score", "formControlName", "exerciseScore", 1, "form-control"], ["type", "number", "placeholder", "Enter Stress Score", "maxlength", "10", "formControlName", "stressScore", 1, "form-control"], [1, "form-group", "mb-3"], ["type", "number", "placeholder", "Enter Reflex Score", "formControlName", "reflexScore", 1, "form-control"], [1, "card-footer", "border-0", "bg-transparent", 2, "margin-left", "-1.2rem"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "disabled"]], template: function JudgmentWeightageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JudgmentWeightageComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function JudgmentWeightageComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11)(24, "div", 12)(25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 11)(31, "div", 12)(32, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 11)(38, "div", 18)(39, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, "judgementWeightage.JudgementWeightage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "driver.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addScoreForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 13, "judgementWeightage.SleepScore"), " (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 15, "judgementWeightage.ExerciseScore"), " (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 17, "judgementWeightage.StressScore"), " (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 19, "judgementWeightage.ReflexScore"), " (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addScoreForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 21, "judgementWeightage.Save"), " ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["button[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\n    margin-bottom: 1px;\n    margin-right: 0px;\n}\n\n.label[_ngcontent-%COMP%]{\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1ZGdtZW50LXdlaWdodGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJqdWRnbWVudC13ZWlnaHRhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiwgLmJ1dHRvbnMsIC5idG4sIC5tb2RhbC1mb290ZXIgLmJ0bisuYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5sYWJlbHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_judgement_judgement_module_ts.js.map