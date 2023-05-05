/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Input/input.ts":
/*!***************************************!*\
  !*** ./src/components/Input/input.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeInput\": () => (/* binding */ AttributeInput),\n/* harmony export */   \"default\": () => (/* binding */ Input)\n/* harmony export */ });\nvar AttributeInput;\n(function (AttributeInput) {\n    AttributeInput[\"PlaceHolder\"] = \"PlaceHolder\";\n})(AttributeInput || (AttributeInput = {}));\nclass Input extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            PlaceHolder: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <input placeholder=\"${this.PlaceHolder}\"></input>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-input\", Input);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Input/input.ts?");

/***/ }),

/***/ "./src/components/addcard/addcard.ts":
/*!*******************************************!*\
  !*** ./src/components/addcard/addcard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeProfadd\": () => (/* binding */ AttributeProfadd),\n/* harmony export */   \"default\": () => (/* binding */ addCard)\n/* harmony export */ });\nvar AttributeProfadd;\n(function (AttributeProfadd) {\n    AttributeProfadd[\"name\"] = \"name\";\n    AttributeProfadd[\"description\"] = \"description\";\n    AttributeProfadd[\"photo\"] = \"photo\";\n    AttributeProfadd[\"meal\"] = \"meal\";\n})(AttributeProfadd || (AttributeProfadd = {}));\nclass addCard extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = [\n            AttributeProfadd.name,\n            AttributeProfadd.description,\n            AttributeProfadd.photo,\n            AttributeProfadd.meal,\n        ];\n        return attrs;\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;\n        this.render();\n        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"#title\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"input\", (event) => {\n            this.setAttribute(AttributeProfadd.name, event.target.value);\n        });\n        (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(\"#description\")) === null || _d === void 0 ? void 0 : _d.addEventListener(\"input\", (event) => {\n            this.setAttribute(AttributeProfadd.description, event.target.value);\n        });\n        (_f = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(\"#photo\")) === null || _f === void 0 ? void 0 : _f.addEventListener(\"input\", (event) => {\n            this.setAttribute(AttributeProfadd.photo, event.target.value);\n        });\n        (_h = (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector(\"#meal\")) === null || _h === void 0 ? void 0 : _h.addEventListener(\"change\", (event) => {\n            this.setAttribute(AttributeProfadd.meal, event.target.value);\n        });\n        (_k = (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.querySelector(\"#submit\")) === null || _k === void 0 ? void 0 : _k.addEventListener(\"click\", () => {\n            console.log(\"Submitted!\");\n        });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case AttributeProfadd.name:\n                this.name = newValue;\n                break;\n            case AttributeProfadd.description:\n                this.description = newValue;\n                break;\n            case AttributeProfadd.photo:\n                this.photo = newValue;\n                break;\n            case AttributeProfadd.meal:\n                this.meal = newValue;\n                break;\n            default:\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <label for=\"title\">Title</label>\r\n            <input id=\"title\" type=\"text\" value=\"${(_a = this.name) !== null && _a !== void 0 ? _a : \"\"}\">\r\n            <label for=\"meal\">Meal</label>\r\n            <select id=\"meal\">\r\n              <option value=\"breakfast\" ${this.meal === \"breakfast\" ? \"selected\" : \"\"}>Breakfast</option>\r\n              <option value=\"lunch\" ${this.meal === \"lunch\" ? \"selected\" : \"\"}>Lunch</option>\r\n              <option value=\"dinner\" ${this.meal === \"dinner\" ? \"selected\" : \"\"}>Dinner</option>\r\n            </select>\r\n            <label for=\"description\">Description</label>\r\n            <textarea id=\"description\">${(_b = this.description) !== null && _b !== void 0 ? _b : \"\"}</textarea>\r\n            <label for=\"photo\">Photo URL</label>\r\n            <input id=\"photo\" type=\"text\" value=\"${(_c = this.photo) !== null && _c !== void 0 ? _c : \"\"}\">\r\n            <img src=\"${(_d = this.photo) !== null && _d !== void 0 ? _d : \"\"}\">\r\n            <button id=\"submit\">Submit</button>\r\n          `;\n        }\n    }\n}\ncustomElements.define(\"my-addcard\", addCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/addcard/addcard.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeInput\": () => (/* reexport safe */ _components_Input_input__WEBPACK_IMPORTED_MODULE_1__.AttributeInput),\n/* harmony export */   \"AttributeProfadd\": () => (/* reexport safe */ _components_addcard_addcard__WEBPACK_IMPORTED_MODULE_0__.AttributeProfadd)\n/* harmony export */ });\n/* harmony import */ var _components_addcard_addcard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/addcard/addcard */ \"./src/components/addcard/addcard.ts\");\n/* harmony import */ var _components_Input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Input/input */ \"./src/components/Input/input.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n/* harmony import */ var _screens_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/add */ \"./src/screens/add.ts\");\n/* harmony import */ var _screens_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/login */ \"./src/screens/login.ts\");\n/* harmony import */ var _screens_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/profile */ \"./src/screens/profile.ts\");\n/* harmony import */ var _screens_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/register */ \"./src/screens/register.ts\");\n/* harmony import */ var _screens_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/search */ \"./src/screens/search.ts\");\n/* harmony import */ var _screens_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_screens_search__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('my-add');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/mocks/datapost.ts":
