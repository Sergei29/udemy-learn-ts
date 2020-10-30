function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
let resultPhrase = "And the result is: ";
// resultPhrase = 1; it will show the warning error, not strng type assigned.
const result = add(num1, num2, printResult, resultPhrase);
