"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const e1 = {
    name: "Oluwatosin Akande",
    privileges: ["learning Node", "learning React"],
    startDate: new Date(),
};
const nums = 10;
function adds(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = adds("oluwatosin", "tosin");
result.split(" "); /* typescript will give and error here as it doesnt really know the exact return here*/
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("loading cargo" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        console.log(vehicle.loadCargo(1000));
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const textInput = document.getElementById("text-input");
// method 2 of casting
const textInput2 = document.getElementById("text-input2");
textInput.value = "text";
const errorMessage = {
    email: "please enter the correct email",
};
// if email value was a number, typescript will generate an error, code below will be error
const fetchedUserData = {
    id: "u1",
    name: "oluwatosin",
    job: { title: "CEO", description: "my own Company" },
};
// assuming no job we can use the optional property
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//NULLINSH COALESCING
const userInputs = null;
const storedData = userInputs !== null && userInputs !== void 0 ? userInputs : "Default";
// here the default value will be printed if it's and empty string, it will print the empty string
console.log(storedData);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got one element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["play", "sport"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "oluwatosin" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const objStorage = new DataStorage();
objStorage.addItem(5);
objStorage.addItem(4);
objStorage.addItem(3);
objStorage.getItem();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// const names: Readonly<string[]> = ["oluwa", "tosin"];
// names.push("akande"); //all these will generate an error as it's only readonly
// names.pop(); // this is all generate an error as we cannot remove any value from d array
