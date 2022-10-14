function adding(
  num1: number,
  num2: number
): number /* telling typescript explicitely the type of return ps optional */ {
  return num1 + num2;
}
console.log(adding(20, 30));

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

let combinedValue: (a: number, b: number) => number;
combinedValue = adding;
printResult(combinedValue(60, 60));

printResult(adding(20, 30));

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}
addAndHandle(20, 80, (result) => {
  console.log(result);
});
