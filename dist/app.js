"use strict";
var _a, _b;
const e1 = {
    name: "Serge",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
add(1, 2);
add("Joe", " Doe");
add("Serge", 1);
const addOrConcat = ((a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
});
const add1 = addOrConcat(1, 2);
const add2 = addOrConcat("Joe", " Doe");
const add3 = addOrConcat("Joe", 1);
const add4 = addOrConcat(2, " Doe");
console.log(add1, add2, add3, add4);
const printEmployeeInformation = (emp) => {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("privileges: ", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: ", emp.startDate);
    }
};
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo...", amount);
    }
}
const useVehicle = (veh) => {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadCargo(123);
    }
};
useVehicle(new Car());
useVehicle(new Truck());
const moveAnimal = (animal) => {
    switch (animal.type) {
        case "bird":
            console.log("Moving with speed: ", animal.flyingSpeed);
            break;
        case "horse":
            console.log("Moving with speed: ", animal.runningSpeed);
            break;
        default:
            console.log("Moving ... ");
            break;
    }
};
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "Hi, there!";
}
const errorBag = {};
class ErrorBox {
    constructor(key, val) {
        this.prop = key;
        this[this.prop] = val;
    }
}
const errorsBox = new ErrorBox("email", "not a valid emil address");
errorsBox.username = "Username at least 8 chars long and start with letter";
console.log("errorsBox: ", errorsBox);
const fetchedUserData = {
    id: "123",
    name: "Serge",
    job: Math.floor(Math.random() * 10) > 4
        ? {
            title: Math.floor(Math.random() * 10) > 6
                ? {
                    company: "CEO",
                }
                : null,
            description: "My own company",
        }
        : null,
};
console.log((_b = (_a = fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.company);
const getRandomData = (data) => {
    const random = Math.floor(Math.random() * 11);
    if (random < 3) {
        return null;
    }
    else if (random >= 3 && random < 7) {
        return data;
    }
    return;
};
const possibleText = getRandomData("Here is my text.");
const sureTextValue = possibleText !== null && possibleText !== void 0 ? possibleText : "Default text value";
console.log("possibleText: ", possibleText, "\nsureTextValue: ", sureTextValue);
