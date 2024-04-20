"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["src_app_content_content_module_ts"],{

/***/ 253:
/*!**************************************************************!*\
  !*** ./src/app/content/content-add/content-add.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentAddComponent": () => (/* binding */ ContentAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var src_app_service_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/content.service */ 3478);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function ContentAddComponent_b_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.EditContent"));
} }
function ContentAddComponent_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.AddContent"));
} }
function ContentAddComponent_span_38_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.Typeisrequired!"), " ");
} }
function ContentAddComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentAddComponent_span_38_label_1_Template, 3, 3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.addContentForm.get("type").hasError("required"));
} }
function ContentAddComponent_span_54_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.Titleisrequired!"), " ");
} }
function ContentAddComponent_span_54_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.Titleisrequired!"), " ");
} }
function ContentAddComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentAddComponent_span_54_label_1_Template, 3, 3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_span_54_label_2_Template, 3, 3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedLng == "en" && ctx_r3.addContentForm.get("title").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedLng == "ja" && ctx_r3.addContentForm.get("titleJa").hasError("required"));
} }
function ContentAddComponent_div_55_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "content.InvalidURLformat"));
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
function ContentAddComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 8)(2, "div", 21)(3, "div", 13)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContentAddComponent_div_55_span_9_Template, 4, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "content.RedirctURL/Link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, "content.EnterURL/Link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx_r4.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.url.touched && ctx_r4.f.url.hasError("invalidUrl"));
} }
function ContentAddComponent_span_71_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.Descriptionisrequired!"), " ");
} }
function ContentAddComponent_span_71_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.Descriptionisrequired!"), " ");
} }
function ContentAddComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentAddComponent_span_71_label_1_Template, 3, 3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_span_71_label_2_Template, 3, 3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.selectLng == "en" && ctx_r5.addContentForm.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.selectLng == "ja" && ctx_r5.addContentForm.get("descriptionJa").hasError("required"));
} }
function ContentAddComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r6.contentPreviewImages[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.contentPreviewImages[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r8.contentPreviewImages[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.contentPreviewImages[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_110_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r29.contentPreviewImages.length - 5, " ");
} }
function ContentAddComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_div_110_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r10.contentPreviewImages[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.contentPreviewImages.length > 5);
} }
function ContentAddComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r11.contentPreviewVideos[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r12.contentPreviewVideos[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r13.contentPreviewVideos[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r14.contentPreviewVideos[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_115_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r30.contentPreviewVideos.length - 5, " ");
} }
function ContentAddComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_div_115_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r15.contentPreviewVideos[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.contentPreviewVideos.length > 5);
} }
function ContentAddComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_div_128_Template_em_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const previewImage_r31 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.removeImages(previewImage_r31)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const previewImage_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", previewImage_r31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73)(1, "video", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "source", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "em", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_div_130_Template_em_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const videoPreview_r35 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.removeVideo(videoPreview_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const videoPreview_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", videoPreview_r35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_div_143_Template_em_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const previewImage_r39 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.removeImages(previewImage_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const previewImage_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", previewImage_r39, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r43.contentPreviewImages[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r44.contentPreviewImages[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r45.contentPreviewImages[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r46.contentPreviewImages[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r53.contentPreviewImages.length - 5, " ");
} }
function ContentAddComponent_div_152_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_div_152_div_6_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r47.contentPreviewImages[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r47.contentPreviewImages.length > 5);
} }
function ContentAddComponent_div_152_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r48.contentPreviewVideos[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r49.contentPreviewVideos[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r50.contentPreviewVideos[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r51.contentPreviewVideos[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentAddComponent_div_152_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r54.contentPreviewVideos.length - 5, " ");
} }
function ContentAddComponent_div_152_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_div_152_div_11_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r52.contentPreviewVideos[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r52.contentPreviewVideos.length > 5);
} }
function ContentAddComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentAddComponent_div_152_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContentAddComponent_div_152_div_3_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ContentAddComponent_div_152_div_4_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContentAddComponent_div_152_div_5_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContentAddComponent_div_152_div_6_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContentAddComponent_div_152_div_7_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContentAddComponent_div_152_div_8_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContentAddComponent_div_152_div_9_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ContentAddComponent_div_152_div_10_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ContentAddComponent_div_152_div_11_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 48)(13, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewImages[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewImages[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewImages[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewImages[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewImages[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewVideos[0] && ctx_r19.contentPreviewImages.length < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewVideos[1] && ctx_r19.contentPreviewImages.length < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewVideos[2] && ctx_r19.contentPreviewImages.length < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewVideos[3] && ctx_r19.contentPreviewImages.length < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.contentPreviewVideos[4] && ctx_r19.contentPreviewImages.length < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r19.selectedLng !== "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.addContentForm.get("title").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r19.selectedLng !== "ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.addContentForm.get("titleJa").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r19.selectLng !== "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.addContentForm.get("description").value.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](19, 18, ctx_r19.addContentForm.get("description").value, 0, 60) + "..." : ctx_r19.addContentForm.get("description").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r19.selectLng !== "ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.addContentForm.get("descriptionJa").value.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](22, 22, ctx_r19.addContentForm.get("descriptionJa").value, 0, 60) + "..." : ctx_r19.addContentForm.get("descriptionJa").value, " ");
} }
function ContentAddComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73)(1, "video", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "source", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "em", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_div_165_Template_em_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const videoPreview_r55 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r57.removeVideo(videoPreview_r55)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const videoPreview_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", videoPreview_r55, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "content.Yourbrowserdoesnotsupportthevideotag."), " ");
} }
function ContentAddComponent_button_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r21.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "content.Update"), " ");
} }
function ContentAddComponent_button_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r22.isSubmitDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "content.AddContent"), " ");
} }
const _c1 = function (a0) { return { active: a0 }; };
class ContentAddComponent {
    constructor(fb, _ToastrManager, contentService, spinner, router, route) {
        this.fb = fb;
        this._ToastrManager = _ToastrManager;
        this.contentService = contentService;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.video_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.video_url;
        this.addContentForm = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.submitted = false;
        this.allowedImageTypes = [];
        this.contentImages = [];
        this.contentPreviewImages = [];
        this.allowedVideoTypes = [];
        this.contentVideos = [];
        this.contentPreviewVideos = [];
        this.selectImgVid = 'img';
        this.selectedLang = 'en';
        this.getContentDetails = () => {
            if (this.contentId) {
                this.spinner.show();
                this.contentService.contentView(this.contentId).subscribe({
                    next: (res) => {
                        this.contentDetails = res.data[0];
                        this.contentDetails.images.forEach((element) => {
                            const path = `${this.url}/${this.contentDetails?.type}/${element}`;
                            this.contentPreviewImages.push(path);
                        });
                        this.contentDetails.videos.forEach((element) => {
                            const vid = element._id;
                            const vpath = `${this.video_url}/${this.contentDetails?.type}/${element.videoURL}`;
                            this.contentPreviewVideos.push(vpath);
                        });
                        this.selectedType = this.contentDetails.type;
                        setTimeout(() => {
                            this.spinner.hide();
                        }, 500);
                        this.setData(this.contentDetails);
                    },
                    error: (err) => { },
                });
            }
        };
        this.route.paramMap.subscribe((params) => {
            this.contentId = params.get('id');
        });
    }
    onTypeChange(event) {
        this.selectedType = event.target.value;
        this.typeChange.emit(this.selectedType);
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
        this.allowedImageTypes = this.contentService.allowedImageTypes;
        this.allowedVideoTypes = this.contentService.allowedVideoTypes;
        this.formValidation();
        this.getContentDetails();
    }
    formValidation() {
        this.addContentForm = this.fb.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            titleJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            url: [
                '',
                (control) => {
                    if (control.dirty) {
                        if (control.value.trim() !== '') {
                            try {
                                const url = new URL(control.value);
                                if (url.protocol === 'http:' ||
                                    url.protocol === 'https:' ||
                                    url.protocol === 'ftp:') {
                                    return null;
                                }
                            }
                            catch (error) { }
                            return { invalidUrl: true };
                        }
                    }
                    return null; // No validation error by default
                },
            ],
            frequency: ['60'],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            descriptionJa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            images: [''],
            videos: [''],
        });
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
        if (this.isAdvertisementOrTrafficSafetySelected()) {
            this.clearVideoData();
        }
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        const maxSizeInBytes = 10485760;
        if (this.allowedImageTypes.indexOf(file.type) !== -1) {
            if (file.size <= maxSizeInBytes) {
                this.contentImages.push(file);
                if (event.target.files && file) {
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.contentPreviewImages.push(event.target.result);
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
        this.id = this.contentId;
        this.contentService.deleteContentImage(this.id, filename).subscribe({
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
        this.contentPreviewImages.splice(index, 1);
        this.contentImages.splice(index, 1);
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
        if (this.isAdvertisementOrTrafficSafetySelected()) {
            this.clearImageData();
        }
        if (event.target.value.length === 0) {
            return;
        }
        const file = event.target.files[0];
        if (this.allowedVideoTypes.indexOf(file.type) !== -1) {
            this.contentVideos.push(file);
            if (event.target.files && file) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.contentPreviewVideos.push(event.target.result);
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
        this.contentDetails.videos.forEach((element) => {
            if (element.videoURL == filename) {
                videoID = element._id;
            }
        });
        this.id = this.contentId;
        this.contentService
            .deleteContentVideo(this.id, filename, videoID)
            .subscribe({
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
        this.contentVideos.splice(index, 1);
        this.contentPreviewVideos.splice(index, 1);
    }
    isAdvertisementOrTrafficSafetySelected() {
        return (this.selectedType === 'Advertisement' ||
            this.selectedType === 'Traffic Safety Information');
    }
    clearImageData() {
        this.contentImages = [];
        this.contentPreviewImages = [];
    }
    clearVideoData() {
        this.contentVideos = [];
        this.contentPreviewVideos = [];
    }
    get f() {
        return this.addContentForm.controls;
    }
    onSubmit() {
        const formValues = this.addContentForm.value;
        const formData = new FormData();
        formData.append('type', formValues.type);
        formData.append('title', formValues.title);
        formData.append('titleJa', formValues.titleJa);
        formData.append('url', formValues.url);
        formData.append('frequency', formValues.frequency);
        formData.append('description', formValues.description);
        formData.append('descriptionJa', formValues.descriptionJa);
        for (var i = 0; i < this.contentImages.length; i++) {
            formData.append('images', this.contentImages[i]);
        }
        for (var i = 0; i < this.contentVideos.length; i++) {
            formData.append('videos', this.contentVideos[i]);
        }
        if (!this.contentId) {
            this.contentService.addContent(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Content Added Successfully'
                                : 'コンテンツが正常に追加されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/content']);
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
        else {
            this.spinner.show();
            formValues.id = this.contentId;
            formData.append('id', formValues.id);
            this.contentService.editContent(formData).subscribe({
                next: (res) => {
                    if (res.statusCode == 200) {
                        setTimeout(() => {
                            const successMessage = this.selectedLang === 'en'
                                ? 'Content Updated Successfully'
                                : 'コンテンツが正常に更新されました';
                            this._ToastrManager.successToastr(successMessage);
                            this.router.navigate(['/DS/content']);
                            this.spinner.hide();
                        }, 1000);
                    }
                },
                error: (e) => { },
            });
        }
    }
    setData(data) {
        this.addContentForm.patchValue({
            type: data?.type,
            title: data?.title.en,
            titleJa: data?.title.ja,
            url: data?.url,
            description: data?.description.en,
            descriptionJa: data?.description.ja,
            frequency: data?.frequency,
            images: data?.images,
            videos: data?.videos,
        });
    }
    goBack() {
        window.history.back();
    }
    onCancel() {
        this.submitted = false;
        this.addContentForm.reset();
    }
    isSubmitDisabled() {
        return this.addContentForm.pristine || this.addContentForm.invalid;
    }
}
ContentAddComponent.ɵfac = function ContentAddComponent_Factory(t) { return new (t || ContentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ContentAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentAddComponent, selectors: [["app-content-add"]], decls: 178, vars: 134, consts: [[1, "content"], [1, "page-title"], [1, "title_left"], [4, "ngIf"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "container-fluid"], [1, "col-12", "col-md-6", "col-lg-6"], [1, "form-group", "mb-3"], [1, "label"], ["name", "type", "formControlName", "type", 1, "form-control", 3, "change"], ["selected", "selected", "value", ""], ["value", "Advertisement"], ["value", "Traffic Safety Information"], ["value", "Articles & Blogs"], ["value", "Other"], [1, "col-12", "col-md-6", "col-lg-12"], [1, "language-toggle"], [3, "ngClass", "click"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder", "ngClass", "hidden"], ["type", "text", "placeholder", "\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "formControlName", "titleJa", 1, "form-control", 3, "hidden"], ["class", "container-fluid", 4, "ngIf"], ["type", "text", "formControlName", "description", 1, "form-control", 3, "placeholder", "ngClass", "hidden"], ["type", "text", "placeholder", "\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u8A73\u7D30\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "formControlName", "descriptionJa", 1, "form-control", 3, "hidden"], [1, "col-md-6", 3, "hidden"], [1, "form-group"], ["for", ""], [1, "upload-img", 3, "hidden", "click"], ["aria-hidden", "true", 1, "fa", "fa-camera", "action_btn"], [1, "action_btn", 2, "cursor", "pointer"], ["type", "file", "accept", "image/*", "name", "file", "id", "file", "formControlName", "images", 1, "btn", "chngPic", "file-upload", 2, "display", "none", 3, "change"], ["type", "file", "accept", "video/*", "name", "file", "id", "file", "formControlName", "videos", 1, "btn", "chngPic", "video-upload", 2, "display", "none", 3, "change"], ["id", "onlyimgorvdo", 1, "mobile-frame-wrapper", "position-relative"], ["src", "../../../assets/img/mobile-frame-media/mobile-frame.png", "alt", "", 1, "img-fluid", "w-100"], [1, "content-wrapper", "position-absolute", "d-flex", "flex-column"], [1, "status-bar", "position-absolute"], ["src", "../../../assets/img/mobile-frame-media/mobile-status-bar.svg", "alt", "", 1, "img-fluid"], [1, "mobile-head"], [1, "logo-cell"], ["src", "../../../assets/img/mobile-frame-media/logo.png", "alt", "Logo", 1, "img-fluid"], [1, "media-grid", "mt-auto"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-4", 4, "ngIf"], [1, "media-txt"], [3, "hidden"], [1, "row", 2, "margin-left", "-7px"], ["class", "col-md-6 image_area", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "upload-img", 3, "click"], ["id", "bothimgvdo", 1, "mobile-frame-wrapper", "position-relative"], ["class", "media-grid mt-auto", 4, "ngIf"], [1, "pl-3", "mt-3"], [2, "color", "black"], [1, "card-footer", "footer-btn-block", "border-0", "bg-transparent", 2, "margin-left", "-0.5%"], ["class", "btn btn-primary graident btn-small custom-button", "type", "submit", 3, "disabled", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-small", "custom-button", "mt-2", "mt-sm-0", "ml-sm-2", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "text", "formControlName", "url", 1, "form-control", 3, "placeholder", "ngClass"], [1, "col-sm-6"], ["alt", "gallery-pic", 3, "src"], [1, "col-sm-4"], ["class", "image-count position-absolute d-inline-flex align-items-center justify-content-center", 4, "ngIf"], [1, "image-count", "position-absolute", "d-inline-flex", "align-items-center", "justify-content-center"], [2, "height", "60px", "width", "60px", 3, "src"], [1, "col-md-6", "image_area"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"], ["height", "10px", 1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "0px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], [1, "col-md-12"], ["preload", "metadata", "height", "100px", "width", "100px", 1, "preview-video"], ["type", "video/mp4", 3, "src"], [1, "fa", "fa-times-circle", "remove_icon", 2, "font-size", "15px", "color", "rgb(255, 17, 0)", "margin-top", "18px", "position", "absolute", "margin-left", "-15px", "font-weight", "bold", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "graident", "btn-small", "custom-button", 3, "disabled"]], template: function ContentAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContentAddComponent_b_5_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContentAddComponent_b_6_Template, 3, 3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContentAddComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 8)(17, "div", 12)(18, "div", 13)(19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContentAddComponent_Template_select_change_22_listener($event) { return ctx.onTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ContentAddComponent_span_38_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 11)(40, "div", 8)(41, "div", 21)(42, "div", 13)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22)(47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_47_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_49_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ContentAddComponent_span_54_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ContentAddComponent_div_55_Template, 10, 10, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 11)(57, "div", 8)(58, "div", 21)(59, "div", 13)(60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 22)(64, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_64_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_66_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, ContentAddComponent_span_71_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 11)(73, "div", 8)(74, "div", 29)(75, "div", 30)(76, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 22)(80, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_80_listener() { return ctx.selectImgVid = "img"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Img");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_span_click_82_listener() { return ctx.selectImgVid = "vid"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Vid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_div_click_84_listener() { return ctx.openImageSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContentAddComponent_Template_input_change_89_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_div_click_90_listener() { return ctx.openVideoSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContentAddComponent_Template_input_change_95_listener($event) { return ctx.onVideoSelectorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 39)(99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "header", 42)(102, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 45)(105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, ContentAddComponent_div_106_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, ContentAddComponent_div_107_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, ContentAddComponent_div_108_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, ContentAddComponent_div_109_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, ContentAddComponent_div_110_Template, 3, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, ContentAddComponent_div_111_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, ContentAddComponent_div_112_Template, 2, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, ContentAddComponent_div_113_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, ContentAddComponent_div_114_Template, 2, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, ContentAddComponent_div_115_Template, 3, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 48)(117, "h6", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "h6", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](123, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](126, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, ContentAddComponent_div_128_Template, 3, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, ContentAddComponent_div_130_Template, 5, 1, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 29)(132, "div", 30)(133, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_div_click_136_listener() { return ctx.openImageSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContentAddComponent_Template_input_change_141_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](143, ContentAddComponent_div_143_Template, 3, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 39)(147, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "header", 42)(150, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](152, ContentAddComponent_div_152_Template, 23, 26, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 29)(154, "div", 30)(155, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_div_click_158_listener() { return ctx.openVideoSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContentAddComponent_Template_input_change_163_listener($event) { return ctx.onVideoSelectorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, ContentAddComponent_div_165_Template, 6, 4, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 56)(167, "p", 57)(168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](173, ContentAddComponent_button_173_Template, 3, 4, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](174, ContentAddComponent_button_174_Template, 3, 4, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentAddComponent_Template_button_click_175_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 70, "content.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addContentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 72, "content.Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 74, "content.SelectType"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 76, "content.Advertisement"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 78, "content.TrafficSafetyInformation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 80, "content.Articles&Blogs"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 82, "content.Other"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.type.errors && (ctx.f.type.dirty || ctx.f.type.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 84, "content.ContentTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](118, _c1, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](120, _c1, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 86, "content.EnterTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](122, _c0, ctx.submitted))("hidden", ctx.selectedLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.title.errors && (ctx.f.title.dirty || ctx.f.title.touched) || ctx.f.titleJa.errors && (ctx.f.titleJa.dirty || ctx.f.titleJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedType == "Advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 88, "content.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](124, _c1, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](126, _c1, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 90, "content.EnterDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](128, _c0, ctx.submitted))("hidden", ctx.selectLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.description.errors && (ctx.f.description.dirty || ctx.f.description.touched) || ctx.f.descriptionJa.errors && (ctx.f.descriptionJa.dirty || ctx.f.descriptionJa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedType === "Articles & Blogs" || ctx.selectedType === "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](78, 92, "content.Image/Video"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](130, _c1, ctx.selectImgVid === "img"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](132, _c1, ctx.selectImgVid === "vid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectImgVid !== "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 94, "content.UploadImages"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectImgVid !== "vid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](94, 96, "content.UploadVideos"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.addContentForm.get("title").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectedLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.addContentForm.get("titleJa").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectLng !== "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.addContentForm.get("description").value.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](123, 98, ctx.addContentForm.get("description").value, 0, 60) + "..." : ctx.addContentForm.get("description").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.selectLng !== "ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.addContentForm.get("descriptionJa").value.length > 60 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](126, 102, ctx.addContentForm.get("descriptionJa").value, 0, 60) + "..." : ctx.addContentForm.get("descriptionJa").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentPreviewImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentPreviewVideos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !(ctx.selectedType === "Articles & Blogs" || ctx.selectedType === "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](135, 106, "content.Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](140, 108, "content.UploadImages"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentPreviewImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages.length || ctx.contentPreviewVideos.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !(ctx.selectedType === "Articles & Blogs" || ctx.selectedType === "Other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](157, 110, "content.Videos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](162, 112, "content.UploadVideos"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentPreviewVideos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedLang === "en" ? "Note:" : "\u6CE8\u8A18:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](171, 114, "note.note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](177, 116, "content.Cancel"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".form-control[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #0a0a0a;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: white;\n  color: grey;\n}\n\n.custom-button[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 250px;\n}\n\n.language-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  width: 70px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: #ccc;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 12px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 12px 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  \n}\n\n.image_area[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n\n.preview-img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100px;\n}\n\n\n\n.mobile-frame-wrapper[_ngcontent-%COMP%] {\n  width: 214px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 12px;\n  right: 12px;\n  bottom: 10px;\n  padding: 10px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%] {\n  top: 14px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .mobile-head[_ngcontent-%COMP%] {\n  background-color: #4862ed;\n  border-radius: 24px 24px 0px 0px;\n  margin: 0 -10px;\n  padding: 34px 10px 12px;\n  width: auto;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 8px;\n  padding: 6px;\n  background-color: #fff;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .mobile-head[_ngcontent-%COMP%]   .logo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1px;\n  cursor: pointer;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .image-count[_ngcontent-%COMP%] {\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.65);\n  font-size: 16px;\n  color: #fff;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2e2e2e;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgb(129 129 129);\n}\n\n.label[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\n\n@media (max-width: 575px) {\n  .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div.col-sm-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div.col-sm-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7O0VBRWxCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCOztBQUMvQjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7QUFDRiIsImZpbGUiOiJjb250ZW50LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuYnV0dG9uLFxuLmJ1dHRvbnMsXG4uYnRuLFxuLm1vZGFsLWZvb3RlciAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcblxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMGEwYTBhO1xufVxuXG4uaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIC8qIEFkZGVkIG1hcmdpbiBiZXR3ZWVuIGJ1dHRvbiBhbmQgbGFiZWwgKi9cbn1cblxuLmltYWdlX2FyZWEge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4ucHJldmlldy1pbWcge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLyogbW9iaWxlLWZyYW1lLXdyYXBwZXIgc3R5bGUgKi9cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciB7XG4gIHdpZHRoOiAyMTRweDtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIge1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLnN0YXR1cy1iYXIge1xuICB0b3A6IDE0cHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tb2JpbGUtaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODYyZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAwcHggMHB4O1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIHBhZGRpbmc6IDM0cHggMTBweCAxMnB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tb2JpbGUtaGVhZCAubG9nby1jZWxsIGltZyB7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkID4gLnJvdyA+IGRpdiB7XG4gIHBhZGRpbmc6IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAubWVkaWEtZ3JpZCA+IC5yb3cgPiBkaXYgaW1nLFxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2IHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2IHZpZGVvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2IC5pbWFnZS1jb3VudCB7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLm1lZGlhLXR4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAubWVkaWEtdHh0IGg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJlMmUyZTtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5tZWRpYS10eHQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYigxMjkgMTI5IDEyOSk7XG59XG5cbi5sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2LmNvbC1zbS02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5cbiAgLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2LmNvbC1zbS00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6258:
/*!**********************************************************************!*\
  !*** ./src/app/content/content-listing/content-listing.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentListingComponent": () => (/* binding */ ContentListingComponent)
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
/* harmony import */ var src_app_service_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_service/content.service */ 3478);
/* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_service/user-auth.service */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


















function ContentListingComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr");
} }
const _c0 = function (a1) { return ["/DS/content/content-view", a1]; };
const _c1 = function (a1) { return ["/DS/content/content-edit", a1]; };
function ContentListingComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 40)(6, "ul", 41)(7, "li")(8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li")(11, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li")(14, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentListingComponent_tr_57_Template_a_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const element_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.contentDelete(element_r9._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r9.title[ctx_r5.selectedLang], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r9.description[ctx_r5.selectedLang], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, element_r9._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, element_r9._id));
} }
function ContentListingComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "common.NoResultsFound"), " ");
} }
function ContentListingComponent_div_60_div_5_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_div_60_div_5_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_div_60_div_5_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_div_60_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ContentListingComponent_div_60_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ContentListingComponent_div_60_div_5_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.count = $event); })("ngModelChange", function ContentListingComponent_div_60_div_5_Template_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.getContentList(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ContentListingComponent_div_60_div_5_option_5_Template, 2, 0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ContentListingComponent_div_60_div_5_option_6_Template, 2, 0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ContentListingComponent_div_60_div_5_option_7_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ContentListingComponent_div_60_div_5_option_8_Template, 2, 0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, "content.NumberofEntries"), " :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r12.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.totaldocs >= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.totaldocs >= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.totaldocs >= 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.totaldocs >= 40);
} }
function ContentListingComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 48)(2, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ContentListingComponent_div_60_Template_pagination_controls_pageChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.pageChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ContentListingComponent_div_60_div_5_Template, 9, 8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "content.Previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, "content.Next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.totaldocs > 10);
} }
const _c2 = function () { return ["/DS/content/content-add"]; };
const _c3 = function (a0, a1, a3) { return { itemsPerPage: a0, currentPage: a1, id: "second", totalItems: a3 }; };
class ContentListingComponent {
    constructor(_FunctionService, spinner, _ToastrManager, contentService, _userAuthService) {
        this._FunctionService = _FunctionService;
        this.spinner = spinner;
        this._ToastrManager = _ToastrManager;
        this.contentService = contentService;
        this._userAuthService = _userAuthService;
        this.contentList = [];
        this.totaldocs = 10;
        this.page = 1;
        this.count = 10;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.selectedLang = 'en';
        // Define a property to hold the current sorting parameters
        this.sortColumn = '';
        this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
        //datatable
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.getContentList = (page) => {
            let data = {
                page: page ? page : this.page,
                filter: this.filterTerm ? this.filterTerm : '',
                count: this.count,
                scolumns: '',
                sortColumn: this.sortColumn,
                sortDirection: this.sortDirection == 'asc' ? 1 : -1,
            };
            this._userAuthService.getSearchList('content').forEach((element) => {
                data.scolumns =
                    data.scolumns != '' ? data.scolumns + ',' + element.id : element.id;
            });
            this.contentService.contentList(data).subscribe({
                next: (res) => {
                    this.contentList = res.data.data;
                    this.totaldocs = res.data.total;
                    this.page = data.page;
                    setTimeout(() => { }, 500);
                },
                error: (err) => { },
            });
        };
        this.isAscending = false;
        this.isAscending1 = false;
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        this.dtOptions = {};
        this._FunctionService.loadScript('clinic_page.js');
        this.getContentList(1);
        this.dropdownList = [
            {
                id: this.selectedLang == 'en' ? 'title.en' : 'title.ja',
                itemName: this.selectedLang == 'en' ? 'Title' : 'タイトル',
            },
            {
                id: this.selectedLang == 'en' ? 'description.en' : 'description.ja',
                itemName: this.selectedLang == 'en' ? 'Description' : '説明',
            },
        ];
        this.selectedItems = this._userAuthService.getSearchList('content');
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
        this.getContentList(page);
    }
    contentDelete(contentId) {
        const cancelButtonText = this.selectedLang == 'en' ? 'Cancel' : 'キャンセル';
        const confirmButtonText = this.selectedLang == 'en' ? 'Yes' : 'はい';
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: this.selectedLang == 'en' ? 'Are you sure?' : '本気ですか？',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText, // Set the translated cancel button text here
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.contentService.deleteContent(contentId).subscribe({
                    next: (res) => {
                        if (res.statusCode === 200) {
                            this.deleteContent = res.data;
                            setTimeout(() => {
                                const successMessage = this.selectedLang === 'en'
                                    ? 'Content Removed Successfully.'
                                    : 'コンテンツが正常に削除されました。';
                                this._ToastrManager.successToastr(successMessage);
                                this.getContentList(this.page);
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
    // Function to handle sorting
    sort(column) {
        if (this.sortColumn === column) {
            // If same column, toggle sorting direction
            this.sortDirection =
                this.sortDirection === _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc
                    ? _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.desc
                    : _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
        }
        else {
            // If different column, reset sorting direction to ascending
            this.sortDirection = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.SortDirection.asc;
            this.sortColumn = column;
        }
        this.getContentList();
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
            module: 'content',
            searchColumns: this.selectedItems,
        });
    }
    OnItemDeSelect(item) {
        this._userAuthService.setSearchList({
            module: 'content',
            searchColumns: this.selectedItems,
        });
    }
    onSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'content',
            searchColumns: this.selectedItems,
        });
    }
    onDeSelectAll(items) {
        this._userAuthService.setSearchList({
            module: 'content',
            searchColumns: this.selectedItems,
        });
    }
    toggleSortDirection() {
        this.isAscending = !this.isAscending;
    }
    toggleSortDirection1() {
        this.isAscending1 = !this.isAscending1;
    }
}
ContentListingComponent.ɵfac = function ContentListingComponent_Factory(t) { return new (t || ContentListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__.ToastrManager), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_content_service__WEBPACK_IMPORTED_MODULE_3__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_4__.UserAuthService)); };
ContentListingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContentListingComponent, selectors: [["app-content-listing"]], viewQuery: function ContentListingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 61, vars: 47, consts: [[1, "wh700"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "container"], [1, "main-sorting-header"], [1, "sorting-block"], [1, "select-block"], [3, "data", "ngModel", "settings", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], [1, "search-block"], [1, "input-group", "add-on", "mb-0"], ["type", "submit", 1, "btn", "btn-default", "srch-icon"], [1, "fa-solid", "fa-magnifying-glass"], ["name", "srch-term", "id", "srch-term", "type", "text", "autocomplete", "off", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], [1, "input-group-btn"], [1, "sorting-button"], [1, "btn-login", "btn", "btn-primary", "btn-block", "btn-pad-top-bot-4", 3, "routerLink"], [1, "fa-solid", "fa-circle-plus"], [1, "row"], [1, "col-12", "col-lg-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-sm", "table-striped", "table-hover", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "text-center", "sortable", 3, "click"], [1, "sort-cell-wrapper", "d-flex"], [1, "sort-cell", "d-inline-flex", "flex-column", "justify-content-center"], ["class", "up", 4, "ngIf"], ["class", "down", 4, "ngIf"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "up"], ["src", "../../../assets/img/arrow_drop_up.svg", "alt", "arrow-up", 1, "img-fluid"], [1, "down"], ["src", "../../../assets/img/arrow_drop_down.svg", "alt", "arrow-down", 1, "img-fluid"], [1, "text-capitalize", 2, "width", "200px"], [1, "text-capitalize"], [1, "text-center", 2, "width", "130px"], [1, "care-path-right-icon", "pt-0"], ["title", "View", 3, "routerLink"], [1, "fa-solid", "fa-eye"], ["title", "Edit", 3, "routerLink"], [1, "fa-solid", "fa-pencil"], [3, "click"], ["title", "Delete", 1, "fa-solid", "fa-trash-can"], [1, "col-sm-6", "text-left"], ["id", "second", 3, "previousLabel", "nextLabel", "pageChange"], ["class", "col-sm-6 text-right", 4, "ngIf"], [1, "col-sm-6", "text-right"], ["for", "entries"], ["id", "entries", 3, "ngModel", "ngModelChange"], ["value", "10", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "30", 4, "ngIf"], ["value", "40", 4, "ngIf"], ["value", "10"], ["value", "20"], ["value", "30"], ["value", "40"]], template: function ContentListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentListingComponent_Template_input_click_8_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "angular2-multiselect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ContentListingComponent_Template_angular2_multiselect_ngModelChange_16_listener($event) { return ctx.selectedItems = $event; })("onSelect", function ContentListingComponent_Template_angular2_multiselect_onSelect_16_listener($event) { return ctx.onItemSelect($event); })("onDeSelect", function ContentListingComponent_Template_angular2_multiselect_onDeSelect_16_listener($event) { return ctx.OnItemDeSelect($event); })("onSelectAll", function ContentListingComponent_Template_angular2_multiselect_onSelectAll_16_listener($event) { return ctx.onSelectAll($event); })("onDeSelectAll", function ContentListingComponent_Template_angular2_multiselect_onDeSelectAll_16_listener($event) { return ctx.onDeSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ContentListingComponent_Template_input_ngModelChange_21_listener($event) { return ctx.filterTerm = $event; })("keyup", function ContentListingComponent_Template_input_keyup_21_listener() { return ctx.getContentList(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentListingComponent_Template_th_click_37_listener() { ctx.toggleSortDirection(); return ctx.sort("title.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ContentListingComponent_span_42_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ContentListingComponent_span_43_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContentListingComponent_Template_th_click_44_listener() { ctx.toggleSortDirection1(); return ctx.sort("description.en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, ContentListingComponent_span_49_Template, 2, 0, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ContentListingComponent_span_50_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, ContentListingComponent_tr_55_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ContentListingComponent_tr_57_Template, 16, 8, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ContentListingComponent_p_59_Template, 3, 3, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ContentListingComponent_div_60_Template, 6, 7, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 22, "content.ContentManagement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 24, "content.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.dropdownList)("ngModel", ctx.selectedItems)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 26, "content.SearchContent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.filterTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](42, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 28, "content.AddContent"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 30, "content.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 32, "content.Description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAscending1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](53, 34, "content.Action"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](56, 36, ctx.contentList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](43, _c3, ctx.count, ctx.page, ctx.totaldocs)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](58, 39, ctx.contentList, ctx.filterTerm));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totaldocs == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.totaldocs > 10);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginationControlsComponent, angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.AngularMultiSelect, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(27, 86, 219);\n  width: 30px;\n  height: 30px;\n  color: white;\n\n  border-radius: 50%;\n}\n\n.care-path-right-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(37, 96, 235);\n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  min-height: 37px;\n\n  margin-right: 0px;\n}\n\n[_nghost-%COMP%]     .ngx-pagination {\n  margin-left: -47px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTs7RUFFWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiY29udGVudC1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZS1wYXRoLXJpZ2h0LWljb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCA4NiwgMjE5KTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNhcmUtcGF0aC1yaWdodC1pY29uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDk2LCAyMzUpO1xufVxuXG5idXR0b24sXG4uYnV0dG9ucyxcbi5idG4sXG4ubW9kYWwtZm9vdGVyIC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtaW4taGVpZ2h0OiAzN3B4O1xuXG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IC00N3B4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7291:
/*!***************************************************!*\
  !*** ./src/app/content/content-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentRoutingModule": () => (/* binding */ ContentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-listing/content-listing.component */ 6258);
