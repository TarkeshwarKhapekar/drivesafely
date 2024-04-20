"use strict";
(self["webpackChunkOxvirtualCare"] = self["webpackChunkOxvirtualCare"] || []).push([["main"],{

/***/ 9224:
/*!**************************************!*\
  !*** ./src/app/_guard/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _service_user_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_service/user-auth.service */ 6140);




class AuthGuard {
    constructor(_router, _userAuthService) {
        this._router = _router;
        this._userAuthService = _userAuthService;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem("isLoggin") == "true") {
            if (this._userAuthService.IsLoggedIn()) {
                return true;
            }
            else {
                this._router.navigate(['/login']);
                return false;
            }
        }
        else {
            // alert("Logout 2");
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_user_auth_service__WEBPACK_IMPORTED_MODULE_0__.UserAuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3068:
/*!**********************************************************!*\
  !*** ./src/app/_layout/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_function_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_service/function.service */ 7719);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navItem_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_navItem/dashboard-header/dashboard-header.component */ 2717);
/* harmony import */ var _navItem_dashboard_footer_dashboard_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_navItem/dashboard-footer/dashboard-footer.component */ 1300);
/* harmony import */ var _navItem_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_navItem/dashboard-sidebar/dashboard-sidebar.component */ 2177);
/* harmony import */ var _navItem_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_navItem/sidebar-footer/sidebar-footer.component */ 1248);








class DashboardComponent {
    constructor(_FunctionService) {
        this._FunctionService = _FunctionService;
        this.hide = true;
    }
    ngOnInit() {
        this._FunctionService.loadScript('nprogress.js');
        this._FunctionService.loadScript('custom.min.js');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-bg');
        body.classList.add('nav-md');
        const value = localStorage.getItem('roles');
        this.roles = value;
        if (this.roles == 'SUBADMIN') {
            this.roles = 'Sub Admin';
        }
        else {
            this.roles = 'Super Admin';
        }
    }
    toggleClassEventHandler(event) {
        this.hide = !this.hide;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_function_service__WEBPACK_IMPORTED_MODULE_0__.FunctionService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 20, vars: 3, consts: [[1, "container", "body"], [1, "main_container"], [1, "col-md-3", "left_col", "menu_fixed"], [1, "left_col", "scroll-view"], [1, "navbar", "nav_title", 2, "border", "0"], ["href", "javascript:void(0);", 1, "site_title"], ["src", "assets/DS/img/logo-horizontal.png", "alt", "image", 2, "height", "47px", "width", "208px"], [1, "clearfix"], ["id", "sidebar-menu", 1, "main_menu_side", "hidden-print", "main_menu"], [3, "toggleClassEvent"], [1, "top_nav"], ["role", "main", 1, "right_col"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 7)(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "app-dashboard-sidebar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleClassEvent", function DashboardComponent_Template_app_dashboard_sidebar_toggleClassEvent_10_listener($event) { return ctx.toggleClassEventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-sidebar-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-dashboard-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-dashboard-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ngx-spinner", 12)(18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullScreen", true);
    } }, dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _navItem_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHeaderComponent, _navItem_dashboard_footer_dashboard_footer_component__WEBPACK_IMPORTED_MODULE_2__.DashboardFooterComponent, _navItem_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.DashboardSidebarComponent, _navItem_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_4__.SidebarFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1401:
/*!************************************************!*\
  !*** ./src/app/_layout/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_function_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_service/function.service */ 7719);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class FullComponent {
    constructor(_FunctionService) {
        this._FunctionService = _FunctionService;
    }
    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('nav-md');
        body.classList.add('login-bg');
    }
    ngOnDestroy() {
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_function_service__WEBPACK_IMPORTED_MODULE_0__.FunctionService)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], decls: 5, vars: 1, consts: [[1, "fxt-template-animation", "fxt-template-layout10", "loaded"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", 3, "fullScreen"], [2, "color", "white"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-spinner", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
    } }, dependencies: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1300:
/*!*************************************************************************!*\
  !*** ./src/app/_navItem/dashboard-footer/dashboard-footer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardFooterComponent": () => (/* binding */ DashboardFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class DashboardFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardFooterComponent.ɵfac = function DashboardFooterComponent_Factory(t) { return new (t || DashboardFooterComponent)(); };
DashboardFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardFooterComponent, selectors: [["app-dashboard-footer"]], decls: 6, vars: 3, consts: [[1, "pull-right"], [1, "text-center", "mb-0"], [1, "clearfix"]], template: function DashboardFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "dashboard.Copyright"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2717:
/*!*************************************************************************!*\
  !*** ./src/app/_navItem/dashboard-header/dashboard-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardHeaderComponent": () => (/* binding */ DashboardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




const _c0 = function () { return ["/DS/profile/profile-view"]; };
const _c1 = function () { return ["/DS/profile/change-password"]; };
class DashboardHeaderComponent {
    constructor(_router, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this.selectedLang = 'en';
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        this.initialLang = this.selectedLang ? this.selectedLang : 'en';
        const value = localStorage.getItem('roles');
        this.roles = value;
        if (this.roles == 'SUBADMIN') {
            this.roles = this.selectedLang === 'en' ? 'Sub Admin' : 'サブ管理者';
        }
        else {
            this.roles =
                this.selectedLang === 'en' ? 'Super Admin' : 'スーパー管理者';
        }
    }
    logOut() {
        this.spinner.show();
        const selectedLang = localStorage.getItem('selectedLang'); // Get the selectedLang before clearing localStorage
        localStorage.clear();
        if (selectedLang) {
            localStorage.setItem('selectedLang', selectedLang); // Restore the selectedLang after clearing localStorage
        }
        setTimeout(() => {
            this.spinner.hide();
            this._router.navigate(['login']);
        }, 1000);
    }
}
DashboardHeaderComponent.ɵfac = function DashboardHeaderComponent_Factory(t) { return new (t || DashboardHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerService)); };
DashboardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardHeaderComponent, selectors: [["app-dashboard-header"]], decls: 20, vars: 14, consts: [[1, "nav_menu"], [1, "nav", "navbar-nav"], [1, "navbar-right"], [1, "nav-item", "dropdown", "open", 2, "padding-left", "15px"], ["href", "javascript:void(0);", "aria-haspopup", "true", "id", "navbarDropdown", "data-toggle", "dropdown", "aria-expanded", "false", 1, "user-profile", "dropdown-toggle"], ["src", "assets/img/img.jpg", "alt", ""], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-usermenu", "pull-right"], [1, "dropdown-item", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["aria-hidden", "true", 1, "fa", "fa-key"], [1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"]], template: function DashboardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardHeaderComponent_Template_a_click_16_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.roles, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "profile.Profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "profile.ChangePassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "profile.LogOut"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2177:
/*!***************************************************************************!*\
  !*** ./src/app/_navItem/dashboard-sidebar/dashboard-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSidebarComponent": () => (/* binding */ DashboardSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata */ 7890);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_service/user-auth.service */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a0) { return [a0]; };
