"use strict";
function adding(num1, num2) {
    return num1 + num2;
}
console.log(adding(20, 30));
function printResult(num) {
    console.log(`Result: ${num}`);
}
let combinedValue;
combinedValue = adding;
printResult(combinedValue(60, 60));
printResult(adding(20, 30));
function addAndHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addAndHandle(20, 80, (result) => {
    console.log(result);
});
