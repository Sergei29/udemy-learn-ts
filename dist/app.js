"use strict";
const button = document.getElementById("button");
function clickHandler(message) {
    console.log("Clicked.", message);
}
button.addEventListener("click", clickHandler.bind(null, "Hello"));
function sendAnalytics(msg) {
    console.log(msg);
}
function add(n1, n2) {
    if (n1 + n2 > 10) {
        return n1 + n2;
    }
    return;
}
