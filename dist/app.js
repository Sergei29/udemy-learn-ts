"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logMessage) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logMessage);
        console.log(`constructor: `, constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function (constructor) {
        console.log("Rendering template...");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Serge";
        console.log("Creating Person object...");
    }
};
Person = __decorate([
    Logger("Logging user..."),
    WithTemplate("<h1>My Person Object.</h1>", "app")
], Person);
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target, name, descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(`target :>> `, target);
    console.log("name :>> ", name);
    console.log("descriptor :>> ", descriptor);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this.price = val;
        }
        else {
            throw new Error("Price must be positive.");
        }
    }
    get price() {
        return this._price;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3
], Product.prototype, "getPriceWithTax", null);
