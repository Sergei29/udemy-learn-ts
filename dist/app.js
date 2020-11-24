"use strict";
const getArray = (items) => {
    return new Array().concat(items);
};
const myNums = getArray([100, 200, 300]);
const myStrings = getArray(["Hello", "World"]);
myNums.push(400);
myStrings.push("TypeScript");
console.log(myNums);
console.log(myStrings);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.0001) {
            resolve("It is done.");
        }
        else {
            reject("Error");
        }
    }, 200);
});
const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.3) {
            resolve({
                id: `${Date.now()}`,
                data: ["Hello", "World"],
            });
        }
        else {
            reject("Fetch Error.");
        }
    }, 200);
});
fetchPromise
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
const merge = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};
const person = merge({ name: "Serge" }, { age: 45 });
console.log(person.name);
const countAndDescribe = (element) => {
    let elementDescription = "Has no value";
    if (element.length === 1) {
        elementDescription = "Got 1 element.";
    }
    if (element.length > 1) {
        elementDescription = "Got " + element.length + " elements.";
    }
    return [element, elementDescription];
};
console.log(countAndDescribe("Hi, there!"));
console.log(countAndDescribe(["Hi", "there!"]));
console.log(countAndDescribe({ name: "John", length: 11 }));
