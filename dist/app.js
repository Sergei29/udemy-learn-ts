"use strict";
let user1;
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
user1 = new Person("John");
