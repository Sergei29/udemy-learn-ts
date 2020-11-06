"use strict";
let user1;
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
        else {
            this.name = "Unknown";
        }
    }
    greet(phrase) {
        console.log(phrase, " This is ", this.name);
    }
}
user1 = new Person("John");
user1.greet("Hi!");
const user2 = new Person();
user2.greet("Hi there !");
let add;
add = (n1, n2) => n1 + n2;
