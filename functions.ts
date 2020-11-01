function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: ", num);
}

function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) {
  const result = n1 + n2;
  callBack(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

printResult(combineValues(1, 5));
addAndHandle(10, 20, printResult);
