"use strict";
// function add(num1: number, num2: number) {
//   console.log(typeof number1);
//   return num1 + num2;
// }
// const number1 = 20;
// const number2 = 2.5;
// const result = add(number1, number2);
// console.log(result);
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "oluwatosin",
//   age: 30,
// };
// console.log(person.name);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    id: "abc1",
    price: 12.99,
    role: Role.AUTHOR,
};
if (Role.READ_ONLY) {
    console.log("you are only meant to run read only");
}
// let hobbies: string[] = ["dancing", "reading", "running"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
let favouriteActivity;
favouriteActivity = ["sport", 5, true];