function DashboardSidebarComponent_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardSidebarComponent_li_5_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleClass()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, sidebarnavItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sidebarnavItem_r1.title[ctx_r2.selectedLang], " ");
} }
const _c1 = function () { return { exact: true }; };
function DashboardSidebarComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardSidebarComponent_li_5_a_1_Template, 3, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.role === ctx_r0.role);
} }
class DashboardSidebarComponent {
    constructor(router, route, _userAuthService) {
        this.router = router;
        this.route = route;
        this._userAuthService = _userAuthService;
        this.showMenu = '';
        this.showSubMenu = '';
        this.sidebarnavItems = [];
        this.role = localStorage.getItem('role');
        this.toggle = false;
        this.toggleClassEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.selectedLang = 'en';
    }
    ngOnInit() {
        this.selectedLang = localStorage.getItem('selectedLang');
        this.sidebarnavItems = _metadata__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter((sidebarnavItem) => sidebarnavItem);
    }
    toggleClass() {
        this.toggleClassEvent.emit();
    }
}
DashboardSidebarComponent.ɵfac = function DashboardSidebarComponent_Factory(t) { return new (t || DashboardSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_user_auth_service__WEBPACK_IMPORTED_MODULE_1__.UserAuthService)); };
DashboardSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardSidebarComponent, selectors: [["app-dashboard-sidebar"]], outputs: { toggleClassEvent: "toggleClassEvent" }, decls: 6, vars: 2, consts: [[1, "menu_section"], [1, "menu-icon", 3, "click"], [1, "fa", "fa-angle-right"], [1, "nav", "side-menu"], ["routerLinkActive", "is-active", 3, "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "is-active", 3, "routerLinkActiveOptions"], [3, "routerLink", "click", 4, "ngIf"], [3, "routerLink", "click"], [3, "ngClass"]], template: function DashboardSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardSidebarComponent_Template_div_click_1_listener() { return ctx.toggleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardSidebarComponent_li_5_Template, 2, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.showMenu, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7890:
/*!********************************************************!*\
  !*** ./src/app/_navItem/dashboard-sidebar/metadata.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const roles = localStorage.getItem('roles');
let role;
let menulist = [];
if (roles == 'SUBADMIN') {
    role = 'Sub Admin';
}
else {
    role = 'Super Admin';
}
menulist = [
    {
        path: '/DS',
        title: { en: 'Dashboard', ja: 'ダッシュボード' },
        titleja: 'Dashboard',
        icon: 'fa fa-home',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/driver',
        title: { en: 'Driver Management', ja: 'ドライバー管理' },
        icon: 'fa fa-user-tie',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/driver',
        title: { en: 'Driver Management', ja: 'ドライバー管理' },
        icon: 'fa fa-user-tie',
        class: '',
        submenu: [],
        role: 'SUBADMIN',
    },
    {
        path: '/DS/notice',
        title: { en: 'Notification Management', ja: '通知管理' },
        icon: 'fa fa-bell',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/content',
        title: { en: 'Content Management', ja: 'コンテンツ管理' },
        icon: 'fa fa-newspaper',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/corporate',
        title: { en: 'Corporate Master', ja: 'コーポレートマスター' },
        icon: 'fa fa-building',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/corporate/user',
        title: { en: 'Corporate User', ja: '法人ユーザー' },
        icon: 'fa fa-user-gear',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/qol',
        title: { en: 'Stress Management', ja: 'ストレスマネジメント' },
        icon: 'fa fa-podcast',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/judgement-weightage',
        title: { en: 'Judgement Weightage', ja: '判定の重み付け' },
        icon: 'fa fa-file-lines',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/finaljudgement',
        title: { en: 'Final Judgement Threshold', ja: '最終判定基準値' },
        icon: 'fa fa-file-lines',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/reflex-screen',
        title: { en: 'Reflex Screen', ja: 'リフレックススクリーン' },
        icon: 'fa fa-camera-retro',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
    {
        path: '/DS/policy-view',
        title: { en: 'Privacy-Policy', ja: 'プライバシーポリシー' },
        icon: 'fa fa-user-lock',
        class: '',
        submenu: [],
        role: 'ADMIN',
    },
];
const ROUTES = menulist;


/***/ }),

/***/ 1248:
/*!*********************************************************************!*\
  !*** ./src/app/_navItem/sidebar-footer/sidebar-footer.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarFooterComponent": () => (/* binding */ SidebarFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SidebarFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarFooterComponent.ɵfac = function SidebarFooterComponent_Factory(t) { return new (t || SidebarFooterComponent)(); };
SidebarFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarFooterComponent, selectors: [["app-sidebar-footer"]], decls: 1, vars: 0, consts: [[1, "sidebar-footer", "hidden-small"]], template: function SidebarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7719:
/*!**********************************************!*\
  !*** ./src/app/_service/function.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionService": () => (/* binding */ FunctionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FunctionService {
    constructor() { }
    loadScript(url) { }
    loadScript_external(url) { }
    loadstyleSheet(url) { }
}
FunctionService.ɵfac = function FunctionService_Factory(t) { return new (t || FunctionService)(); };
FunctionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FunctionService, factory: FunctionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6140:
/*!***********************************************!*\
  !*** ./src/app/_service/user-auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAuthService": () => (/* binding */ UserAuthService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class UserAuthService {
    constructor(_http) {
        this._http = _http;
        this._api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url;
        this.SharingRolesData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.defaultSearchList = [];
        this._drivingSafetyAccessToken = localStorage.getItem('_drivingSafetyAccessToken');
        console.log(this._drivingSafetyAccessToken, 'this._drivingSafetyAccessToken');
    }
    login(loginParams) {
        // const headers = new HttpHeaders({
        //   Authorization: `${this._drivingSafetyAccessToken}`,
        // });
        // const requestOptions = { headers: headers };
        // console.log(requestOptions, 'requestOptoions');
        return this._http
            .post(`${this._api_url}user/signinUser`, loginParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.error));
    }
    setDefaultSearchinDB(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            Authorization: `${this._drivingSafetyAccessToken}`,
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
    setSharingRolesData(data) {
        this.SharingRolesData.next(data);
    }
    setSearchList(newModule) {
        const existingModuleIndex = this.defaultSearchList.findIndex((module) => module.module === newModule.module);
        console.log(existingModuleIndex, 'existingModuleIndex');
        if (existingModuleIndex !== -1) {
            // Replace existing module's searchColumns
            this.defaultSearchList[existingModuleIndex].searchColumns =
                newModule.searchColumns;
        }
        else {
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
    setDefaultSearchList(data) {
        this.defaultSearchList = data;
    }
    IsLoggedIn() {
        return localStorage.getItem('_drivingSafetyAccessToken') != null;
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
}
UserAuthService.ɵfac = function UserAuthService_Factory(t) { return new (t || UserAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UserAuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserAuthService, factory: UserAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_guard/auth.guard */ 9224);
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_layout/dashboard/dashboard.component */ 3068);
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/full/full.component */ 1401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((login) => login.LoginModule),
    },
    {
        path: 'DS',
        component: _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then((d) => d.DashboardModule),
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then((d) => d.ProfileModule),
            },
            {
                path: 'driver',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_driver_driver_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./driver/driver.module */ 624)).then((d) => d.DriverModule),
            },
            {
                path: 'notice',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_notice_notice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notice/notice.module */ 9516)).then((d) => d.NoticeModule),
            },
            {
                path: 'content',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_content_content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./content/content.module */ 5390)).then((d) => d.ContentModule),
            },
            {
                path: 'qol',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_qol-configuration_qol-configuration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./qol-configuration/qol-configuration.module */ 6907)).then((d) => d.QolConfigurationModule),
            },
            {
                path: 'questionnaire',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_questionnaire_questionnaire_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./questionnaire/questionnaire.module */ 5449)).then((d) => d.QuestionnaireModule),
            },
            {
                path: 'corporate',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_corporate-master_corporate-master_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./corporate-master/corporate-master.module */ 6220)).then((d) => d.CorporateMasterModule),
            },
            {
                path: 'judgement-weightage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_judgement_judgement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./judgement/judgement.module */ 9760)).then((d) => d.JudgementModule),
            },
            {
                path: 'policy-view',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_policy_policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./policy/policy.module */ 4202)).then((d) => d.PolicyModule),
            },
            {
                path: 'finaljudgement',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-datatables_index_js-node_modules_ngx-pagination_fesm2020_ngx-pag-4de769"), __webpack_require__.e("default-node_modules_angular2-multiselect-dropdown___ivy_ngcc___fesm2015_angular2-multiselect-4bc4dc"), __webpack_require__.e("common"), __webpack_require__.e("src_app_finaljudgement_finaljudgement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./finaljudgement/finaljudgement.module */ 1906)).then((d) => d.FinaljudgementModule),
            },
            {
                path: 'update-reflex',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reflex_reflex-routing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reflex/reflex-routing.module */ 147)).then((d) => d.ReflexRoutingModule),
            },
            {
                path: 'reflex-screen',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reflex-screen_reflex-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reflex-screen/reflex-screen.module */ 6233)).then((d) => d.ReflexScreenModule),
            },
        ],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    { path: '**', redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-idle/core */ 1957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-idle/keepalive */ 6150);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);









