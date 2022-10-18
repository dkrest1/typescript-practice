import { objectTraps } from "immer/dist/internal";

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElveatedEmployee = Admin & Employee;

const e1: ElveatedEmployee = {
  name: "Oluwatosin Akande",
  privileges: ["learning Node", "learning React"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type universal = combinable & Numeric;

const nums: universal = 10;

// so we add function overload here to avoid the error below
function adds(a: string, b: string): string;
function adds(a: number, b: number): number;
function adds(a: number, b: string): string;
function adds(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = adds("oluwatosin", "tosin");
result.split(
  " "
); /* typescript will give and error here as it doesnt really know the exact return here*/

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  // we can check for name as both admin and employee has name property
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Priveledges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "oluwatosin", startDate: new Date() });

class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargo" + amount);
  }
}

type Vehicle = Truck | Car;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    console.log(vehicle.loadCargo(1000));
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }

  console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// method 1 of casting
const textInput = <HTMLInputElement>document.getElementById("text-input")!;
// method 2 of casting
const textInput2 = document.getElementById("text-input2")! as HTMLInputElement;

textInput.value = "text";

// indexing
interface errorContainer {
  [prop: string]: string;
}

const errorMessage: errorContainer = {
  email: "please enter the correct email",
};

// if email value was a number, typescript will generate an error, code below will be error
const fetchedUserData = {
  id: "u1",
  name: "oluwatosin",
  job: { title: "CEO", description: "my own Company" },
};

// assuming no job we can use the optional property
console.log(fetchedUserData?.job?.title);

//NULLINSH COALESCING
const userInputs = null;
const storedData = userInputs ?? "Default";
// here the default value will be printed if it's and empty string, it will print the empty string
console.log(storedData);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got one element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["play", "sport"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "oluwatosin" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const objStorage = new DataStorage<number>();
objStorage.addItem(5);
objStorage.addItem(4);
objStorage.addItem(3);
objStorage.getItem();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// const names: Readonly<string[]> = ["oluwa", "tosin"];
// names.push("akande"); //all these will generate an error as it's only readonly
// names.pop(); // this is all generate an error as we cannot remove any value from d array
