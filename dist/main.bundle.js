webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div #app class=\"app-container\">\n\n  <div class=\"init-state\"></div>\n\n<!--  <app-header></app-header>-->\n\n  <div class=\"app-container__main\">\n    <router-outlet></router-outlet>\n  </div>\n\n<!--  <app-footer></app-footer>-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".init-state {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: #ffffff;\n  z-index: 9999;\n  opacity: 1;\n  transition: all 0.5s; }\n  .init-state--active {\n    opacity: 0;\n    z-index: -1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(app) {
        this.app = app;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // const initContainer = this.app.nativeElement.querySelector('.init-state');
        // TweenMax.to(initContainer, 1.2, {opacity: 0, onComplete: function() {
        //     initContainer.remove();
        //   }})
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.app.nativeElement.querySelector('.init-state').classList.add('init-state--active');
        }, 300);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_start_banner_start_banner_component__ = __webpack_require__("../../../../../src/app/components/start-banner/start-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_about_container_about_container_component__ = __webpack_require__("../../../../../src/app/components/about-container/about-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_title_component_title_component_component__ = __webpack_require__("../../../../../src/app/components/title-component/title-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blockqoute_title_blockqoute_title_component__ = __webpack_require__("../../../../../src/app/components/blockqoute-title/blockqoute-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_skills_container_skills_container_component__ = __webpack_require__("../../../../../src/app/components/skills-container/skills-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_main_link_main_link_component__ = __webpack_require__("../../../../../src/app/components/main-link/main-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_position_container_position_container_component__ = __webpack_require__("../../../../../src/app/components/position-container/position-container.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pages_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_start_banner_start_banner_component__["a" /* StartBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_about_container_about_container_component__["a" /* AboutContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_title_component_title_component_component__["a" /* TitleComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_blockqoute_title_blockqoute_title_component__["a" /* BlockqouteTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_skills_container_skills_container_component__["a" /* SkillsContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_main_link_main_link_component__["a" /* MainLinkComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_position_container_position_container_component__["a" /* PositionContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/pages/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_4__pages_index_index_component__["a" /* IndexComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_1__pages_blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_2__pages_contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/about-container/about-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <p class=\"about-container__description descriptionText\">Меня зовут Сергей Уханов.\n    Я <span>frontend</span>-разработчик с опытом работы более 4 лет.\n    Свою карьеру в разработке начал в 2015 году, пройдя путь от\n    верстки простых статичных веб-страниц до разработки сложных интерфейсов.\n    За время работы, удалось поработать над продуктом по управлению\n    торговыми представителями для ряда крупных компаний; в стартапе,\n    направленном на развитие навыков сотрудников;\n    а так же с множеством разномасштабных <span>e-commerce</span> проектов.\n  </p>\n  <div class=\"about-container__contact-me\">\n    <app-main-link></app-main-link>\n  </div>\n  <div class=\"about-container__line\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about-container/about-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n      align-items: flex-end; }\n\n.about-container__description {\n  width: 60%; }\n  .about-container__description span {\n    position: relative; }\n    .about-container__description span::after {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: -5px;\n      left: 0;\n      height: 18px;\n      width: 100%;\n      background: #edeafd;\n      z-index: -1; }\n\n.about-container__contact-me {\n  width: 40%;\n  margin-left: 50px; }\n\n.about-container__line {\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  top: 0;\n  left: 60%;\n  margin: -150px 0 0 50px; }\n  .about-container__line::before {\n    display: block;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    transform: translate(-50%, -50%) rotate(45deg);\n    background: #000;\n    left: 50%;\n    top: 50%;\n    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);\n    transition-delay: 0.4s;\n    opacity: 1; }\n\n@media (max-width: 768px) {\n  .about-container {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  .about-container__description {\n    width: 100%;\n    margin-bottom: 32px; }\n  .about-container__contact-me {\n    width: 100%;\n    margin-left: 0; }\n  .about-container__line {\n    width: 60%;\n    height: 2px;\n    top: -40px;\n    left: auto;\n    right: 20px;\n    margin: 0; }\n    .about-container__line::before {\n      transform: translate(-50%, -50%) rotate(0deg); } }\n\n@media (max-width: 768px) {\n  .about-container__description span::after {\n    height: 14px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-container/about-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutContainerComponent = (function () {
    function AboutContainerComponent() {
    }
    AboutContainerComponent.prototype.ngOnInit = function () {
    };
    return AboutContainerComponent;
}());
AboutContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about-container',
        template: __webpack_require__("../../../../../src/app/components/about-container/about-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about-container/about-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutContainerComponent);

//# sourceMappingURL=about-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blockqoute-title/blockqoute-title.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blockqoute-title works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/blockqoute-title/blockqoute-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blockqoute-title/blockqoute-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockqouteTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockqouteTitleComponent = (function () {
    function BlockqouteTitleComponent() {
    }
    BlockqouteTitleComponent.prototype.ngOnInit = function () {
    };
    return BlockqouteTitleComponent;
}());
BlockqouteTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-blockqoute-title',
        template: __webpack_require__("../../../../../src/app/components/blockqoute-title/blockqoute-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blockqoute-title/blockqoute-title.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlockqouteTitleComponent);

//# sourceMappingURL=blockqoute-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n  <div class=\"footer-container__icon-area icon-container\" style=\"background-image: url(/assets/img/footer_icon.svg)\"></div>\n  <div class=\"footer-container__social-links\">\n    <a href=\"mailto:sergeyukhanov.dev@gmail.com\" class=\"footer-container__email \">sergeyukhanov.dev@gmail.com</a>\n    <div class=\"footer-container__chats-area\">\n      <a href=\"https://t.me/SergeyUkhanov\" target=\"_blank\">Telegram</a> /\n      <a href=\"https://www.instagram.com/sergeyukhanov_/\" target=\"_blank\">Instagram</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-container__icon-area {\n  margin-bottom: 80px; }\n  .footer-container__icon-area::before {\n    background: #2a2a2c;\n    bottom: auto;\n    top: 100%;\n    margin-top: 20px;\n    content: '';\n    display: block;\n    height: 60px;\n    width: 2px;\n    position: absolute;\n    left: 50%; }\n\n.footer-container__email {\n  font: 500 36px/64px 'Work Sans', 'Helvetica', sans-serif;\n  color: #2a2a2c; }\n\n.footer-container__chats-area {\n  font: 300 16px/30px 'Work Sans', 'Helvetica', sans-serif;\n  color: #9b9ba4;\n  margin-bottom: 30px; }\n\n@media (max-width: 768px) {\n  .footer-container__email {\n    font-size: 18px; }\n  .footer-container__icon-area {\n    margin-bottom: 60px;\n    width: 40px;\n    height: 40px; }\n    .footer-container__icon-area::before {\n      height: 40px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div #menuEl class=\"header-container\" [class.displayed]=\"openedMenu\" [class.header-container--animation-start]=\"animationInitStart\">\n  <div class=\"header-container__logo\"></div>\n  <p class=\"header-container__capture smallLinkText greyColor\">\n    The design work of\n    <a href=\"mailto:sergeyukhanov.dev@gmail.com\" class=\"smallLinkText\">sergeyukhanov.dev@gmail.com</a>\n  </p>\n  <div class=\"header-container__main-nav main-nav\">\n    <div class=\"main-nav__outer\">\n      <div class=\"main-nav__inner\">\n        <div class=\"main-nav__menu-list\">\n          <p\n            *ngFor=\"let item of menuData; let i = index\"\n            (mouseenter)=\"hoverCurrentPicture(i)\"\n            (mouseleave)=\"leaveCurrentPicture(i)\"\n            class=\"main-nav__item p1 greyColor\"\n            routerLink=\"{{item.routerLink}}\"\n            routerLinkActive=\"active-link\"\n            (click)=\"toggleMenu()\"\n          >\n            {{item.title}}\n          </p>\n        </div>\n\n        <div class=\"main-nav__menu-photo\">\n          <div *ngFor=\"let picture of picturesData\" class=\"main-nav__picture-area\" [class.active]=\"currentLocation() === picture.active\" [ngStyle]=\"{'background-image': 'url(/assets/img/' + picture.image + ')'}\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"header-container__social-links soccial-links\">\n      <a href=\"mailto:sergeyukhanov.dev@gmail.com\" class=\"social-links__email \">sergeyukhanov.dev@gmail.com</a>\n      <div class=\"social-links__chats-area\">\n        <a href=\"https://t.me/SergeyUkhanov\" target=\"_blank\">Telegram</a> /\n        <a href=\"https://www.instagram.com/sergeyukhanov_/\" target=\"_blank\">Instagram</a>\n      </div>\n    </div>\n\n    <div (click)=\"toggleMenu()\" class=\"header-container__nav-button\" [class.actionButton]=\"openedMenu\">\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  height: 100%;\n  width: calc(100% - 110px);\n  transform: translateX(calc(-100% + 80px));\n  transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms; }\n\n.header-container__main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  border-right: 1px solid #efefef;\n  background-color: #ffffff; }\n\n.main-nav__outer,\n.main-nav__inner {\n  overflow: hidden;\n  transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms; }\n\n.main-nav__outer {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  transform: translateX(0%); }\n\n.main-nav__inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n  transform: translateX(100%);\n  padding: 100px 80px 100px 100px;\n  width: 100%; }\n\n.header-container__nav-button {\n  height: 58px;\n  width: 58px;\n  border-radius: 100%;\n  background: #2a2a2c;\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(50%, -50%);\n  z-index: 5;\n  cursor: pointer; }\n  .header-container__nav-button span {\n    display: block;\n    height: 2px;\n    width: 0;\n    background: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -1px 0 0 -13px;\n    margin-left: 0;\n    transition: all 0.5s; }\n    .header-container__nav-button span:nth-child(1) {\n      transform: translateY(-5px); }\n    .header-container__nav-button span:nth-child(2) {\n      transform: translateY(5px); }\n  .header-container__nav-button:hover span:nth-child(1) {\n    transform: translateY(-7px); }\n  .header-container__nav-button:hover span:nth-child(2) {\n    transform: translateY(7px); }\n  .header-container__nav-button.actionButton span:nth-child(1) {\n    transform: rotate(45deg); }\n  .header-container__nav-button.actionButton span:nth-child(2) {\n    transform: rotate(-45deg); }\n\n.header-container__capture {\n  position: absolute;\n  bottom: 0;\n  right: 40px;\n  white-space: nowrap;\n  transform: rotate(90deg);\n  transform-origin: 100% 50%;\n  z-index: 3; }\n\n.main-nav__menu-list {\n  width: 40%; }\n\n.main-nav__item {\n  position: relative;\n  cursor: pointer;\n  transform: translateX(100px);\n  opacity: 0;\n  transition: transform 0ms cubic-bezier(0.19, 1, 0.22, 1) 1000ms, opacity 0ms cubic-bezier(0.19, 1, 0.22, 1) 1000ms; }\n  .main-nav__item.active-link {\n    color: #000; }\n    .main-nav__item.active-link::before {\n      opacity: 1; }\n  .main-nav__item::before {\n    display: block;\n    content: '';\n    width: 14px;\n    height: 14px;\n    border-radius: 100%;\n    background: #000;\n    position: absolute;\n    top: 50%;\n    margin-top: -7px;\n    left: -35px;\n    opacity: 0; }\n  .main-nav__item:hover {\n    color: #000; }\n    .main-nav__item:hover::before {\n      opacity: 1; }\n\n.main-nav__menu-photo {\n  height: 100%;\n  width: 60%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  position: relative; }\n  .main-nav__menu-photo .main-nav__picture-area {\n    position: absolute;\n    opacity: 0;\n    width: 100%;\n    max-width: 600px;\n    height: 100%;\n    max-height: 512px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms, z-index 0ms cubic-bezier(0.19, 1, 0.22, 1) 500ms; }\n    .main-nav__menu-photo .main-nav__picture-area.active {\n      opacity: 1; }\n    .main-nav__menu-photo .main-nav__picture-area.hover-active {\n      opacity: 1;\n      transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms, z-index 0ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;\n      z-index: 300; }\n\n.header-container__social-links {\n  position: absolute;\n  bottom: 30px;\n  left: 100px;\n  font: 400 18px/30px 'Work Sans', 'Helvetica', sans-serif;\n  color: #9b9ba4; }\n\n.social-links__email {\n  transition: color 700ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;\n  color: #2a2a2c;\n  font: inherit; }\n\n.header-container.header-container--animation-start .header-container__nav-button span {\n  width: 26px;\n  margin-left: -13px; }\n\n.header-container.displayed {\n  transform: translateX(0); }\n  .header-container.displayed .main-nav__item {\n    transform: translateX(0);\n    opacity: 1;\n    transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms, opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms; }\n    .header-container.displayed .main-nav__item:nth-child(1) {\n      transition-delay: 0ms; }\n    .header-container.displayed .main-nav__item:nth-child(2) {\n      transition-delay: 50ms; }\n    .header-container.displayed .main-nav__item:nth-child(3) {\n      transition-delay: 100ms; }\n    .header-container.displayed .main-nav__item:nth-child(4) {\n      transition-delay: 150ms; }\n    .header-container.displayed .main-nav__item:nth-child(5) {\n      transition-delay: 200ms; }\n  .header-container.displayed .main-nav__inner {\n    transform: translateX(0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent(menuEl) {
        this.menuEl = menuEl;
        this.menuData = [
            {
                routerLink: 'index',
                title: 'About me',
            },
            {
                routerLink: 'skills',
                title: 'Skills',
            },
            {
                routerLink: 'portfolio',
                title: 'Portfolio',
            },
            {
                routerLink: 'blog',
                title: 'Blog',
            },
            {
                routerLink: 'contacts',
                title: 'Contacts',
            },
        ];
        this.picturesData = [
            {
                active: 'index',
                image: 'photo1.jpg',
            },
            {
                active: 'skills',
                image: 'photo2.jpg',
            },
            {
                active: 'portfolio',
                image: 'photo3.jpg',
            },
            {
                active: 'blog',
                image: 'photo4.jpg',
            },
            {
                active: 'contacts',
                image: 'photo5.jpg',
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.currentLocation = function () {
        var location = window.location.pathname.substr(1);
        return location;
    };
    HeaderComponent.prototype.hoverCurrentPicture = function (index) {
        this.menuEl.nativeElement
            .querySelector('.main-nav__picture-area:nth-child(' + (index + 1) + ')')
            .classList.add('hover-active');
    };
    HeaderComponent.prototype.leaveCurrentPicture = function (index) {
        this.menuEl.nativeElement
            .querySelector('.main-nav__picture-area:nth-child(' + (index + 1) + ')')
            .classList.remove('hover-active');
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.animationInitStart = true;
        }, 300);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.openedMenu = !this.openedMenu;
        if (this.openedMenu) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'initial';
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-link/main-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-link-container\">\n  <p class=\"main-link-container__desc\">let's do this</p>\n  <a href=\"mailto:sergeyukhanov.dev@gmail.com\" class=\"main-link-container__email \">sergeyukhanov.dev@gmail.com</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-link/main-link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-link-container__desc {\n  font-size: 18px;\n  color: #4b32f0;\n  display: block;\n  margin-bottom: 3px; }\n\n.main-link-container__email {\n  font-size: 22px; }\n\n@media (max-width: 768px) {\n  .main-link-container__desc {\n    font-size: 14px; }\n  .main-link-container__email {\n    font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-link/main-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLinkComponent = (function () {
    function MainLinkComponent() {
    }
    MainLinkComponent.prototype.ngOnInit = function () {
    };
    return MainLinkComponent;
}());
MainLinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main-link',
        template: __webpack_require__("../../../../../src/app/components/main-link/main-link.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-link/main-link.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainLinkComponent);

//# sourceMappingURL=main-link.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/position-container/position-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"position-container\">\n  <p class=\"position-container__quote\">\n    Я всегда готов к новым вызовам, к плодотворному сотрудничеству\n    с людьми и компаниями для достижения общих идей и целей\n  </p>\n  <p class=\"position-container__description descriptionText\">\n    Мое видение отличного продукта сочетает в себе <span>ориентированный</span> на\n    пользователя подход с удобными и интуитивно понятными интерфейсами.\n    Имея опыт работы в качестве старшего веб-разработчика, и в то же\n    время тесно взаимодействуя с другими командами, я могу быстро\n    адаптироваться к новым вызовам. Будучи довольно практичным, мне\n    нравится принимать участие во всем процессе, начиная от идей и\n    составления прототипа продукта, до проектирования, разработки и\n    реализации <span>поставленных</span> целей.\n  </p>\n  <div class=\"position-container__line\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/position-container/position-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".position-container__quote {\n  font: 500 24px/38px 'Work Sans', 'Helvetica', sans-serif;\n  max-width: 50%;\n  text-align: right;\n  margin-bottom: 40px; }\n\n.position-container__description {\n  box-sizing: border-box;\n  padding-left: 250px; }\n  .position-container__description span {\n    position: relative; }\n    .position-container__description span::after {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: -5px;\n      left: 0;\n      height: 18px;\n      width: 100%;\n      background: #edeafd;\n      z-index: -1; }\n\n.position-container__line {\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  bottom: -220px;\n  left: 100px; }\n  .position-container__line::before {\n    display: block;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    transform: translate(-50%, -50%) rotate(45deg);\n    background: #000;\n    left: 50%;\n    top: 50%;\n    transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);\n    transition-delay: 0.6s;\n    opacity: 1; }\n\n@media (max-width: 768px) {\n  .position-container__description span::after {\n    height: 14px; }\n  .position-container__quote {\n    font: 500 20px/32px 'Work Sans', 'Helvetica', sans-serif;\n    margin-bottom: 30px;\n    max-width: 100%; }\n  .position-container__description {\n    padding-left: 0; }\n  .position-container__line {\n    width: 60%;\n    height: 2px;\n    left: auto;\n    right: 20px;\n    margin: 0;\n    bottom: -40px; }\n    .position-container__line::before {\n      transform: translate(-50%, -50%) rotate(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/position-container/position-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionContainerComponent = (function () {
    function PositionContainerComponent() {
    }
    PositionContainerComponent.prototype.ngOnInit = function () {
    };
    return PositionContainerComponent;
}());
PositionContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-position-container',
        template: __webpack_require__("../../../../../src/app/components/position-container/position-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/position-container/position-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PositionContainerComponent);

//# sourceMappingURL=position-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/skills-container/skills-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-container\">\n  <p class=\"skills-container__title\">my skills</p>\n  <ul class=\"skills-container__list\">\n    <li class=\"skills-container__list_item\">ReactJS & Angular 2+</li>\n    <li class=\"skills-container__list_item\">JavaScript/TypeScript</li>\n    <li class=\"skills-container__list_item\">RxJS</li>\n    <li class=\"skills-container__list_item\">Redux</li>\n    <li class=\"skills-container__list_item\">Django</li>\n    <li class=\"skills-container__list_item\">NestJS</li>\n  </ul>\n  <div class=\"skills-container__icon-area icon-container\" style=\"background-image: url(/assets/img/skill_icon.svg)\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/skills-container/skills-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n\n.skills-container {\n  color: #fff;\n  margin: 0 auto;\n  text-align: center;\n  background: #4b32f0;\n  padding: 110px 0; }\n\n.skills-container__title {\n  font: 500 24px/52px 'Work Sans', 'Helvetica', sans-serif;\n  color: #fff;\n  position: relative; }\n  .skills-container__title::before {\n    display: block;\n    content: '';\n    height: 8px;\n    width: 8px;\n    background: #fff;\n    border-radius: 100%;\n    margin: 0 auto 40px; }\n\n.skills-container__list {\n  font: 300 30px/52px 'Work Sans', 'Helvetica', sans-serif; }\n\n.skills-container__icon-area::before {\n  content: '';\n  display: block;\n  height: 60px;\n  width: 2px;\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin: 0 0 24px -1px;\n  background: #fff; }\n\n@media (max-width: 768px) {\n  .skills-container {\n    padding: 60px 20px; }\n  .skills-container__list {\n    font: 300 20px/52px 'Work Sans', 'Helvetica', sans-serif; }\n  .skills-container__icon-area::before {\n    height: 40px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/skills-container/skills-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsContainerComponent = (function () {
    function SkillsContainerComponent() {
    }
    SkillsContainerComponent.prototype.ngOnInit = function () {
    };
    return SkillsContainerComponent;
}());
SkillsContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-skills-container',
        template: __webpack_require__("../../../../../src/app/components/skills-container/skills-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/skills-container/skills-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SkillsContainerComponent);

//# sourceMappingURL=skills-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/start-banner/start-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"start-banner-container start-banner-container--hidden\" [class.start-banner-container--show]=\"showedContainer\">\n  <div class=\"start-banner-container__photo\" style=\"background-image: url(/assets/img/photo2.jpg)\"></div>\n  <div class=\"start-banner-container__title\">\n    Я фронтенд-разработчик со знаниями дизайна и бэкенда, проживающий в Москве.\n  </div>\n  <div class=\"start-banner-container__fixed-position\">\n    <div class=\"start-banner-container__contact-area\">\n      <app-main-link></app-main-link>\n    </div>\n    <div (click)=\"triggerClick()\" class=\"start-banner-container__link-area link-area\">\n      <p class=\"link-area__title\">about me</p>\n      <div class=\"link-area__icon\" style=\"background-image: url(/assets/img/arrow_dark_blue.svg)\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/start-banner/start-banner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".start-banner-container {\n  height: calc(100vh - 60px);\n  width: 100%;\n  position: relative;\n  margin: 0 auto; }\n  .start-banner-container--hidden .start-banner-container__photo {\n    transform: translateY(100%);\n    opacity: 0; }\n  .start-banner-container--hidden .start-banner-container__fixed-position {\n    transform: translate(-50%, 100%);\n    opacity: 0; }\n  .start-banner-container--show .start-banner-container__photo {\n    transform: translateY(0%);\n    opacity: 1; }\n  .start-banner-container--show .start-banner-container__fixed-position {\n    transform: translate(-50%, 0%);\n    opacity: 1; }\n\n.start-banner-container__photo {\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: calc(100% - 100px);\n  max-width: calc(1024px - 100px);\n  margin: 0 auto;\n  height: 100%;\n  position: relative;\n  transition: transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 1000ms, opacity 500ms cubic-bezier(0.19, 1, 0.22, 1) 1000ms; }\n  .start-banner-container__photo::before {\n    background: linear-gradient(to left, rgba(6, 13, 32, 0), rgba(3, 1, 6, 0.9));\n    width: 100%;\n    height: 100%;\n    content: '';\n    position: absolute; }\n\n.start-banner-container__fixed-position {\n  width: 100%;\n  max-width: 1024px;\n  position: absolute;\n  margin: 0 auto;\n  height: calc(100vh - 60px);\n  top: 0;\n  left: 50%;\n  transition: transform 1050ms cubic-bezier(0.19, 1, 0.22, 1) 1050ms, opacity 500ms cubic-bezier(0.19, 1, 0.22, 1) 1000ms; }\n\n.start-banner-container__title {\n  position: absolute;\n  top: 100px;\n  left: 20px;\n  z-index: 4;\n  width: 600px;\n  font: 500 40px/48px 'Work Sans', 'Helvetica', sans-serif;\n  color: #9b9ba4; }\n\n.start-banner-container__contact-area {\n  position: absolute;\n  top: 30px;\n  left: calc(100% - 35px);\n  transform-origin: 0% 0%;\n  transform: rotate(90deg) translateY(-100%); }\n\n.start-banner-container__link-area {\n  font-size: 18px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  transform: rotate(90deg) translate(-60%, 170%); }\n  .start-banner-container__link-area:hover .link-area_icon {\n    transform: translateX(10%); }\n    .start-banner-container__link-area:hover .link-area_icon::after {\n      width: 3.86rem;\n      right: 0; }\n\n.link-area__title {\n  margin-right: 1rem;\n  margin-bottom: .2rem;\n  white-space: nowrap; }\n\n.link-area__icon {\n  position: relative;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 4rem;\n  height: 2rem;\n  margin-top: 0;\n  z-index: 22;\n  transition: all 200ms ease-out; }\n  .link-area__icon::before {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    content: '';\n    width: 3rem;\n    left: 0;\n    height: 1px;\n    background: #060E20; }\n  .link-area__icon::after {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    content: '';\n    width: 3rem;\n    left: 0;\n    height: 1px;\n    background: #060E20;\n    transition: all 200ms ease-out; }\n\n@media (max-width: 768px) {\n  .start-banner-container__photo {\n    width: 100%; }\n  .start-banner-container__title {\n    color: #ffffff;\n    text-align: center;\n    top: 100px;\n    left: 0;\n    z-index: 4;\n    width: calc(100% - 40px);\n    padding: 0 20px;\n    font: 500 24px/35px 'Work Sans', 'Helvetica', sans-serif; }\n  .start-banner-container__fixed-position {\n    width: 100%;\n    max-width: 1024px;\n    position: relative;\n    margin: 24px auto 0;\n    height: auto;\n    top: 0;\n    left: 50%; }\n  .start-banner-container {\n    height: calc(80vh - 60px);\n    width: 100%;\n    position: relative;\n    margin: 0 auto; }\n  .start-banner-container__contact-area {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    transform-origin: 0 0;\n    transform: rotate(0deg) translateY(0%); }\n  .start-banner-container__link-area {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/start-banner/start-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartBannerComponent = (function () {
    function StartBannerComponent() {
        this.showedContainer = false;
        this.aboutClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StartBannerComponent.prototype.ngOnInit = function () {
    };
    StartBannerComponent.prototype.triggerClick = function () {
        this.aboutClick.emit();
    };
    return StartBannerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], StartBannerComponent.prototype, "showedContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])('aboutClick'),
    __metadata("design:type", Object)
], StartBannerComponent.prototype, "aboutClick", void 0);
StartBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-start-banner',
        template: __webpack_require__("../../../../../src/app/components/start-banner/start-banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/start-banner/start-banner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StartBannerComponent);

//# sourceMappingURL=start-banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/title-component/title-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-component-container standartPadding\">\n  <div class=\"title-component-container__line\"></div>\n  <p class=\"h2 blackColor title-component-container__title\">{{text}}</p>\n  <div class=\"title-component-container__line\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/title-component/title-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-component-container {\n  margin: 24px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.title-component-container__title {\n  margin: 0 48px;\n  white-space: nowrap; }\n\n.title-component-container__line {\n  background: rgba(42, 59, 77, 0.05);\n  width: 100%;\n  height: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/title-component/title-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponentComponent = (function () {
    function TitleComponentComponent() {
    }
    TitleComponentComponent.prototype.ngOnInit = function () {
    };
    return TitleComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TitleComponentComponent.prototype, "text", void 0);
TitleComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-title-component',
        template: __webpack_require__("../../../../../src/app/components/title-component/title-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/title-component/title-component.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TitleComponentComponent);

//# sourceMappingURL=title-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/pages/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contacts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/pages/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contacts/contacts.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"index-container\">\n\n  <section id=\"start-banner\" class=\"index-container__start-banner hidden standartPadding\">\n    <app-start-banner\n      [showedContainer]=\"showStartBanner\"\n      (aboutClick)=\"showMoreClick()\"\n    ></app-start-banner>\n  </section>\n\n  <div id=\"about-trigger\" class=\"spacer\"></div>\n\n  <section id=\"about-container\" class=\"index-container__about-container hidden standartPadding\">\n    <app-about-container></app-about-container>\n  </section>\n\n  <div id=\"skills-trigger\" class=\"spacer\"></div>\n\n  <section id=\"skills-container\" class=\"index-container__skills-container hidden\">\n    <app-skills-container></app-skills-container>\n  </section>\n\n  <div id=\"position-trigger\" class=\"spacer\"></div>\n\n  <section id=\"position-container\" class=\"index-container__position-container hidden standartPadding\">\n    <app-position-container></app-position-container>\n  </section>\n\n  <!--<div id=\"footer-trigger\" class=\"spacer\"></div>-->\n\n  <section id=\"footer-container\" class=\"index-container__footer-container standartPadding\">\n    <app-footer></app-footer>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-container {\n  margin-top: 60px; }\n\n.index-container__start-banner {\n  position: relative;\n  padding-bottom: 230px; }\n\n.index-container__about-container {\n  max-width: 1024px;\n  padding: 0 80px;\n  margin: 0 auto 100px;\n  position: relative; }\n  .index-container__about-container.hidden /deep/ .about-container__line::before {\n    width: 0px;\n    opacity: 0; }\n\n.index-container__skills-container {\n  width: 100%;\n  min-height: 80vh;\n  margin-bottom: 110px; }\n\n.index-container__position-container {\n  max-width: 950px;\n  padding: 0 80px;\n  margin: 0 auto 250px;\n  position: relative; }\n  .index-container__position-container.hidden /deep/ .position-container__line::before {\n    width: 0px;\n    opacity: 0; }\n\n.index-container__footer-container {\n  text-align: center;\n  padding-bottom: 80px; }\n\n@media (max-width: 768px) {\n  .index-container__about-container,\n  .index-container__position-container {\n    padding: 0 20px;\n    margin-bottom: 50px; }\n  .index-container__skills-container {\n    margin-bottom: 50px; }\n  .index-container__footer-container {\n    padding-bottom: 20px; }\n  .index-container__start-banner {\n    padding-bottom: 150px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ScrollMagic__ = __webpack_require__("../../../../ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ScrollMagic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ScrollMagic__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TweenMax, TimelineMax, TweenLite } from 'gsap';

// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
var IndexComponent = (function () {
    function IndexComponent() {
        // ctrl = new ScrollMagic.Controller({addIndicators: true});
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1_ScrollMagic__["Controller"]();
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.showStartBanner = true;
        setTimeout(function () {
            document.getElementById('start-banner').classList.remove('hidden');
        }, 500);
        var aboutScene = new __WEBPACK_IMPORTED_MODULE_1_ScrollMagic__["Scene"]({
            triggerElement: '#about-trigger',
            triggerHook: 0.7,
        })
            .addTo(this.ctrl);
        aboutScene.on("start", function (event) {
            document.getElementById('about-container').classList.toggle('hidden');
        });
        var skillsScene = new __WEBPACK_IMPORTED_MODULE_1_ScrollMagic__["Scene"]({
            triggerElement: '#skills-trigger',
            triggerHook: 0.7,
        })
            .addTo(this.ctrl);
        skillsScene.on("start", function (event) {
            document.getElementById('skills-container').classList.toggle('hidden');
        });
        var positionScene = new __WEBPACK_IMPORTED_MODULE_1_ScrollMagic__["Scene"]({
            triggerElement: '#position-trigger',
            triggerHook: 0.7,
        })
            .addTo(this.ctrl);
        positionScene.on("start", function (event) {
            document.getElementById('position-container').classList.toggle('hidden');
        });
        // const footerScene = new ScrollMagic.Scene({
        //   triggerElement: '#footer-trigger',
        //   triggerHook: 0.7,
        // })
        //   .addTo(this.ctrl);
        //
        // footerScene.on("start", function (event) {
        //   document.getElementById('footer-container').classList.toggle('hidden')
        // });
    };
    IndexComponent.prototype.showMoreClick = function () {
        var bannerHeight = document.getElementById('start-banner').offsetHeight - 100;
        window.scrollTo({ top: bannerHeight, behavior: 'smooth' });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/pages/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/index/index.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  portfolio works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map