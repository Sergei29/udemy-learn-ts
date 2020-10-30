const button = document.getElementById("button")! as HTMLButtonElement;
const inputOne = document.getElementById("num1")! as HTMLInputElement;
const inputTwo = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener("click", function () {
  const number1 = Number(inputOne.value);
  const number2 = Number(inputTwo.value);
  console.log("sum: ", add(number1, number2));
});
