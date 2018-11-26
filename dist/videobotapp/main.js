(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGdCQUFnQjtHQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGNvbG9yOiAjMzY5O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"max-width-1024\">\n            <div class=\"embed-responsive embed-responsive-16by9\" id=\"player\">\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <button (click)=\"inicio()\">Desde el comienzo</button>\n  <button (click)=\"pausar()\">Pausar</button>\n  <button (click)=\"reproducir()\">Reanudar</button>\n  <button (click)=\"avanzar1()\">Concepto de Proposición</button>\n  <button (click)=\"avanzar2()\">Ejemplo de Proposición</button>\n  <button (click)=\"avanzar3()\">Resumen</button>\n  <button (click)=\"avanzar4()\">¿Qué No es proposición?</button>\n  <button (click)=\"avanzar5()\">Ejemplo de No Proposición</button>\n  <button (click)=\"avanzar6()\">Siguientes lecciones</button>\n\n</div>\n \n<!-- app.component -->\n<chat-dialog>Hola</chat-dialog>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.reframed = false;
    }
    AppComponent.prototype.init = function () {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.video = '7sUI7KW9LA4'; //video id
        window['onYouTubeIframeAPIReady'] = function (e) {
            _this.YT = window['YT'];
            //this.reframed = false;
            _this.player = new window['YT'].Player('player', {
                height: '280',
                width: '640',
                videoId: _this.video,
                playerVars: { 'autoplay': 0, 'controls': 0 },
                events: {
                    'onReady': _this.onPlayerReady.bind(_this),
                    'onStateChange': _this.onPlayerStateChange.bind(_this),
                    'onError': _this.onPlayerError.bind(_this)
                }
            });
        };
    };
    AppComponent.prototype.onPlayerReady = function (event) {
        console.log(event);
    };
    ;
    AppComponent.prototype.onPlayerStateChange = function (event) {
        console.log(event);
    };
    ;
    AppComponent.prototype.onPlayerError = function (event) {
        switch (event.data) {
            case 2:
                console.log('' + this.video);
                break;
            case 100:
                break;
            case 101 || 150:
                break;
        }
        ;
    };
    ;
    AppComponent.prototype.reproducir = function () {
        console.log(event);
        this.player.playVideo();
    };
    AppComponent.prototype.pausar = function () {
        console.log(event);
        this.player.pauseVideo();
    };
    AppComponent.prototype.inicio = function () {
        console.log(event);
        this.player.seekTo(0, true);
    };
    AppComponent.prototype.avanzar1 = function () {
        console.log(event);
        this.player.seekTo(6, true);
    };
    AppComponent.prototype.avanzar2 = function () {
        console.log(event);
        this.player.seekTo(18, true);
    };
    AppComponent.prototype.avanzar3 = function () {
        console.log(event);
        this.player.seekTo(33, true);
    };
    AppComponent.prototype.avanzar4 = function () {
        console.log(event);
        this.player.seekTo(42, true);
    };
    AppComponent.prototype.avanzar5 = function () {
        console.log(event);
        this.player.seekTo(49, true);
    };
    AppComponent.prototype.avanzar6 = function () {
        console.log(event);
        this.player.seekTo(59, true);
    };
    AppComponent.prototype.show_chatbot = function () {
        console.log(event);
    };
    AppComponent.prototype.hide_chatbot = function () {
        console.log(event);
    };
    AppComponent.prototype.send_message = function () {
        console.log(event);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: Message, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Message class for displaying messages in the component
var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dialogflow.angularBot;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_2__["ApiAiClient"]({ accessToken: this.token });
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    // Sends and receives messages via DialogFlow
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Adds message to source
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    border-radius: 50px;\n    margin: 0 15px 10px;\n    padding: 15px 20px;\n    position: relative;\n    font-weight: bold;\n}\n.message.to {\n    background-color: #2095FE;\n    color: #fff;\n    margin-left: 100px;\n    text-align: right;\n}\n.message.from {\n    background-color: #E5E4E9;\n    color: #363636;\n    margin-right: 100px;\n\n}\n.message.to + .message.to,\n.message.from + .message.from {\nmargin-top: -10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG9CQUFvQjs7Q0FFdkI7QUFDRDs7QUFFQSxrQkFBa0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQtZGlhbG9nL2NoYXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IDAgMTVweCAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWVzc2FnZS50byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTVGRTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWVzc2FnZS5mcm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU5O1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG5cbn1cbi5tZXNzYWdlLnRvICsgLm1lc3NhZ2UudG8sXG4ubWVzc2FnZS5mcm9tICsgLm1lc3NhZ2UuZnJvbSB7XG5tYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Hablemos sobre: Proposiciones</h3>\n\n<ng-container *ngFor=\"let message of messages | async\">\n\n  <div class=\"message\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                    'to':   message.sentBy === 'user' }\">\n    {{ message.content }}\n  </div>\n\n</ng-container>\n\n<label for=\"nameField\">¿Que deseas saber?</label>\n\n<input [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\">\n\n<button (click)=\"sendMessage()\">Preguntar</button>\n\n"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDialogComponent = /** @class */ (function () {
    function ChatDialogComponent(chat) {
        this.chat = chat;
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        // appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (acc, val) { return acc.concat(val); }));
    };
    ChatDialogComponent.prototype.sendMessage = function () {
        this.chat.converse(this.formValue);
        this.formValue = '';
    };
    ChatDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-dialog',
            template: __webpack_require__(/*! ./chat-dialog.component.html */ "./src/app/chat/chat-dialog/chat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./chat-dialog.component.css */ "./src/app/chat/chat-dialog/chat-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatDialogComponent);
    return ChatDialogComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-dialog/chat-dialog.component */ "./src/app/chat/chat-dialog/chat-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ChatDialogComponent"]
            ],
            exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ChatDialogComponent"]],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    dialogflow: {
        angularBot: '5a8656fcec84452cbe6c6abf68b6ed39'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /desarrollo/videobotapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map