/*!*******************************!*\
  !*** ./src/mocks/datapost.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataPost\": () => (/* binding */ dataPost)\n/* harmony export */ });\nconst dataPost = [\n    {\n        profileimg: \"/Images/profile.png\",\n        img: \"/Images/R1.jpg\",\n        name: \"Patylyn\",\n        like: \"/Images/like.png\",\n        numb: \"5632\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        img: \"/Images/R9.jpg\",\n        name: \"Dominic\",\n        like: \"/Images/like.png\",\n        numb: \"103\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        img: \"/Images/R11.jpg\",\n        name: \"5heldon\",\n        like: \"/Images/like.png\",\n        numb: \"73\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        img: \"/Images/R8.jpg\",\n        name: \"Stenson7\",\n        like: \"/Images/like.png\",\n        numb: \"56\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Niall23\",\n        img: \"/Images/R7.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"10\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Daskiu\",\n        img: \"/Images/R2.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"346\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        img: \"/Images/R10.jpg\",\n        name: \"Steven6\",\n        like: \"/Images/like.png\",\n        numb: \"108\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"JuanDaSa\",\n        img: \"/Images/R3.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"342\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Juanez1999\",\n        img: \"/Images/R1.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"986\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"MejiDuardo\",\n        img: \"/Images/R5.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"6547\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"SolAnne\",\n        img: \"/Images/R6.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"675\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Ramiro.1987\",\n        img: \"/Images/R3.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"76\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Osanova\",\n        img: \"/Images/R2.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"986\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"NASA\",\n        img: \"/Images/R4.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"6589\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Randy\",\n        img: \"/Images/R6.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"67487\",\n        comment: \"/Images/Comment.png\",\n    },\n    {\n        profileimg: \"/Images/profile.png\",\n        name: \"Landizu\",\n        img: \"/Images/R7.jpg\",\n        like: \"/Images/like.png\",\n        numb: \"847584\",\n        comment: \"/Images/Comment.png\",\n    },\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/mocks/datapost.ts?");

/***/ }),

/***/ "./src/screens/add.ts":
/*!****************************!*\
  !*** ./src/screens/add.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            `;\n        }\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\r\n            <my-menu></my-menu>\r\n            <my-addcard></my-addcard>\r\n            `;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\ncustomElements.define(\"my-add\", add);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/add.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\ncustomElements.define(\"app-dashboard\", Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/screens/login.ts":
/*!******************************!*\
  !*** ./src/screens/login.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Login extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            `;\n        }\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\r\n            <my-menu></my-menu>\r\n            <div class=\"login\">\r\n                <h1>Welcome</h1>\r\n                <my-input placeholder=\"Coloca tu nombre\"></my-input>\r\n                <my-input placeholder=\"Coloca tu contraseña\"></my-input>\r\n                <button class=\"button\">Login</button>\r\n            </div>\r\n            `;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\ncustomElements.define(\"my-login\", Login);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/login.ts?");

/***/ }),

