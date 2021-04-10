function Logger(logMessage: string) {
  console.log("Logger Factory");

  return function (constructor: Function) {
    console.log(logMessage);
    console.log(`constructor: `, constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");

  return function (constructor: any) {
    console.log("Rendering template...");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("Logging user...")
@WithTemplate("<h1>My Person Object.</h1>", "app")
class Person {
  name = "Serge";
  constructor() {
    console.log("Creating Person object...");
  }
}

// const pers = new Person();
// console.log(pers);

// Property & Method decorators:

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target, name, descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(`target :>> `, target);
  console.log("name :>> ", name);
  console.log("descriptor :>> ", descriptor);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this.price = val;
    } else {
      throw new Error("Price must be positive.");
    }
  }

  get price() {
    return this._price;
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}
