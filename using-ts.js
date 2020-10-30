var button = document.getElementById("button");
var inputOne = document.getElementById("num1");
var inputTwo = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    var number1 = Number(inputOne.value);
    var number2 = Number(inputTwo.value);
    console.log("sum: ", add(number1, number2));
});