/* harmony import */ var _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-add/content-add.component */ 253);
/* harmony import */ var _content_view_content_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-view/content-view.component */ 6224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: "", component: _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_0__.ContentListingComponent },
    { path: 'content-listing', component: _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_0__.ContentListingComponent },
    { path: 'content-add', component: _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_1__.ContentAddComponent },
    { path: 'content-edit/:id', component: _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_1__.ContentAddComponent },
    { path: 'content-view/:id', component: _content_view_content_view_component__WEBPACK_IMPORTED_MODULE_2__.ContentViewComponent }
];
class ContentRoutingModule {
}
ContentRoutingModule.ɵfac = function ContentRoutingModule_Factory(t) { return new (t || ContentRoutingModule)(); };
ContentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContentRoutingModule });
ContentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 6224:
/*!****************************************************************!*\
  !*** ./src/app/content/content-view/content-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentViewComponent": () => (/* binding */ ContentViewComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/content.service */ 3478);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function ContentViewComponent_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "content.URL/Link"), " :");
} }
function ContentViewComponent_div_60_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const previewImage_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", previewImage_r14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", previewImage_r14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContentViewComponent_div_60_div_6_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "content.UploadedImages"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.contentPreviewImages);
} }
function ContentViewComponent_div_61_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "a", 18)(2, "video", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "source", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const videoPreview_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", videoPreview_r17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", videoPreview_r17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "content.Yourbrowserdoesnotsupportthevideotag.", " ");
} }
function ContentViewComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContentViewComponent_div_61_div_6_Template, 5, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "content.UploadedVideos"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.contentPreviewVideos);
} }
function ContentViewComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.contentPreviewImages[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.contentPreviewImages[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r5.contentPreviewImages[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r6.contentPreviewImages[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_78_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r19.contentPreviewImages.length - 5, " ");
} }
function ContentViewComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentViewComponent_div_78_div_2_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.contentPreviewImages[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.contentPreviewImages.length > 5);
} }
function ContentViewComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r8.contentPreviewVideos[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.contentPreviewVideos[1], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r10.contentPreviewVideos[2], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r11.contentPreviewVideos[3], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContentViewComponent_div_83_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r20.contentPreviewVideos.length - 5, " ");
} }
function ContentViewComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentViewComponent_div_83_div_2_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r12.contentPreviewVideos[4], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.contentPreviewVideos.length > 5);
} }
const _c0 = function (a0) { return { active: a0 }; };
class ContentViewComponent {
    constructor(contentService, spinner, route) {
        this.contentService = contentService;
        this.spinner = spinner;
        this.route = route;
        this.content_id = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.image_url;
        this.video_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.video_url;
        this.contentPreviewVideos = [];
        this.contentPreviewImages = [];
        this.currentSlide = 0;
        this.sliderData = [];
        this.selectedLang = 'en';
        this.getContentView = () => {
            this.spinner.show();
            this.contentService.contentView(this.content_id).subscribe({
                next: (res) => {
                    this.contentDetails = res.data[0];
                    this.image = res.data[0].images;
                    this.video = res.data[0].videos[0];
                    let index = 0;
                    this.contentDetails.images.forEach((element) => {
                        const path = `${this.url}/${this.contentDetails?.type}/${element}`;
                        this.contentPreviewImages.push(path);
                        this.sliderData.push({ index: index, src: path });
                        index = index + 1;
                    });
                    this.contentDetails.videos.forEach((element) => {
                        const videoPath = `${this.video_url}/${this.contentDetails?.type}/${element.videoURL}`;
                        this.contentPreviewVideos.push(videoPath);
                    });
                    setTimeout(() => {
                        this.spinner.hide();
                    }, 500);
                },
                error: (err) => { },
            });
        };
        this.route.paramMap.subscribe((params) => {
            this.content_id = params.get('id');
        });
    }
    ngOnInit() {
        this.getContentView();
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
    onSlideClick(index) {
        if (this.currentSlide !== index) {
            this.currentSlide = index;
        }
    }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.sliderData.length - 1 : previous;
    }
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.sliderData.length ? 0 : next;
    }
    getType(str) {
        let translatedString = str;
        if (this.selectedLang == 'ja') {
            if (str === 'Advertisement')
                return '広告';
            if (str === 'Traffic Safety Information')
                return '交通安全情報';
            if (str === 'Articles & Blogs')
                return '記事とブログ';
            if (str === 'Other')
                return '他の';
        }
        else {
        }
        return translatedString;
    }
}
ContentViewComponent.ɵfac = function ContentViewComponent_Factory(t) { return new (t || ContentViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
ContentViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentViewComponent, selectors: [["app-content-view"]], decls: 89, vars: 47, consts: [[1, "wh700"], [1, "content"], [1, "page-title"], [1, "title_left"], [1, "title_right"], ["type", "button", 1, "btn", "btn-primary", "graident", "btn-small", "btn-pad-top-bot-4", 2, "float", "right", 3, "value", "click"], [1, "clearfix"], [1, "pathway-template"], [1, "row"], [1, "col-12"], [1, "card-body"], [1, "container-fluid"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "form-group", "mb-3"], [1, "label"], [1, "language-toggle"], [3, "ngClass", "click"], ["class", "label", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "col-12", "col-md-6", "col-lg-12"], ["class", "col-12 col-md-6 col-lg-6", 4, "ngIf"], ["id", "onlyimgorvdo", 1, "mobile-frame-wrapper", "position-relative", 2, "margin-left", "-13px"], ["src", "../../../assets/img/mobile-frame-media/mobile-frame.png", "alt", "", 1, "img-fluid", "w-100"], [1, "content-wrapper", "position-absolute", "d-flex", "flex-column"], [1, "status-bar", "position-absolute"], ["src", "../../../assets/img/mobile-frame-media/mobile-status-bar.svg", "alt", "", 1, "img-fluid"], [1, "mobile-head"], [1, "logo-cell"], ["src", "../../../assets/img/mobile-frame-media/logo.png", "alt", "Logo", 1, "img-fluid"], [1, "media-grid", "mt-auto"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-4", 4, "ngIf"], [1, "media-txt"], [1, "col-12", "col-md-6", "col-lg-6"], ["class", "col-md-6 image_area", 4, "ngFor", "ngForOf"], [1, "col-md-6", "image_area"], ["alt", "", "height", "60px", "width", "80px", 1, "preview-img", 3, "src"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["preload", "metadata", "height", "100px", "width", "100px", 1, "preview-video"], ["type", "video/mp4", 3, "src"], [1, "col-sm-6"], ["alt", "gallery-pic", 3, "src"], [1, "col-sm-4"], ["class", "image-count position-absolute d-inline-flex align-items-center justify-content-center", 4, "ngIf"], [1, "image-count", "position-absolute", "d-inline-flex", "align-items-center", "justify-content-center"], [2, "height", "60px", "width", "60px", 3, "src"]], template: function ContentViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h2")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentViewComponent_Template_input_click_9_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 8)(19, "div", 12)(20, "div", 13)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15)(32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentViewComponent_Template_span_click_32_listener() { return ctx.selectLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentViewComponent_Template_span_click_34_listener() { return ctx.selectLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12)(39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ContentViewComponent_label_40_Template, 3, 3, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div")(42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 11)(45, "div", 8)(46, "div", 19)(47, "div", 13)(48, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 15)(52, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentViewComponent_Template_span_click_52_listener() { return ctx.selectedLng = "ja"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentViewComponent_Template_span_click_54_listener() { return ctx.selectedLng = "en"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 11)(59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ContentViewComponent_div_60_Template, 7, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ContentViewComponent_div_61_Template, 7, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 8)(63, "div", 9)(64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 23)(67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "header", 26)(70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 29)(73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, ContentViewComponent_div_74_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ContentViewComponent_div_75_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, ContentViewComponent_div_76_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, ContentViewComponent_div_77_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, ContentViewComponent_div_78_Template, 3, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, ContentViewComponent_div_79_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, ContentViewComponent_div_80_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ContentViewComponent_div_81_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, ContentViewComponent_div_82_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, ContentViewComponent_div_83_Template, 3, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 32)(85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 29, "content.ContentDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 31, "content.Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 33, "content.Type"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getType(ctx.contentDetails == null ? null : ctx.contentDetails.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 35, "content.Title"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c0, ctx.selectLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c0, ctx.selectLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectLng === "en" ? ctx.contentDetails == null ? null : ctx.contentDetails.title.en : ctx.contentDetails == null ? null : ctx.contentDetails.title.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentDetails == null ? null : ctx.contentDetails.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.contentDetails == null ? null : ctx.contentDetails.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contentDetails == null ? null : ctx.contentDetails.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 37, "content.Description"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, ctx.selectedLng === "ja"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](45, _c0, ctx.selectedLng === "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedLng === "en" ? ctx.contentDetails == null ? null : ctx.contentDetails.description.en : ctx.contentDetails == null ? null : ctx.contentDetails.description.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewImages[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[0] && ctx.contentPreviewImages.length < 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[1] && ctx.contentPreviewImages.length < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[2] && ctx.contentPreviewImages.length < 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[3] && ctx.contentPreviewImages.length < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentPreviewVideos[4] && ctx.contentPreviewImages.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectLng === "en" ? ctx.contentDetails == null ? null : ctx.contentDetails.title.en : ctx.contentDetails == null ? null : ctx.contentDetails.title.ja, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedLng === "en" ? ctx.contentDetails == null ? null : ctx.contentDetails.description.en : ctx.contentDetails == null ? null : ctx.contentDetails.description.ja, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".language-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: relative;\n  width: 70px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: #ccc;\n  overflow: hidden;\n  margin-bottom: -1rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  line-height: 24px;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 0 0 12px;\n}\n\n.language-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 12px 12px 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 10px; \n}\n\nbutton[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n\n  margin-right: 0px;\n}\n\n.image_area[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n.preview-img[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 100px;\n}\n\n\n\n.mobile-frame-wrapper[_ngcontent-%COMP%] {\n  width: 214px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 12px;\n  right: 12px;\n  bottom: 10px;\n  padding: 10px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%] {\n  top: 14px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .mobile-head[_ngcontent-%COMP%] {\n  background-color: #4862ed;\n  border-radius: 24px 24px 0px 0px;\n  margin: 0 -10px;\n  padding: 34px 10px 12px;\n  width: auto;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 8px;\n  padding: 6px;\n  background-color: #fff;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .mobile-head[_ngcontent-%COMP%]   .logo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1px;\n  cursor: pointer;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .image-count[_ngcontent-%COMP%] {\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.65);\n  font-size: 16px;\n  color: #fff;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2e2e2e;\n}\n\n.mobile-frame-wrapper[_ngcontent-%COMP%]   .media-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgb(129 129 129);\n}\n\n@media (max-width: 575px) {\n  .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div.col-sm-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .mobile-frame-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .media-grid[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div.col-sm-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\n.icon[_ngcontent-%COMP%] {\n  fill: var(--color-primary);\n  width: 100%;\n}\n\n.slider__controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: calc(100% + 1rem);\n  width: 100%;\n\n  .btn {\n    --size: 3rem;\n\n    align-items: center;\n    background-color: transparent;\n    border: 3px solid transparent;\n    border-radius: 100%;\n    display: flex;\n    height: var(--size);\n    padding: 0;\n    width: var(--size);\n\n    &:focus {\n      border-color: var(--color-focus);\n      outline: none;\n    }\n\n    &--previous > * {\n      transform: rotate(180deg);\n    }\n  }\n}\n\n.slider[_ngcontent-%COMP%] {\n  --slide-size: 70vmin;\n  --slide-margin: 4vmin;\n\n  height: var(--slide-size);\n  margin: 0 auto;\n  position: relative;\n  width: var(--slide-size);\n}\n\n.slider__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 calc(var(--slide-margin) * -1);\n  position: absolute;\n  transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);\n  padding: 0;\n}\n\n.slide[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: var(--slide-size);\n  justify-content: center;\n  margin: 0 var(--slide-margin);\n  opacity: 0.25;\n  position: relative;\n  text-align: center;\n  transition: opacity calc(var(--base-duration) / 2) var(--base-ease),\n    transform calc(var(--base-duration) / 2) var(--base-ease);\n  width: var(--slide-size);\n  z-index: 1;\n\n  &--previous,\n  &--next {\n    &:hover {\n      opacity: 0.5;\n    }\n  }\n\n  &--previous {\n    cursor: w-resize;\n\n    &:hover {\n      transform: translateX(2%);\n    }\n  }\n\n  &--next {\n    cursor: e-resize;\n\n    &:hover {\n      transform: translateX(-2%);\n    }\n  }\n}\n\n.slide--current[_ngcontent-%COMP%] {\n  opacity: 1;\n  &:hover .slide__image-wrapper {\n    transform: scale(1.025);\n  }\n}\n\n.slide__image-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n  border-radius: 1%;\n  height: 100%;\n  left: 0%;\n  overflow: hidden;\n  position: absolute;\n  top: 0%;\n  transition: transform calc(var(--base-duration) / 4) var(--base-ease);\n  width: 100%;\n}\n\n.slide__image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0%;\n  object-fit: cover;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLDBDQUEwQztBQUNoRTs7QUFFQTs7OztFQUlFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7O0VBRVg7SUFDRSxZQUFZOztJQUVaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7O0lBRWxCO01BQ0UsZ0NBQWdDO01BQ2hDLGFBQWE7SUFDZjs7SUFFQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCOztFQUVyQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQix5RUFBeUU7RUFDekUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCOzZEQUMyRDtFQUMzRCx3QkFBd0I7RUFDeEIsVUFBVTs7RUFFVjs7SUFFRTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCOztJQUVoQjtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCOztJQUVoQjtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Y7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxxRUFBcUU7RUFDckUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29udGVudC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2UtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG59XG5cbi5sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG4ubGFuZ3VhZ2UtdG9nZ2xlIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxhbmd1YWdlLXRvZ2dsZSBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XG59XG5cbi5sYW5ndWFnZS10b2dnbGUgc3BhbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIEFkZGVkIG1hcmdpbiBiZXR3ZWVuIGJ1dHRvbiBhbmQgbGFiZWwgKi9cbn1cblxuYnV0dG9uLFxuLmJ1dHRvbnMsXG4uYnRuLFxuLm1vZGFsLWZvb3RlciAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcblxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmltYWdlX2FyZWEge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnByZXZpZXctaW1nIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi8qIG1vYmlsZS1mcmFtZS13cmFwcGVyIHN0eWxlICovXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIge1xuICB3aWR0aDogMjE0cHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5zdGF0dXMtYmFyIHtcbiAgdG9wOiAxNHB4O1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAubW9iaWxlLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg2MmVkO1xuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMHB4IDBweDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICBwYWRkaW5nOiAzNHB4IDEwcHggMTJweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAubW9iaWxlLWhlYWQgLmxvZ28tY2VsbCBpbWcge1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkID4gLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLmNvbnRlbnQtd3JhcHBlciAubWVkaWEtZ3JpZCA+IC5yb3cgPiBkaXYge1xuICBwYWRkaW5nOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2IGltZyxcbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkID4gLnJvdyA+IGRpdiB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkID4gLnJvdyA+IGRpdiB2aWRlbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAuY29udGVudC13cmFwcGVyIC5tZWRpYS1ncmlkID4gLnJvdyA+IGRpdiAuaW1hZ2UtY291bnQge1xuICB0b3A6IDFweDtcbiAgbGVmdDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDFweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5tZWRpYS10eHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubW9iaWxlLWZyYW1lLXdyYXBwZXIgLm1lZGlhLXR4dCBoNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyZTJlMmU7XG59XG5cbi5tb2JpbGUtZnJhbWUtd3JhcHBlciAubWVkaWEtdHh0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2IoMTI5IDEyOSAxMjkpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2LmNvbC1zbS02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5cbiAgLm1vYmlsZS1mcmFtZS13cmFwcGVyIC5jb250ZW50LXdyYXBwZXIgLm1lZGlhLWdyaWQgPiAucm93ID4gZGl2LmNvbC1zbS00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pY29uIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyX19jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMXJlbSk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5idG4ge1xuICAgIC0tc2l6ZTogM3JlbTtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZm9jdXMpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmLS1wcmV2aW91cyA+ICoge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIC0tc2xpZGUtc2l6ZTogNzB2bWluO1xuICAtLXNsaWRlLW1hcmdpbjogNHZtaW47XG5cbiAgaGVpZ2h0OiB2YXIoLS1zbGlkZS1zaXplKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLXNsaWRlLXNpemUpO1xufVxuXG4uc2xpZGVyX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGNhbGModmFyKC0tc2xpZGUtbWFyZ2luKSAqIC0xKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tYmFzZS1kdXJhdGlvbikgY3ViaWMtYmV6aWVyKDAuMjUsIDEsIDAuMzUsIDEpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2xpZGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IHZhcigtLXNsaWRlLXNpemUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIHZhcigtLXNsaWRlLW1hcmdpbik7XG4gIG9wYWNpdHk6IDAuMjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGNhbGModmFyKC0tYmFzZS1kdXJhdGlvbikgLyAyKSB2YXIoLS1iYXNlLWVhc2UpLFxuICAgIHRyYW5zZm9ybSBjYWxjKHZhcigtLWJhc2UtZHVyYXRpb24pIC8gMikgdmFyKC0tYmFzZS1lYXNlKTtcbiAgd2lkdGg6IHZhcigtLXNsaWRlLXNpemUpO1xuICB6LWluZGV4OiAxO1xuXG4gICYtLXByZXZpb3VzLFxuICAmLS1uZXh0IHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAmLS1wcmV2aW91cyB7XG4gICAgY3Vyc29yOiB3LXJlc2l6ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIlKTtcbiAgICB9XG4gIH1cblxuICAmLS1uZXh0IHtcbiAgICBjdXJzb3I6IGUtcmVzaXplO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIlKTtcbiAgICB9XG4gIH1cbn1cblxuLnNsaWRlLS1jdXJyZW50IHtcbiAgb3BhY2l0eTogMTtcbiAgJjpob3ZlciAuc2xpZGVfX2ltYWdlLXdyYXBwZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICB9XG59XG5cbi5zbGlkZV9faW1hZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGJvcmRlci1yYWRpdXM6IDElO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWJhc2UtZHVyYXRpb24pIC8gNCkgdmFyKC0tYmFzZS1lYXNlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZV9faW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 5390:
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": () => (/* binding */ ContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-routing.module */ 7291);
/* harmony import */ var _content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-listing/content-listing.component */ 6258);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 1282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-add/content-add.component */ 253);
/* harmony import */ var _content_view_content_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-view/content-view.component */ 6224);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-multiselect-dropdown */ 1890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);












class ContentModule {
}
ContentModule.ɵfac = function ContentModule_Factory(t) { return new (t || ContentModule)(); };
ContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ContentModule });
ContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ContentModule, { declarations: [_content_listing_content_listing_component__WEBPACK_IMPORTED_MODULE_1__.ContentListingComponent,
        _content_add_content_add_component__WEBPACK_IMPORTED_MODULE_3__.ContentAddComponent,
        _content_view_content_view_component__WEBPACK_IMPORTED_MODULE_4__.ContentViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.AngularMultiSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_content_content_module_ts.js.map