/***/ "./src/screens/profile.ts":
/*!********************************!*\
  !*** ./src/screens/profile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Profile extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            `;\n        }\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\r\n            <my-menu></my-menu>\r\n            <my-profcard></my-profcard>\r\n            `;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);\ncustomElements.define(\"my-profile\", Profile);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/profile.ts?");

/***/ }),

/***/ "./src/screens/register.ts":
/*!*********************************!*\
  !*** ./src/screens/register.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Register extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            `;\n        }\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML += `\r\n            <my-menu></my-menu>\r\n            <div class=\"register\">\r\n                <h1>Register</h1>\r\n                <my-input placeholder=\"Name\"></my-input>\r\n                <my-input placeholder=\"Last name\"></my-input>\r\n                <my-input placeholder=\"Email\"></my-input>\r\n                <my-input placeholder=\"Password\"></my-input>\r\n                <my-input placeholder=\"Confirm Password\"></my-input>\r\n                <button class=\"button\">Register</button>\r\n            </div>\r\n            `;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\ncustomElements.define(\"my-register\", Register);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/register.ts?");

/***/ }),

/***/ "./src/screens/search.ts":
/*!*******************************!*\
  !*** ./src/screens/search.ts ***!
  \*******************************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/search.ts?");

/***/ }),

/***/ "./src/services/sshape.ts":
/*!********************************!*\
  !*** ./src/services/sshape.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mocks_datapost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mocks/datapost */ \"./src/mocks/datapost.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass Traer_Post {\n    get() {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(\"starting fetch...\");\n            const value = yield new Promise((resolve) => {\n                setTimeout(() => resolve(_mocks_datapost__WEBPACK_IMPORTED_MODULE_0__.dataPost), 3000);\n            });\n            return value;\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Traer_Post());\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/sshape.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewShape\": () => (/* binding */ addNewShape),\n/* harmony export */   \"getShape\": () => (/* binding */ getShape),\n/* harmony export */   \"logIn\": () => (/* binding */ logIn),\n/* harmony export */   \"logOut\": () => (/* binding */ logOut)\n/* harmony export */ });\n/* harmony import */ var _services_sshape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sshape */ \"./src/services/sshape.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst logOut = () => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGOUT,\n        payload: undefined\n    };\n};\nconst logIn = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGIN,\n        payload\n    };\n};\nconst getShape = () => __awaiter(void 0, void 0, void 0, function* () {\n    const Shape = yield _services_sshape__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.ShapeActions.GET,\n        payload: Shape\n    };\n});\nconst addNewShape = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.ShapeActions.ADD,\n        payload\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\nconst emptyState = {\n    user: {\n        userName: \"\",\n        email: \"\",\n    },\n    shape: [],\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.AuthActions.LOGIN:\n            return Object.assign(Object.assign({}, currentState), { user: payload.user });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.AuthActions.LOGOUT:\n            return Object.assign(Object.assign({}, currentState), { user: {\n                    userName: \"\",\n                    email: \"\"\n                } });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.ShapeActions.ADD:\n            return Object.assign(Object.assign({}, currentState), { shape: [\n                    payload,\n                    ...currentState.shape,\n                ] });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.ShapeActions.GET:\n            return Object.assign(Object.assign({}, currentState), { shape: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthActions\": () => (/* binding */ AuthActions),\n/* harmony export */   \"ShapeActions\": () => (/* binding */ ShapeActions)\n/* harmony export */ });\nvar AuthActions;\n(function (AuthActions) {\n    AuthActions[\"LOGIN\"] = \"LOGIN\";\n    AuthActions[\"LOGOUT\"] = \"LOGOUT\";\n})(AuthActions || (AuthActions = {}));\nvar ShapeActions;\n(function (ShapeActions) {\n    ShapeActions[\"ADD\"] = \"ADD\";\n    ShapeActions[\"GET\"] = \"GET\";\n})(ShapeActions || (ShapeActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;