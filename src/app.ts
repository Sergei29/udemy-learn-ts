interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    } else {
      this.name = "Unknown";
    }
  }

  greet(phrase: string) {
    console.log(phrase, " This is ", this.name);
  }
}

user1 = new Person("John");
user1.greet("Hi!");
const user2 = new Person();
user2.greet("Hi there !");

// interfaces as a function:

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
