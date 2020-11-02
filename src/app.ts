const add = (a: number, b: number = 1) => a + b;

const printOutput = (result: string | number) => {
  console.log("Result: ", result);
};

printOutput(add(5, 2));

const addAll = (...numbers: number[]) =>
  numbers.reduce((acc, current) => {
    return (acc += current);
  }, 0);

printOutput(addAll(1, 2, 3, 4, 5));

const addOnlyThree = (...nums: [number, number, number]) =>
  nums.reduce((acc, current) => (acc += current), 0);

printOutput(addOnlyThree(1, 2, 3));

const hobbies = ["Cooking", "Sports", "Singing", "Programming"];
const person = {
  firstName: "Serge",
  age: 45,
};

const [hobby1, hobby2, ...otherHobbies] = hobbies;
console.log("hobby1: ", hobby1);
console.log("hobby2: ", hobby2);
console.log("otherHobbies: ", otherHobbies);

const { firstName, age } = person;
console.log("firstName: ", firstName, ", age: ", age);
