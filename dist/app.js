"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering template...");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Serge";
        console.log("Creating Person object...");
    }
};
Person = __decorate([
    Logger("\nLogging user..."),
    WithTemplate("<h1>My Person Object.</h1>", "app")
], Person);
const pers = new Person();
function Log(target, propertyName) {
    console.log("\nProperty decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("\nAccessor decorator!");
    console.log(target, name, descriptor);
}
function Log3(target, name, descriptor) {
    console.log("\nMethod decorator!");
    console.log(`target :>> `, target);
    console.log("name :>> ", name);
    console.log("descriptor :>> ", descriptor);
}
function Log4(target, methodName, argPosition) {
    console.log("\nParameter decorator!");
    console.log("target :>> ", target);
    console.log("methodName :>> ", methodName);
    console.log("argPosition :>> ", argPosition);
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
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const updatedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunc = originalMethod.bind(this);
            return boundFunc;
        },
    };
    return updatedDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMesssage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMesssage", null);
const printer = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", printer.showMesssage);