class AppComponent {
    constructor(idle, keepalive, cd, spinner, _router, translate) {
        this.idle = idle;
        this.spinner = spinner;
        this._router = _router;
        this.translate = translate;
        this.title = 'OxvirtualCare';
        this.idleState = 'NOT_STARTED';
        this.countdown = 0;
        this.lastPing = new Date();
        this.savedLang = localStorage.getItem('selectedLang');
        this.initialLang = this.savedLang ? this.savedLang : 'en';
        idle.setIdle(5);
        idle.setTimeout(20);
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_INTERRUPTSOURCES);
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'IDLE';
        });
        idle.onIdleEnd.subscribe(() => {
            this.idleState = 'NOT_IDLE';
            this.countdown = 0;
            cd.detectChanges();
        });
        idle.onTimeout.subscribe(() => {
            this.idleState = 'TIMED_OUT';
            this.logOut();
        });
        idle.onTimeoutWarning.subscribe((seconds) => (this.countdown = seconds));
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => (this.lastPing = new Date()));
        translate.addLangs(['en', 'ja']);
        translate.use(this.initialLang);
    }
    reset() {
        this.idle.watch();
        this.idleState = 'NOT_IDLE';
        this.countdown = 0;
        this.lastPing = new Date();
    }
    ngOnInit() {
        this.reset();
        if (localStorage.getItem('selectedLang')) {
        }
        else {
            localStorage.setItem('selectedLang', this.initialLang);
        }
    }
    logOut() {
        if (localStorage.getItem('autoLogout') == 'true') {
            this.spinner.show();
            localStorage.clear();
            setTimeout(() => {
                this.spinner.hide();
                this._router.navigate(['login']);
            }, 1000);
        }
    }
    changeLang(st1) {
        this.translate.use(st1);
        const selectedLang = st1 === 'en' ? 'en' : 'ja';
        localStorage.setItem('selectedLang', selectedLang);
        console.log(selectedLang, 'selectedLangselectedLang');
    }
    showLng() {
        return this._router.url.includes('login');
    }
    getSelectedLang() {
        return this.initialLang;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_0__.Idle), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_2__.Keepalive), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 5, consts: [[1, "text-right", 2, "z-index", "10", "position", "absolute", "right", "0px", "top", "10px", 3, "hidden"], [3, "ngModel", "change"], ["langSelect", ""], ["value", "en"], ["value", "ja"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.changeLang(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Eng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Jap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showLng());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "HOME.SELECT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.initialLang);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng6-toastr-notifications */ 6196);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-idle/keepalive */ 6150);
/* harmony import */ var _service_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_service/function.service */ 7719);
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/full/full.component */ 1401);
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_layout/dashboard/dashboard.component */ 3068);
/* harmony import */ var _navItem_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_navItem/dashboard-header/dashboard-header.component */ 2717);
/* harmony import */ var _navItem_dashboard_footer_dashboard_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_navItem/dashboard-footer/dashboard-footer.component */ 1300);
/* harmony import */ var _navItem_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_navItem/dashboard-sidebar/dashboard-sidebar.component */ 2177);
/* harmony import */ var _navItem_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_navItem/sidebar-footer/sidebar-footer.component */ 1248);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);




// Import library module




















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.PathLocationStrategy },
        _service_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate-multiple' }),
        ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_17__.NgIdleKeepaliveModule.forRoot(),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient],
            },
        }),
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_3__.FullComponent,
        _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _navItem_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__.DashboardHeaderComponent,
        _navItem_dashboard_footer_dashboard_footer_component__WEBPACK_IMPORTED_MODULE_6__.DashboardFooterComponent,
        _navItem_dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.DashboardSidebarComponent,
        _navItem_sidebar_footer_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_8__.SidebarFooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule, ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_15__.ToastrModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_17__.NgIdleKeepaliveModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    buildFolder: '../../',
    api_url: 'http://54.201.160.69:9185/api/v1/',
    image_url: 'http://54.201.160.69:9185/images/',
    video_url: 'http://54.201.160.69:9185/videos/',
    // api_url: 'http://localhost:3000/api/v1/',
    // image_url: 'http://localhost:3000/images/',
    // video_url: 'http://localhost:3000/videos/',
    // api_url: "http://3.113.121.211:3000/api/v1/",
    // image_url: "http://3.113.121.211:3000/images/",
    // video_url: "http://3.113.121.211:3000/videos/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map