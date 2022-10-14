let userInput: unknown;
let userName: string;

userInput = 5; // not going to provide an error though
userInput = "tosin"; // still not going to provide an error also

// to do type check for it to avoid error for username
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, error: number) {
  throw { message: message, error: 500 };
}

generateError("an error occured", 500);
