"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SortByNamePipe = void 0;
var core_1 = require("@angular/core");
var SortByNamePipe = /** @class */ (function () {
    function SortByNamePipe() {
    }
    SortByNamePipe.prototype.transform = function (array, field) {
        if (!array)
            return array;
        return array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    SortByNamePipe = __decorate([
        core_1.Pipe({
            name: 'sortByName'
        })
    ], SortByNamePipe);
    return SortByNamePipe;
}());
exports.SortByNamePipe = SortByNamePipe;
