"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function RequiredField(target, propertyName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: ["required"] });
}
function PositiveNumber(target, propertyName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: ["positive"] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const key in objValidatorConfig) {
        for (const validator of objValidatorConfig[key]) {
            switch (validator) {
                case "required":
                    isValid = isValid && obj[key].trim().length > 0;
                    break;
                case "positive":
                    isValid = isValid && obj[key] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    RequiredField
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const priceInput = document.getElementById("price");
    const title = titleInput.value;
    const price = +priceInput.value;
    const createdCoure = new Course(title, price);
    if (!validate(createdCoure)) {
        alert("Form data is invalid. try again.");
        return;
    }
    console.log("createdCoure :>> ", createdCoure);
});
