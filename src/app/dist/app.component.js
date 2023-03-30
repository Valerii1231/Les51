"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.users = [
            { name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", isShowDetails: false },
            { name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", isShowDetails: false },
            { name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", isShowDetails: false },
            { name: "Anna", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", isShowDetails: false },
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
