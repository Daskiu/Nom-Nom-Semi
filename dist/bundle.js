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

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_export__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (_store_index__WEBPACK_IMPORTED_MODULE_1__.appState.shape.length === 0) {\n                const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.getShape)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n            }\n            else {\n                this.render();\n            }\n        });\n    }\n    render() {\n    }\n}\ncustomElements.define(\"app-dashboard\", Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/datapost.ts":
/*!**********************************!*\
  !*** ./src/services/datapost.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ traer_post)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction traer_post() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const dataPost = [\n                {\n                    profileimg: \"/Images/profile.png\",\n                    img: \"/Images/R1.jpg\",\n                    name: \"Patylyn\",\n                    like: \"/Images/like.png\",\n                    numb: \"5632\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    img: \"/Images/R9.jpg\",\n                    name: \"Dominic\",\n                    like: \"/Images/like.png\",\n                    numb: \"103\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    img: \"/Images/R11.jpg\",\n                    name: \"5heldon\",\n                    like: \"/Images/like.png\",\n                    numb: \"73\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    img: \"/Images/R8.jpg\",\n                    name: \"Stenson7\",\n                    like: \"/Images/like.png\",\n                    numb: \"56\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Niall23\",\n                    img: \"/Images/R7.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"10\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Daskiu\",\n                    img: \"/Images/R2.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"346\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    img: \"/Images/R10.jpg\",\n                    name: \"Steven6\",\n                    like: \"/Images/like.png\",\n                    numb: \"108\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"JuanDaSa\",\n                    img: \"/Images/R3.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"342\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Juanez1999\",\n                    img: \"/Images/R1.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"986\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"MejiDuardo\",\n                    img: \"/Images/R5.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"6547\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"SolAnne\",\n                    img: \"/Images/R6.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"675\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Ramiro.1987\",\n                    img: \"/Images/R3.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"76\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Osanova\",\n                    img: \"/Images/R2.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"986\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"NASA\",\n                    img: \"/Images/R4.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"6589\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Randy\",\n                    img: \"/Images/R6.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"67487\",\n                    comment: \"/Images/Comment.png\",\n                },\n                {\n                    profileimg: \"/Images/profile.png\",\n                    name: \"Landizu\",\n                    img: \"/Images/R7.jpg\",\n                    like: \"/Images/like.png\",\n                    numb: \"847584\",\n                    comment: \"/Images/Comment.png\",\n                },\n            ];\n            return dataPost;\n        }\n        catch (error) {\n            console.error(error);\n            throw new Error(\"Error al obtener los datos de los posts\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/datapost.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewShape\": () => (/* binding */ addNewShape),\n/* harmony export */   \"getShape\": () => (/* binding */ getShape),\n/* harmony export */   \"logIn\": () => (/* binding */ logIn),\n/* harmony export */   \"logOut\": () => (/* binding */ logOut)\n/* harmony export */ });\n/* harmony import */ var _services_datapost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/datapost */ \"./src/services/datapost.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst logOut = () => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGOUT,\n        payload: undefined\n    };\n};\nconst logIn = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGIN,\n        payload\n    };\n};\nconst getShape = () => __awaiter(void 0, void 0, void 0, function* () {\n    const Shape = yield (0,_services_datapost__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.ShapeActions.GET,\n        payload: Shape\n    };\n});\nconst addNewShape = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.ShapeActions.ADD,\n        payload\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

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