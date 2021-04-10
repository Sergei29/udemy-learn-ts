function Logger(logMessage: string) {
  console.log("Logger Factory");

  return function (constructor: Function) {
    console.log(logMessage);
    console.log(`constructor: `, constructor);
  };
}

/**
 * @description class decorator
 * @param {String} template template to insert
 * @param {String} hookId dom element ID
 * @returns {ClassDecorator} new enhanced class. And now all of a sudden we are able to add logic that does not run when the class is defined. But when the class is instantiated.
 */
function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template...");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("\nLogging user...")
@WithTemplate("<h1>My Person Object.</h1>", "app")
class Person {
  name = "Serge";
  constructor() {
    console.log("Creating Person object...");
  }
}

const pers = new Person();
// console.log(pers);

// Property & Method decorators:

/**
 * @description property decorator
 * @param {any} target class instance
 * @param {Sring} propertyName property name
 * @returns {undefined}
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log("\nProperty decorator");
  console.log(target, propertyName);
}

/**
 * @description accessor decorator - getters and setters
 * @param {any} target class instance
 * @param {String} name accessor name
 * @param {PropertyDescriptor} descriptor
 * @returns {any} can return a new `PropertyDescriptor` with updated values, which can upgrade the existing accessor
 */
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("\nAccessor decorator!");
  console.log(target, name, descriptor);
}

/**
 * @description method decorator - class method
 * @param {any} target class instance
 * @param {String} name method name
 * @param {PropertyDescriptor} descriptor
 * @returns {any} can return a new `PropertyDescriptor` with updated values, which can upgrade the existing method
 */
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("\nMethod decorator!");
  console.log(`target :>> `, target);
  console.log("name :>> ", name);
  console.log("descriptor :>> ", descriptor);
}

/**
 * @description parameter, argument decorator
 * @param {any} target class instance
 * @param {String} methodName method name where the argumeht is passed
 * @param {Number} argPosition index position of the argument starting from 0
 * @returns {undefined}
 */
function Log4(target: any, methodName: string, argPosition: number) {
  console.log("\nParameter decorator!");
  console.log("target :>> ", target);
  console.log("methodName :>> ", methodName);
  console.log("argPosition :>> ", argPosition);
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
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}
