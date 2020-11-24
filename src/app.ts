const getArray = <T>(items: T[]): T[] => {
  return new Array<T>().concat(items);
};

const myNums = getArray<number>([100, 200, 300]);
const myStrings = getArray<string>(["Hello", "World"]);

myNums.push(400);
myStrings.push("TypeScript");

// myNums.push("Hi"); // Compiler error
// myStrings.push(500); // Compiler error

console.log(myNums);
console.log(myStrings);

// promises with generics:

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.0001) {
      resolve("It is done.");
    } else {
      reject("Error");
    }
  }, 200);
});

interface IFetchData {
  id: string;
  data: string[];
}

const fetchPromise: Promise<IFetchData> = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.3) {
      resolve({
        id: `${Date.now()}`,
        data: ["Hello", "World"],
      });
    } else {
      reject("Fetch Error.");
    }
  }, 200);
});

fetchPromise
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

// using multiple generics:

const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
  return Object.assign(obj1, obj2);
};

const person = merge({ name: "Serge" }, { age: 45 });
//const person2 = merge({ name: "John", hobbies: ["Sports"] }, 30); // Compiler error

console.log(person.name);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
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
// console.log(countAndDescribe({abc: 1})); // Compiler error;
console.log(countAndDescribe({ name: "John", length: 11 })); // Compiler error;
