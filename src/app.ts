type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
  name: "Serge",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloads with normal function declaration:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

add(1, 2);
add("Joe", " Doe");
add("Serge", 1);

// function overloads eith arrow function:
interface IAddOrConcat {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: number, b: string): string;
  (a: string, b: number): string;
}
const addOrConcat = ((a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}) as IAddOrConcat;

const add1 = addOrConcat(1, 2);
const add2 = addOrConcat("Joe", " Doe");
const add3 = addOrConcat("Joe", 1);
const add4 = addOrConcat(2, " Doe");

console.log(add1, add2, add3, add4);

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
};

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const useVehicle = (veh: Vehicle) => {
  veh.drive();
  if (veh instanceof Truck) {
    veh.loadCargo(123);
  }
};

useVehicle(new Car());
useVehicle(new Truck());

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case "bird":
      console.log("Moving with speed: ", animal.flyingSpeed);
      break;
    case "horse":
      console.log("Moving with speed: ", animal.runningSpeed);
      break;
    default:
      console.log("Moving ... ");
      break;
  }
};

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInput = <HTMLInputElement> document.getElementById('user-input')!;
// OR as an alternative (especially for React case) :

const userInput = document.getElementById("user-input");

if (userInput) {
  (userInput as HTMLInputElement).value = "Hi, there!";
}

interface ErrorContainer {
  // eg. {email:'Not valid email', username: 'Username not valid', ...etc}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {};

class ErrorBox implements ErrorContainer {
  [prop: string]: string;
  constructor(key: string, val: string) {
    this.prop = key;
    this[this.prop] = val;
  }
}

const errorsBox = new ErrorBox("email", "not a valid emil address");
errorsBox.username = "Username at least 8 chars long and start with letter";

console.log("errorsBox: ", errorsBox);

// optional Chaining:
const fetchedUserData = {
  id: "123",
  name: "Serge",
  job:
    Math.floor(Math.random() * 10) > 4
      ? {
          title:
            Math.floor(Math.random() * 10) > 6
              ? {
                  company: "CEO",
                }
              : null,
          description: "My own company",
        }
      : null,
};

console.log(fetchedUserData.job?.title?.company);

// nullish coalescing:
const getRandomData = (data: unknown) => {
  const random = Math.floor(Math.random() * 11);
  if (random < 3) {
    return null;
  } else if (random >= 3 && random < 7) {
    return data;
  }
  return;
};

const possibleText = getRandomData("Here is my text.");

const sureTextValue = possibleText ?? "Default text value";

console.log("possibleText: ", possibleText, "\nsureTextValue: ", sureTextValue);
