// trying to name your own type
type combinable = number | string;
type combinableDescriptor = "as-number" | "as-string";

function add(
  num1: combinable,
  num2: combinable,
  resultConversion: combinableDescriptor
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

const combinedAges = add(30, 50, "as-number");
console.log(combinedAges);
const combileAgesString = add("30", "50", "as-string");
console.log(combileAgesString);
const combinedNames = add("Oluwa", "tosin", "as-string");
console.log(combinedNames);
