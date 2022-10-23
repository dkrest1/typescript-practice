function Logger(logString: string) {
  console.log("logger");
  return function (constructor: Function) {
    console.log("it runs last");
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  console.log("with template");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        console.log("with template run from bottom");
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@withTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

////////////////////////////////////////////////////////
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// //////////////////////////////////////
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "This works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// function Required() {}

// function PositiveNumber() {}

// function validate(obj: object) {}

// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector("form")!;
// courseForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const titleEl = document.getElementById("title") as HTMLInputElement;
//   const priceEl = document.getElementById("price") as HTMLInputElement;

//   const title = titleEl.value;
//   const price = +priceEl.value;

//   const newCourse = new Course(title, price);
//   if (!validate(newCourse)) {
//     alert("Invalid input, try again");
//     return;
//   }

//   console.log(newCourse);
// });
